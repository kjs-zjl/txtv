<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-live
      .title 直播间的广告都是骗钱的，请不要相信
      mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
        ul
          li(@click="goto_detail",v-for='(item,index) in [1,2,2,2,2,2,2,2,2]',:key='index') {{'live'}}
    //- router
    transition(name="slide-vertical")
      keep-alive
        router-view
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      allLoaded: false
    }
  },
  computed: {

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
    },
    goto_detail () {
      this.$router.push({
        path: '/channel/detail'
      })
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
.component-live {
  text-align: center;
  .title {
    position: fixed;
    z-index: 2;
    width: 100%;
    color: red;
    height: 40px;
    line-height: 40px;
    background-color: #efeff4;
  }
  .mint-loadmore {
    margin-top: 40px;
    ul {
      overflow: hidden;
      li {
        margin: 10px 5px;
        height: 0;
        width: calc(100% / 4 - 10px);
        padding-top: calc((100% / 4 - 10px) / 2);
        // padding-bottom: calc((100% / 4   - 10px) / 2);
        float: left;
        border-radius: 3px;
        background: saddlebrown;
      }
    }
  }
}
</style>
