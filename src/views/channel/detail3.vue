<template lang="pug">
  ._full_router.component-detail3
    ._full_inner
      mt-header(title="详情页3",fixed)
        .router-link(@click="back",slot="left")
          mt-button(icon="back") 返回
      ._cover-content._scroll
        mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
          ul
            li(v-for='(item,index) in [1,2]',:key='index') {{index}}
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
    back () {
      this.$router.go(-1)
    }
  },
  created () {
    console.log(2333333)
  }
}
</script>

<style lang="scss">
.component-detail3 {
  li {
    padding: 50px;
    background: yellow;
    margin: 50px;
  }
}
</style>
