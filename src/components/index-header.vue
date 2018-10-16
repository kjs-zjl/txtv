<template lang="pug">
  mt-header.recommend-head(v-if="type === 'recommend'",fixed)
    mt-navbar(slot="left",v-model="selectedId")
      mt-tab-item(id="film") 电影
      mt-tab-item(id="tv") 电视剧
      mt-tab-item(id="topic") 专题
      mt-tab-item(id="category") 分类
      mt-tab-item(id="search") 搜索
    .mint-tab-item-label(@click="go_download('/recommend/download')",slot="right") 下载
  mt-header.seed-head(v-else-if="type === 'seed'",fixed)
    .search-bar(slot="left")
      span 种子
      mt-search
    .mint-tab-item-label(@click="go_download('/seed/download')",slot="right") 下载
  mt-header(v-else,:title="title",fixed)

</template>

<script>

export default {
  data () {
    return {
    }
  },
  watch: {

  },
  computed: {
    title () {
      return this.$route.meta.title
    },
    type () {
      return this.$route.name
    },
    selectedId: {
      get () {
        return this.$store.state.base.selectedId
      },
      set (val) {
        this.$store.commit('SET_TAB', val)
      }
    }
  },
  methods: {
    go_download (path) {
      this.$router.push({path})
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
.recommend-head {
  .is-left {
    .mint-navbar {
      background-color: inherit;
      .mint-tab-item {
        padding: 0;
        &.is-selected {
          color: red;
          border: 0;
          margin-bottom: 0;
        }
      }
    }
  }
  .mint-header-title {
    flex: 0;
  }
}
.seed-head {
  .is-left {
    flex: 1;
    .search-bar {
      display: flex;
      align-items: center;
      .mint-search {
        flex: 1;
        margin: 0 10px;
        height: inherit;
        .mint-searchbar {
          padding: 0;
          .mint-searchbar-cancel {
            margin-right: 10px;
          }
        }
      }
    }
  }
  .is-right {
    flex: 0;
  }
  .mint-header-title {
    flex: 0;
  }
}
</style>
