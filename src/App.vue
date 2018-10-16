<template lang="pug">
  #app
    index-header.app-header
    router-view
    index-nav
</template>

<script>

import indexHeader from './components/index-header'
import indexNav from './components/index-nav'

require('./assets/css/common.scss')

export default {
  data () {
    return {
      selected: 'recommend'
    }
  },
  components: {
    indexHeader,
    indexNav
  }
}
</script>

<style>
</style>
