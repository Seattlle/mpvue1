<template>
  <div class="container">
    <div class="main">
      <div class="productList">
          <div class="productItem i-cell" v-for="(item,index) in productList" :key="index">
              <div class="pcheckbox">
                  <i-checkbox :checked="!!item.checked"  i-class="i-checkbox" @change="toggleSingleCheck(index)"></i-checkbox>
              </div>
              <div class="i-cell-item product_img_wrap" @click="goToDetail(index)">
                  <img :src="item.img" class="product_img">
              </div>
              <div class="i-cell-item3 product_right">
                  <div class="product_info">
                    <h3 class="title">{{item.title}}</h3>
                    <div class="i-cell detail">
                      <div class="i-cell-item">{{item.source}}</div>
                      <div class="i-cell-item">{{item.capacity}}</div>
                    </div>
                  </div>
                  <div class="i-cell detail product_right_bottom">
                    <div class="i-cell-item price"><div>￥{{item.price}}</div></div>
                    <div class="inputNumber">
                        <i-input-number :value="item.number" min="1" max="100000" @change="changeNumber" :id="'input-number-'+index"/>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <!--底部工具栏-->
    <div class="toolBar i-cell">
      <div class="toolBarLeft">
        <i-panel>
          <i-checkbox value="全选"  :checked="checkAll" @change="toggleCheckAll"></i-checkbox>
        </i-panel>
      </div>
      <div class="toolBarRight i-cell-item i-cell">
        <div class="totalPrice i-cell-item"><span class="n">￥{{totalPrice}}</span></div>
        <div class="toBuyItNow">
          <i-button  type="primary" size="small">去结算</i-button>
        </div>
      </div>
    </div>
    <!--tab菜单-->
    <footerTab />
  </div>
</template>

<script>
  import Vue from 'vue';
  import { formatMoney } from '@/utils/index';
  import footerTab from '@/components/footerTab';

  export default {
    name: "index",
    components:{
      footerTab
    },
    data(){
      return {
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
        },{
          title:'拉维亭波尔多干红葡萄酒',
          source:'法国原瓶进口',
          capacity:'750ML原木箱',
          price:'699.00',
          number:10,
          img:'http://mall.wart9.com/upload/2018/8/26/c4a276ffea6744f09e44441e808ae908.png'
        }]
      }
    },
    computed:{
      checkAll:{
        get:function(){
          for(let i in this.productList){
            if(!this.productList[i].checked){
              return false;
            }
          }
          return true;
        },
        set:function (v) {
          for(let i in this.productList){
            Vue.set(this.productList[i], 'checked', v);
          }
        }
      },
      totalPrice(){
        let total=0;
        for(let i in this.productList){
          if(this.productList[i].checked){
            total+=this.productList[i].price*this.productList[i].number;
          }
        }
        return formatMoney(total);
      }
    },
    methods:{
      toggleCheckAll(){
        this.checkAll=!this.checkAll;
      },
      changeNumber(params){
        let index=params.currentTarget.id.split('-')[2];
        this.productList[index]['number']=params.mp.detail.value;
      },
      toggleSingleCheck(i){
        Vue.set(this.productList[i], 'checked', !this.productList[i]['checked']);
      },
      goToDetail(i){
        wx.navigateTo({
          url:'/pages/detail/main'
        })
      }
    },
    onShow(){
      this.$nextTick(function () {
        this.$store.commit('switchTab','service');
      })
    },
    onPullDownRefresh(){
      this.productList.push({
        title:'拉维亭波尔多干红葡萄酒',
        source:'法国原瓶进口',
        capacity:'750ML原木箱',
        price:'699.00',
        number:10,
        img:'http://mall.wart9.com/upload/2018/8/26/c4a276ffea6744f09e44441e808ae908.png'
      });
    }
  }
</script>


<style>
  .pcheckbox .i-checkbox{
    position: absolute;
    top:50%;
    left:-10px;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -ms-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
  }
</style>
<style scoped>
  .container .main{
    padding-bottom:200rpx;
  }
  .toolBar{
    position:fixed;
    bottom:52.5px;
    left:0;
    width:100%;
    background-color:#fff;
    z-index: 2;
    border-top:1rpx solid #f2f2f2;
  }
  .toolBarLeft{
    margin:5px 0;
  }
  .toolBarRight{
    text-align:right;
  }
  .totalPrice,.toBuyItNow{
    vertical-align: middle;
  }
  .totalPrice{
    position: relative;
  }
  .totalPrice .n{
    line-height: 60px;
  }

  .productItem{
    padding:10px 0;
    background-color:#fff;
    margin-bottom:10px;
  }
  .pcheckbox{
    overflow: hidden;
    width:40px;
    position: relative;
  }
  .product_img_wrap{
    border:1px solid #f2f2f2;
    margin-right:10px;
  }
  .product_img{
    width:80px;
    height:80px;
  }
  .product_right{
    padding-right:10px;
    position: relative;
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
  .product_right .detail .i-cell-item:last-child{
    text-align:right;
  }
  .product_right_bottom{
    position: absolute;
    bottom:0;
    left:0;
    right:10px;
    font-size:14px;
  }
  .product_right_bottom .price{
    color: #ff0000;
    line-height: 30px;
    display: flex;
    align-items: flex-end;
  }

</style>
