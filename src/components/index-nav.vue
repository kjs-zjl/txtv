<template lang="pug">
  mt-tabbar(v-model="selected")
    mt-tab-item(v-for='item in index_nav',:key='item.tabId',:id="item.tabId")
      img(slot="icon",src="../assets/logo.png")
      | {{item.text}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    ...mapState({
      index_nav: state => state.base.index_nav
    })
  },
  watch: {
    selected (val) {
      this.$router.push({ path: val })
    }
    // 从404页面回撤
    // $route (obj) {
    //   this.selected = obj.name
    //   console.log(obj)
    // }
  },
  created () {
    this.selected = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
</style>
