<template>
    <div id="footer">
        <i-tab-bar class="tabsList"
                   :current="currentKey"
                   @change="changeTab"
                   color="#bd6a42"
                   fixed="true">
          <i-tab-bar-item v-for="(item,index) in tabs"
                          :key="item.key"
                          :icon="item.icon"
                          :current-icon="item.activeIcon"
                          :title="item.title">
          </i-tab-bar-item>
      </i-tab-bar>
    </div>
</template>

<script>
  export default {
    props: {
      tabs:{
        default:function () {
          return [{
            key:'homepage',
            icon:'homepage',
            activeIcon:'homepage_fill',
            title:'首页',
            path:'/pages/index/main'
          },{
            key:'createtask',
            icon:'createtask',
            activeIcon:'createtask_fill',
            title:'分类',
            path:'/pages/classify/main'
          },{
            key:'service',
            icon:'service',
            activeIcon:'service_fill',
            title:'购物车',
            path:'/pages/cart/main'
          },{
            key:'mine',
            icon:'mine',
            activeIcon:'mine_fill',
            title:'我的',
            path:'/pages/member/main'
          }]
        }
      }
    },
    computed:{
      currentKey(){
        return this.$store.state.footerCurrentTab;
      }
    },
    methods:{
      changeTab(params){
        let key=params.target.key;
        if(this.$store.state.footerCurrentTab!==key){
          for(let i in this.tabs){
            if(this.tabs[i]['key']===key){
              wx.redirectTo({
                url: this.tabs[i]['path']
              });
              break;
            }
          }
        }
      }
    }
  }
</script>
<style scoped>
  #footer{
    width:100%;
  }
</style>
