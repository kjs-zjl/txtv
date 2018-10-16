<template lang="pug">
  ._full_router.component-detail
    ._full_inner
      mt-header(title="详情页",fixed)
        .router-link(@click="back",slot="left")
          mt-button(icon="back") 返回
      ._cover-content._scroll
        mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
          ul
            li(@click="go_detail2(index)",v-for='(item,index) in [1,2,2,2,2,2,2,2,2]',:key='index') {{index}}component-detail
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
    back () {
      this.$router.go(-1)
    },
    go_detail2 (index) {
      if (index % 2 === 1) {
        this.$router.push({
          path: '/channel/detail/detail2'
        })
      } else {
        this.$router.push({
          path: '/channel/detail/detail3'
        })
      }
    }
  },
  created () {
    console.log(2333333)
  }
}
</script>

<style lang="scss">
.component-detail {
  .cover-content {
    background: #666;
  }
  li {
    padding: 50px;
    background: green;
    margin: 50px;
  }
}
</style>
