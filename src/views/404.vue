<template lang="pug">
  ._full_router.component-myVideos
    ._full_inner
      mt-header(title="404",fixed)
        mt-button(icon="back",@click="back",slot="left")
      ._cover-content._scroll
        div(@click="back_index") 返回首页
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {
    back () {
      // this.$router.go(-1)
    },
    back_index () {
      this.$router.push('/')
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
</style>
