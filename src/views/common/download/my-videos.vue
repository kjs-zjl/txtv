<template lang="pug">
  ._full_router.component-myVideos
    ._full_inner
      mt-header(title="我的视频",fixed)
        mt-button(icon="back",@click="back",slot="left")
        .right(slot="right")
          span.clear-history 全删
      ._cover-content._scroll
        ul
          li(@click="go_detail2(index)",v-for='(item,index) in [1,2,2,2,2]',:key='index')
            .left
              img(src="https://static.www.fendi.com/mediaObject/fendi/Fendi-Roma/fendi-roma/4_fendiRoma_trevi/original/4_fendiRoma_trevi.jpg")
            .center
              .v-title 美国队长复仇者联盟（55）
                .download-bar
                  span.size 1.5G/0B
                  span.rate 0B/s
                  span.finish 0.00%
            .right
              mt-button 删除
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
    }
  },
  computed: {

  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.component-myVideos {
  .mint-header {
    .my-videos {
      margin-left: 10px;
    }
  }
  li {
    margin: 10px 5px 0;
    padding: 10px 5px;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 5px #333333;
    .left {
      flex: 1;
      .download-bar {
        span {
          margin-right: 5px;
          font-size: 10px;
        }
      }
    }
    .right {
      margin-left: 10px;
    }
  }
}
</style>
