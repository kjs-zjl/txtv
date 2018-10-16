<template lang="pug">
  ._full_router.component-download
    ._full_inner
      mt-header(title="正在下载",fixed)
        mt-button(icon="back",@click="back",slot="left")
        .right(slot="right")
          span.clear-history 清空
          span.my-videos(@click="go_myVideos") 我的视频
      ._cover-content._scroll
        ul
          li(@click="go_detail2(index)",v-for='(item,index) in [1,2,2,2,2]',:key='index')
            .left
              .v-title 美国队长复仇者联盟（55）
              mt-progress
              .download-bar
                span.size 1.5G/0B
                span.rate 0B/s
                span.finish 0.00%
            .right
              mt-button 暂停
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
    },
    go_myVideos () {
      let path = this.$route.path + '/myVideos'
      this.$router.push({path})
    }
  },
  created () {
  }
}
</script>

<style lang="scss">
.component-download {
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
    .left{
      flex: 1;
      .download-bar{
        span{
          margin-right: 5px;
          font-size: 10px;
        }
      }
    }
    .right{
      margin-left: 10px;
    }
  }
}
</style>
