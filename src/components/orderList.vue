<template>
  <div class="orderList">
    <div class="orderItem" v-for="(order,index) in orderList" :key="index">
      <div class="p-header i-cell">
        <div class="i-cell-item">订单编号：{{order.orderNum}}</div>
        <div class="i-cell-item time">{{order.createTime}}</div>
      </div>
      <a class="p-body" href="/pages/userCenter/orderDetail/main">
        <div class="p-item i-cell" v-for="(item,ii) in order.productList" :key="ii">
          <div class="product_img_wrap">
            <img :src="item.img" class="product_img">
          </div>
          <div class="i-cell-item2">
            <div class="product_info">
              <h3 class="title">{{item.title}}</h3>
              <div class="i-cell detail">
                <div class="i-cell-item">{{item.source}}</div>
                <div class="i-cell-item">{{item.capacity}}</div>
              </div>
            </div>
          </div>
          <div class="tright">
            <div class="price">￥{{item.price}}</div>
            <div class="num">×{{item.number}}</div>
          </div>
        </div>
        <div class="p-body-foot  i-cell">
          <div class="status" v-if="showStatus">{{order.status===0?"交易成功":order.status===1?"待付款":order.status===2?"待发货":"待收货"}}</div>
          <div class="i-cell-item3 tright">共{{order.productList.length}}件商品</div>
          <div class="i-cell-item tright">合计：<span class="totalPrice">￥{{order.totalPrice}}</span></div>
        </div>
      </a>
      <div class="p-footer tright">
        <div class="p-btn" v-if="order.status===0">
          <i-button type="ghost" shape="circle" size="small">查看详情</i-button>
        </div>
        <div class="p-btn" v-if="order.status===1">
          <i-button type="ghost" shape="circle" size="small">取消订单</i-button>
        </div>
        <div class="p-btn" v-if="order.status===1">
          <i-button type="success" shape="circle" size="small">付款</i-button>
        </div>
        <div class="p-btn" v-if="order.status===2">
          <i-button type="ghost" shape="circle" size="small">提醒发货</i-button>
        </div>
        <div class="p-btn" v-if="order.status===3">
          <i-button type="success" shape="circle" size="small">确认收货</i-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderList",
    props: {
      orderList: {
        type: Array
      },
      showStatus:{
        default:false
      }
    }
  }
</script>

<style>
  .orderList{
    width:100%;
  }
  .orderItem{
    padding:10px 0 0 15px;
    background-color:#fff;
    margin-bottom:10px;
  }
  .product_img_wrap{
    border:1rpx solid #f2f2f2;
    margin-right:10px;
  }
  .product_img_wrap .product_img{
    width:80px;
    height:80px;
    display: block;
  }
  .p-header{
    font-size:14px;
    white-space: nowrap;
    padding:0 15px 10px 0;
    margin-bottom:10px;
    border-bottom:1rpx solid #f2f2f2;
  }
  .p-header .i-cell-item{
    overflow: hidden;
  }
  .p-header .time{
    text-align:right;
  }
  .product_info .title{
    display: block;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size:16px;
    margin-bottom:5px;
  }
  .product_info .detail{
    font-size:12px;
    color:#808080;
  }
  .product_info .detail .i-cell-item:last-child{
    text-align:right;
  }
  .p-body{
    padding-right:15px;
  }
  .p-body .p-item{
    margin-bottom:10px;
  }
  .p-body .tright{
    font-size:12px;
    margin-left:10px;
    white-space: nowrap;
  }
  .p-body-foot .i-cell-item3{
    margin-right:10px;
  }
  .p-body-foot .totalPrice{
    font-size:14px;
  }
  .p-body-foot .status{
    font-size:12px;
    color:#ff0000;
  }
  .p-body-foot .i-cell-item,.p-body-foot .i-cell-item3,.p-body-foot .status{
    line-height: 30px;
  }
  .p-footer{
    padding-right:15px;
    border-top:1rpx solid #f2f2f2;
  }
  .p-btn{
    display: inline-block;
  }

</style>
