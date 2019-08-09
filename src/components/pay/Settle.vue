<template>
  <div>
    <!-- 结算头部 -->
    <div class="settle-header">
      <router-link class="header-icon" to="/shopping">
        <van-icon name="arrow-left" size="24px" />
      </router-link>
      <p class="header-title">结算</p>
    </div>
    <!-- 结算联系人信息栏 -->
    <div class="settle-address">
      <!-- 联系人卡片 -->
      <van-contact-card
        :type="cardType"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="showList = true"
      />

      <!-- 联系人列表 -->
      <van-popup v-model="showList" position="bottom">
        <van-contact-list
          v-model="chosenContactId"
          :list="list"
          @add="onAdd"
          @edit="onEdit"
          @select="onSelect"
        />
      </van-popup>

      <!-- 联系人编辑 -->
      <van-popup v-model="showEdit" position="bottom">
        <van-contact-edit
          :contact-info="editingContact"
          :is-edit="isEdit"
          @save="onSave"
          @delete="onDelete"
        />
      </van-popup>
    </div>
    <!-- 结算方式 -->
    <div class="settle-way">
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell clickable @click="radio = '1'">
            <van-icon name="wechat" color="#00e600" size="20px" />
            <span>
              微信支付 &nbsp;
              <span>工行信用卡支付，享优惠</span>
            </span>
            <van-radio slot="right-icon" name="1" icon-size="20px" checked-color="#ff471a" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <van-icon name="alipay" color="#0066ff" size="20px" />
            <span>
              支付宝 &nbsp;
              <span>支付订单，赢大礼</span>
            </span>
            <van-radio slot="right-icon" name="2" icon-size="20px" checked-color="#ff471a" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      <div class="coupon">
        <span>优惠券</span>
        <span>
          2张可用
          <van-icon name="arrow" size="15px" />
        </span>
      </div>
    </div>
    <!-- 结算商品列表 -->
    <div class="settle-list">
      <li class="goodslist" v-for="(item ,index) of message" :key="index">
        <div class="show-card">
          <img class="goodsimg" :src="item.img" />
          <div class="goodsmessage">
            <span class="goodstitle">{{item.phonetitle}}</span>
            <div>
              <span class="goodsnum">{{item.tag}}</span>
              <span class="goodsprice">{{item.price}}</span>
            </div>
          </div>
        </div>
      </li>
    </div>
    <!-- 底部结算跳转 -->
    <div class="footer">
      <div class="amount-pay">应付金额：</div>

      <router-link to="/confirmpay" class="pay">
        <div>去付款</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      list: [
        {
          name: "张三",
          tel: "13000000000",
          id: 0
        }
      ],
      message: [
        {
          img: " ../static/productimg/2.jpg",
          phonetitle: "手机1",
          price: "1299元",
          tag: "x1"
        },
        {
          img: " ../static/productimg/3.jpg",
          phonetitle: "手机2",
          price: "1599元",
          tag: "x1"
        },
        {
          img: " ../static/productimg/4.jpg",
          phonetitle: "手机3",
          price: "1499元",
          tag: "x1"
        }
      ]
    };
  },

  computed: {
    cardType() {
      return this.chosenContactId !== null ? "edit" : "add";
    },

    currentContact() {
      const id = this.chosenContactId;
      return id !== null ? this.list.filter(item => item.id === id)[0] : {};
    }
  },

  methods: {
    // 添加联系人
    onAdd() {
      this.editingContact = { id: this.list.length };
      this.isEdit = false;
      this.showEdit = true;
    },

    // 编辑联系人
    onEdit(item) {
      this.isEdit = true;
      this.showEdit = true;
      this.editingContact = item;
    },

    // 选中联系人
    onSelect() {
      this.showList = false;
    },

    // 保存联系人
    onSave(info) {
      this.showEdit = false;
      this.showList = false;

      if (this.isEdit) {
        this.list = this.list.map(item => (item.id === info.id ? info : item));
      } else {
        this.list.push(info);
      }
      this.chosenContactId = info.id;
    },

    // 删除联系人
    onDelete(info) {
      this.showEdit = false;
      this.list = this.list.filter(item => item.id !== info.id);
      if (this.chosenContactId === info.id) {
        this.chosenContactId = null;
      }
    }
  }
};
</script>
<style lang="less" scoped>
// 结算头部
.settle-header {
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  border-bottom: 20px solid rgb(236, 235, 235);
  .header-icon {
    display: inline-block;
    margin: 20px 15px;
  }
  .header-title {
    line-height: 100px;
    margin: 0 auto;
    font-size: 50px;
  }
}
// 结算联系人编辑
.settle-address {
  height: 200px;
  .van-cell {
    height: 200px;
    .van-cell__left-icon,
    .van-cell__right-icon {
      width: 100px;
      height: 80px;
      font-size: 60px;
      line-height: 80px;
      margin: 10px 20px;
    }
    .van-cell__value {
      line-height: 100px;
      font-size: 40px;
    }
  }
  //新建联系人
  .van-popup {
    height: 400px;
    // 新建联系人
    .van-contact-list {
      //联系人信息编辑列表
      .van-contact-list__group {
        //联系人信息
        .van-cell {
          line-height: 300px;
          .van-radio {
            line-height: 300px;
            font-size: 40px;
            .van-radio__label,
            .van-contact-list__name {
              line-height: 200px;
              font-size: 40px;
            }
          }
          .van-contact-list__edit {
            width: 100px;
            font-size: 40px;
            text-align: center;
          }
        }
        //新建联系人按钮
      }
      .van-button--large {
        height: 80px;
        font-size: 40px;
      }
    }
  }
}
//支付方式
.settle-way {
  height: 260px;
  .van-cell--clickable {
    line-height: 80px;
    font-size: 35px;
    border-bottom: 2px solid rgb(231, 231, 231);
    padding: 0 20px;
  }
  .coupon {
    line-height: 80px;
    font-size: 35px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .van-icon {
      margin-top: 10px;
    }
  }
}
//商品列表
.settle-list {
  padding: 0 20px;
  .goodslist {
    list-style: none;
    //商品展示模块
    .show-card {
      display: flex;
      height: 180px;
      background: rgb(255, 255, 255);
      border-bottom: 1px solid #ccc;
      border-top: 1px solid #ccc;
      position: relative;
      margin-bottom: 10px;
      //商品图片模块
      .goodsimg {
        width: 30%;
        height: 180px;
      }
      //商品右侧信息显示模块
      .goodsmessage {
        width: 75%;
        line-height: 180px;
        display: flex;
        justify-content: space-around;
        //商品标题模块
        .goodstitle,
        .goodsnum,
        .goodsprice {
          margin: 10px;
          font-size: 40px;
          color: #000;
        }
      }
    }
  }
}

.footer {
  position: fixed;
  bottom: 0;
  // left: 0;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: flex-start;
  .amount-pay {
    width: 65%;
    background: #fff;
    line-height: 130px;
    margin-left: 10px;
    font-size: 45px;
    color: #ff6000;
    text-align: left;
    border-top: 1px solid #ccc;
  }
  .pay {
    width: 35%;
    background: #ff6000;
    line-height: 130px;
    font-size: 45px;
    color: #fff;
    text-align: center;
  }
}
</style>
