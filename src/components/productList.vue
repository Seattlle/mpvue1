<template>
  <div class="productList">
    <i-row>
      <i-col span="12" v-for="(item,index) in products" :key="index">
        <a href="/pages/detail/main" class="col-class" :class="{'col-right-border':(index+1)%2===1}">
          <div class="product_img">
            <img :src="item.src" class="img"/>
          </div>
          <div class="product_content">
            <h4 class="product_title">{{item.title}}</h4>
            <div class="product_info">
              <div class="product_price">￥{{item.price}}</div>
              <div class="product_number">已售{{item.num}}笔</div>
            </div>
          </div>
        </a>
      </i-col>
    </i-row>

    <span class="tips">到底啦</span>
  </div>
</template>

<script>
    export default {
      props:{
        products:{
          type: Array
        }
      },
      onReachBottom(){
        console.log('上拉加载')
      }
    }
</script>

<style scoped>
  .productList{
    padding-top:1px;
  }
  .productList,.product_img{
    width:100%;
    position: relative;
  }
  .productList .col-class{
    padding:15px;
    position: relative;
    background:#fff;
  }
  .productList:before,.productList .col-class:before,.productList .col-right-border:after{
    content:'';
    position: absolute;
    display: block;
    background:#ccc;
  }
  .productList:before{
    top:0;
  }
  .productList .col-class:before{
    bottom:0;
  }
  .productList .col-class:before,.productList:before{
    left:0;
    width:100%;
    height:1px;
    -webkit-transform: scaleY(0.5);
    -moz-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    -o-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
  .productList .col-right-border:after{
    top:0;
    right:0;
    width:1px;
    height:100%;
    -webkit-transform: scaleX(0.5);
    -moz-transform: scaleX(0.5);
    -ms-transform: scaleX(0.5);
    -o-transform: scaleX(0.5);
    transform: scaleX(0.5);
  }
  .product_img .img{
    width:100%;
    height:315rpx;
  }
  .product_title{
    display: block;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom:5px;
    font-size:14px;
    color:#000;
  }
  .product_info{
    font-size:12px;
    display: flex;
  }
  .product_info .product_price,.product_info .product_number{
    flex: 1;
  }
  .product_info .product_price{
    color:#ff0000;
  }
  .product_info .product_number{
    text-align:right;
    color: #999;
  }
  .tips{
    display: block;
    text-align:center;
    font-size:12px;
    color:#999;
    margin:15px 0;
  }
</style>
