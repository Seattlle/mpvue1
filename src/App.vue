<script>
  export default {
    created() {
      // 调用API从本地缓存中获取数据
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)

      console.log('app created and cache logs by setStorageSync')
    }
  }
</script>

<style>
  page {
    background: #f2f2f2;
  }
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .container .main {
    width: 100%;
    padding-bottom: 50px;
  }

  .i-cell {
    display: flex;
  }

  .i-cell .i-cell-item {
    flex: 1;
  }

  .i-cell .i-cell-item2 {
    flex: 2;
  }

  .i-cell .i-cell-item3 {
    flex: 3;
  }
  .i-cell .i-cell-item4{
    flex: 4;
  }
  .tright{
    text-align:right;
  }
  .fright{
    float:right;
  }
  a:visited,a:hover,a:active{
    background:transparent;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
</style>
