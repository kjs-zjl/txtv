<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-channel
      mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
        ul
          li(@click="goto_detail",v-for='(item,index) in [1,2,2,2,2,2,2,2,2]',:key='index') {{'channel'}}
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
.component-channel {
  li {
    padding: 50px;
    background: saddlebrown;
    margin: 50px;
  }
}
</style>
