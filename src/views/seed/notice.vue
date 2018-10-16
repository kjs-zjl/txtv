<template lang="pug">
  mt-loadmore(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",ref="loadmore")
    .content
      p.pb20 10月05号通知
      p.pb20 还在使用旧版的用户 请将版本更新到最新版 10月15号旧版本将全面停用
      .faq
        p 常见问题
        ul.faq-list
          li.faq-list-item
            p.question Q 种子不能搜索
            p.answer A 点键盘上的搜索图标（有的输入法显示的是"放大镜" 有的显示"搜索"字样）
          li.faq-list-item
            p.question Q 在线播放卡
            p.answer A 可到[下载]中下载完成后播放
          li.faq-list-item
            p.question Q 在推荐中看电影或电视剧 老是提示无效链接
            p.answer A 点键盘上的搜索图标（有的输入法显示的是"放大镜" 有的显示"搜索"字样）
          li.faq-list-item
            p.question Q 下载的视频怎么删除
            p.answer A 长按就能删除
          li.faq-list-item
            p.question Q 种子不能搜索
            p.answer A 点键盘上的搜索图标（有的输入法显示的是"放大镜" 有的显示"搜索"字样）
          li.faq-list-item
            p.question Q 种子不能搜索
            p.answer A 点键盘上的搜索图标（有的输入法显示的是"放大镜" 有的显示"搜索"字样）
          li.faq-list-item
            p.question Q 种子不能搜索
            p.answer A 点键盘上的搜索图标（有的输入法显示的是"放大镜" 有的显示"搜索"字样）
</template>
<script>
export default {
  data () {
    return {
      allLoaded: false
    }
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
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  .faq {
    .faq-list {
      .faq-list-item {
        padding-top: 20px;
      }
    }
  }
}
</style>
