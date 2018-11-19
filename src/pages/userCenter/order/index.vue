<template>
  <div class="container">
    <OrderList :order-list="orderList" :showStatus="showStatus"></OrderList>
  </div>
</template>

<script>
  import { formatMoney } from '@/utils/index';
  import OrderList from '@/components/orderList';

  export default {
    name: "index",
    components:{
      OrderList
    },
    data(){
      return {
        showStatus:true,
        orderList:[{
          orderNum:'654646546542134988612',
          createTime:'2018-11-19 11:01',
          totalPrice:'20700.00',
          status:0,
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
        },{
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
        }],
      }
    },
    onPullDownRefresh(){

    }
  }
</script>

<style scoped>

</style>
