<template>
  <div class="grids">
     <i-grid v-for="(item,index) in grids" :key="index">
      <i-grid-item v-for="(value,ii) in item" :key="ii" @click="goToSearch(item)">
          <i-grid-icon>
            <image :src="value.icon" />
          </i-grid-icon>
          <i-grid-label>{{value.name}}</i-grid-label>
      </i-grid-item>
    </i-grid>
  </div>
</template>

<script>
    export default {
        props:{
          grids: {
            type: Array
          }
        },
      methods:{
        goToSearch(item){
          wx.navigateTo({
            url: '/pages/search/main'
          })
        }
      }
    }
</script>

<style scoped>
  .grids{
    width:100%;
    background:#fff;
  }
</style>
