<template>
  <div class="search">
    <div class="i-cell">
      <div class="i-cell-bd search-input-wrap">
        <i-input :value="searchValue" i-class="search-input" placeholder="请输入商品名称查询"/>
      </div>
      <div class="i-cell-ft search-btn">
        <i-icon type="search" size="28" color="#fff" i-class="search-icon" @click="search"/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "searchInput",
    data(){
      return {
        searchValue:''
      }
    },
    methods:{
      search(){
        if(this.searchValue){
           this.$emit('search-event',this.searchValue);
        }
      }
    }
  }
</script>

<style>
  .search .search-input {
    padding: 0 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .i-cell:after {
    display: none;
  }
</style>
<style scoped>
  .search {
    width: 100%;
    background-color: #bd6a42;
  }

  .search-input-wrap {
    padding: 8px 0 8px 15px;
  }

  .search-btn {
    width: 50px;
    text-align: center;
    position: relative;
  }

  .i-cell {
    display: flex;
  }

  .i-cell .i-cell-bd {
    flex: 1;
  }
</style>
