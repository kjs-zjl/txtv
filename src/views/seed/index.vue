<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-seed
      mt-navbar(v-model="selected")
        mt-tab-item(id="notice") 公告
        mt-tab-item(id="free") 免费体验区
        mt-tab-item(id="hot") 热门搜索
        mt-tab-item(id="vip1") 会员推荐区1
        mt-tab-item(id="vip2") 会员推荐区2
      mt-tab-container(v-model="selected",swipeable)
        mt-tab-container-item(id="notice")
          notice
        mt-tab-container-item(id="free")
          free
        mt-tab-container-item(id="hot")
          hot
        mt-tab-container-item(id="vip1")
          vip1
        mt-tab-container-item(id="vip2")
          vip2
    transition(name="slide-vertical")
      keep-alive
        router-view
</template>

<script>
import notice from './notice'
import free from './free'
import hot from './hot'
import vip1 from './vip1'
import vip2 from './vip2'

export default {
  components: {
    notice,
    free,
    hot,
    vip1,
    vip2
  },
  data () {
    return {
      allLoaded: false,
      selected: 'notice'
    }
  },
  computed: {

  },
  methods: {

  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.component-seed {
  .mint-navbar {
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .mint-tab-container {
    padding: 5px;
    margin-top: 50px;
    height: calc(100% - 50px);
  }
}
</style>
