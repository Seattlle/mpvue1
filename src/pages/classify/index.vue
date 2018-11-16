<template>
  <div class="container">
    <div class="main">
      <search @search-event="searchEvent"/>


      <div class="classify">
        <div class="classify_left">
          <i-cell-group>
            <i-cell title="国家"></i-cell>
            <i-cell title="品牌"></i-cell>
          </i-cell-group>
        </div>
        <div class="classify_right">
            <i-index height="100%" @change="onChange">
              <i-index-item v-for="(item,index) in lists" :key="index" :name="item.key">
                <view class="i-index-item" v-for="(it,ii) in item.list" :key="ii" @click="toSearchThis(it,index)">
                  {{it.name}}
                </view>
              </i-index-item>
            </i-index>
        </div>
      </div>

    </div>
    <!--tab菜单-->
    <FooterTab />
  </div>
</template>

<script>
  import search from '@/components/searchInput';
  import FooterTab from '@/components/footerTab';

  export default {
    name: "index",
    components:{
      search,FooterTab
    },
    data(){
      return {
        lists:[{
            key:'F',
            list:[{
              name:'费碧0'
            },{
              name:'费碧1'
            }]
          },{
          key:'L',
          list:[{
            name:'拉维亭'
          }]
        },{
          key:'K',
          list:[{
            name:'卡乐门'
          }]
        }]
      }
    },
    methods:{
      searchEvent(searchValue){
        console.log(searchValue);
      },
      onChange(params){
        console.log(params)
      },
      toSearchThis(item,index){
        wx.navigateTo({
          url: '/pages/search/main'
        });
      }
    },
    onShow(){
      this.$nextTick(function () {
        this.$store.commit('switchTab','createtask');
      })
    }
  }
</script>

<style scoped>
  .classify{
    display: flex;
  }
  .classify_left{
    flex:1;
    text-align:center;
  }
  .classify_right{
    flex:4;
  }
  .i-index-item{
    padding:10px;
    border-bottom:#ccc solid 1rpx;
  }
  .i-index-item:last-child{
    border-bottom:none;
  }

</style>
