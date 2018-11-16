<template>
  <div class="container">
    <div class="main">
      <search @search-event="searchEvent"/>
      <div class="tabs">
        <i-tag
          class="i-tags"
          name="法国"
          color="blue">
          法国
        </i-tag>
      </div>
      <!--产品列表-->
      <productList :products="products"/>
    </div>
    <!--tab菜单-->
    <FooterTab :current="current"/>
  </div>
</template>

<script>
  import productList from '@/components/productList';
  import search from '@/components/searchInput';
  import FooterTab from '@/components/footerTab';

  export default {
    name: "index",
    components:{
      productList,search,FooterTab
    },
    data(){
      return {
        current:'',
        searchValue:'',
        products:[{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        },{
          title:'拉维亭波尔多珍藏干红葡萄酒（原木箱）',
          price:'1388.00',
          num:'9',
          src:'http://mall.wart9.com/upload/2018/8/26/2a9ed772de594a6c9fe86c239e8e5eeb.png'
        }]
      }
    },
    methods:{
      searchEvent(searchValue){
        console.log(searchValue);
      }
    }
  }
</script>

<style scoped>
  .tabs {
    width: 720rpx;
    padding: 10px 0;
    margin: 0 15rpx;
  }

</style>
