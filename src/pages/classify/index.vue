<template>
  <div class="container">
    <div class="main">
      <search @search-event="searchEvent"/>
      <div class="classify i-cell">
        <div class="classify_left i-cell-item">
          <div class="class_type" v-for="(item,index) in type" :key="index" :class="{active:index===active}" @click="active=index;">{{item.name}}</div>
        </div>
        <div class="classify_right i-cell-item4">
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
        active:0,
        type:[{
          name:'国家'
        },{
          name:'品牌'
        }],
        lists:[{
            key:'F',
            list:[{
              name:'费碧0'
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
    background-color:#fff;
    display: flex;
  }
  .classify_left{
    text-align:center;
    background-color:#f2f2f2;
  }
  .class_type{
    padding:10px 15px;
    font-size:14px;
  }
  .class_type.active{
    background-color:#fff;
  }
  .i-index-item{
    padding:10px;
    border-bottom:#ccc solid 1rpx;
  }
  .i-index-item:last-child{
    border-bottom:none;
  }

</style>
