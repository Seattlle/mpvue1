<template>
  <div class="container">
    <div class="main">
      <div class="product_big_img">
        <image :src="product.bigImg" :alt="product.title" mode="widthFix"></image>
      </div>

      <div class="product_detail_wrap">
        <div class="product_detail">
          <div class="product_line"  >
            <span class="product_price">￥{{product.price}}</span>
            <span class="rfloat" @click="toggleLike">
              <i-icon :type="isLike?'like':'like_fill'" size="24" color="#AF342F"/>
          </span>
          </div>
          <div class="product_line">
            <div class="product_title">
              {{product.title}}
            </div>
            <div class="product_content">
              <div class="product_info">{{product.source}}</div>
              <div class="product_info">{{product.rouliang}}</div>
            </div>
          </div>
          <div class="product_mark">
            <div class="i-cell-item">
              <i-icon type="success" i-class="product_mark_icon" size="18" color="#AF342F"/>
              正品保障
            </div>
            <div class="i-cell-item">
              <i-icon type="success" i-class="product_mark_icon" size="18" color="#AF342F"/>
              极速发货
            </div>
            <div class="i-cell-item">
              <i-icon type="success" i-class="product_mark_icon" size="18" color="#AF342F"/>
              顺丰包邮
            </div>
          </div>
        </div>
      </div>

      <div class="product_img_wrap">
        <div class="_title">商品详情</div>
        <div class="product_img_list">
          <image  :alt="product.title" mode="widthFix" v-for="(item,index) in product.imageList" :key="index" :src="item.src"></image>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="i-cell">
        <div class="i-cell-item i-cell-item-2"></div>
        <div class="i-cell-item addCart">加入购物车</div>
        <div class="i-cell-item buyNow">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isLike:true,
        product:{
          title:' 拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'30000',
          source:'法国原瓶进口',
          rouliang:'750ML原木箱',
          bigImg:'http://test.easything.net/weida/images/details/banner.jpg',
          imageList:[{
            src:'http://test.easything.net/weida/images/details/banner.jpg'
          },{
            src:'http://test.easything.net/weida/images/details/banner.jpg'
          },{
            src:'http://test.easything.net/weida/images/details/banner.jpg'
          }]
        }
      }
    },
    methods:{
      toggleLike(){
        console.log(666);
        this.isLike=!this.isLike;
      }
    }
  }
</script>

<style>
  .product_mark_icon {
    line-height: 1.2 !important;
  }
  .rfloat{
    float:right;
  }
</style>
<style scoped>
  .main{
    background-color:#fff;
  }
  .product_big_img {
    width: 100%;
  }

  .product_big_img image, .product_img_list image{
    width: 100%;
    height: auto;
  }

  .product_detail_wrap {
    width: 100%;
    margin-top: -70px;
    position: relative;
  }

  .product_detail {
    background: #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 10px;
    margin: 0 10px;
    box-shadow: 0 0 5px 0 #999;
  }

  .product_line {
    padding: 8px 0;
    border-bottom: 1px dashed #CBCBCB;
    font-size: 14px;
  }

  .product_price, .product_title {
    color: #AF342F;
  }
  .product_title{
    display: block;
    overflow: hidden;
    white-space: nowrap;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
  }
  .product_price {
    font-size: 16px;
  }

  .product_content, .product_mark {
    display: flex;
    margin-top: 5px;
    font-size: 12px;
  }

  .product_mark {
    padding-top: 5px;
  }

  .product_content .product_info, .i-cell-item {
    flex: 1;
    color: #CBCBCB;
  }

  .product_content .product_info:last-child,
  .product_mark .i-cell-item:last-child {
    text-align: right;
  }

  .i-cell-item:nth-child(2) {
    text-align: center;
  }

  .product_img_wrap {
    width: 100%;
  }

  .product_img_wrap ._title {
    padding: 10px 15px;
    font-size: 16px;
    color: #929292;
  }
  .product_img_list{
    font-size:0;
  }

  .footer{
    position: fixed;
    left:0;
    bottom:0;
    width:100%;
    background:#fff;
    font-size:14px;
  }
  .i-cell{
    display: flex;
  }
  .i-cell .i-cell-item{
    flex:1;
  }
  .i-cell .i-cell-item-2{
    flex:2;
  }
  .footer .i-cell-item{
    padding:15px 0;
    text-align:center;
    color:#fff;
  }
  .footer .addCart{
    background:#bd6a42;
  }
  .footer .buyNow{
    background:#f43530;
  }
</style>
