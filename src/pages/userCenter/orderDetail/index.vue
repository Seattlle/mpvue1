<template>
  <div class="container">
      <div class="main">
        <div class="orderStatus">
          {{order.status===0?"交易成功":order.status===1?"待付款":order.status===2?"待发货":"待收货"}}
        </div>
        <div class="addressWrap i-cell">
            <div class="addressIcon">
              <div class="iconWrap">
                <i-icon type="coordinates" size="28"/>
              </div>
            </div>
            <div class="addressInfo i-cell-item">
              <div class="addressTop i-cell">
                <div class="userName">果冻</div>
                <div class="phone i-cell-item">+86-18860031466</div>
              </div>
              <div class="addressBottom">
                <div class="address">福建省 厦门市 湖里区 禾山路 266号</div>
              </div>
            </div>
        </div>
        <div class="orderItem">
          <div class="p-header i-cell">
            <div class="i-cell-item">订单编号：{{order.orderNum}}</div>
            <div class="i-cell-item time">{{order.createTime}}</div>
          </div>
          <div class="p-body">
            <a class="p-item i-cell" v-for="(item,ii) in order.productList" :key="ii" href="/pages/detail/main">
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
            </a>
            <div class="p-body-foot  i-cell">
              <div class="i-cell-item3 tright">共{{order.productList.length}}件商品</div>
              <div class="i-cell-item tright">合计：<span class="totalPrice">￥{{order.totalPrice}}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="orderBottom tright">
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
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        order:{
          orderNum:'654646546542134988612',
          createTime:'2018-11-19 11:01',
          totalPrice:'20700.00',
          status:3,
          productList:[{
            title:'拉维亭波尔多干红葡萄酒',
            source:'法国原瓶进口',
            capacity:'750ML原木箱',
            price:'699.00',
            number:10,
            img:'http://mall.wart9.com/upload/2018/8/26/c4a276ffea6744f09e44441e808ae908.png'
          },{
            title:'拉维亭波尔多干红葡萄酒',
            source:'法国原瓶进口',
            capacity:'750ML原木箱',
            price:'699.00',
            number:10,
            img:'http://mall.wart9.com/upload/2018/8/26/c4a276ffea6744f09e44441e808ae908.png'
          }]
        }
      }
    }
  }
</script>

<style scoped>
  .orderStatus{
    padding:35px 20px;
    color:#fff;
    font-size:16px;
    background:-webkit-linear-gradient(to right,#ff9200,#ff5100);
    background:-moz-linear-gradient(to right,#ff9200,#ff5100);
    background:linear-gradient(to right,#ff9200,#ff5100);
  }
  .addressWrap{
    padding:10px;
    background-color:#fff;
    margin-bottom:10px;
  }
  .addressIcon{
    width:45px;
    text-align:center;
    position: relative;
  }
  .addressIcon .iconWrap{
    position: absolute;
    top:50%;
    left:0;
    width:100%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .addressInfo{
    font-size:14px;
  }
  .addressInfo .addressTop{
    line-height: 30px;
  }
  .addressInfo .userName{
    margin-right:10px;
  }
  .addressInfo .phone{
    color:#999
  }

  .p-body{
    padding-bottom:10px;
  }

  .orderBottom{
    padding:0 15px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    background-color:#fff;
  }
</style>
