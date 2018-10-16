<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-recommend
      mt-tab-container(v-model="selectedId",swipeable)
        mt-tab-container-item(id="film")
          Film
        mt-tab-container-item(id="tv")
          TV
        mt-tab-container-item(id="topic")
          Topic
        mt-tab-container-item(id="category")
          Category
        mt-tab-container-item(id="search")
          Search
    //- router
    transition(name="slide-vertical")
      keep-alive
        router-view
</template>

<script>
import Film from './film'
import TV from './tv'
import Topic from './topic'
import Category from './category'
import Search from './search'

export default {
  data () {
    return {
    }
  },
  computed: {
    selectedId: {
      get () {
        return this.$store.state.base.selectedId
      },
      set (val) {
        this.$store.commit('SET_TAB', val)
      }
    }
  },
  components: {
    Film,
    TV,
    Topic,
    Category,
    Search
  },
  created () {
  }
}
</script>

<style lang="scss">
.component-recommend {
}
</style>
