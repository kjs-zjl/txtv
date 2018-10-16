<template lang="pug">
  mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
    .content
      ul
       li(v-for='(item,index) in [1,2,3,4]',:key='index') [09-07] 会员2
</template>
<script>
export default {
  data () {
    return {
      allLoaded: false
    }
  },
  methods: {
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded()
      }, 1000)
    },
    loadBottom () {
      setTimeout(() => {
        this.allLoaded = true
        this.$refs.loadmore.onBottomLoaded()
      }, 1000)
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  ul {
    li {
      width: 100%;
      background-color: #fff;
      border-radius: 3px;
      padding: 20px 5px;
      margin-bottom: 10px;
      box-shadow: 0px 2px 5px #333333;
    }
  }
}
</style>
