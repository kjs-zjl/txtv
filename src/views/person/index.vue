<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-person
      .content
        .cell-list
          mt-cell.avatar(title="永久会员：18825070581")
            img(slot="icon",src="https://static.www.fendi.com/mediaObject/fendi/homepage/updates/update_29_06/hp/pre_fall_2018_special_content_hompage_desktop/original/pre_fall_2018_special_content_hompage_desktop.jpg")
          mt-cell(title="开通会员")
            img.icon(slot="icon",src="../../assets/logo.png")
          mt-cell(title="卡密激活会员")
            img.icon(slot="icon",src="../../assets/logo.png")
          mt-cell(title="在线播放")
            img.icon(slot="icon",src="../../assets/logo.png")
          mt-cell(title="我的收藏")
            img.icon(slot="icon",src="../../assets/logo.png")
          mt-cell(title="反馈建议")
            img.icon(slot="icon",src="../../assets/logo.png")
          mt-cell(title="应用锁",icon="more",value="说明文字")
        .button
          mt-button(type="primary",size="large") 退出账号
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

  },
  created () {
  }
}
</script>

<style lang="scss">
.component-person {
  .cell-list {
    margin-top: 10px;
    .icon {
      width: 24px;
      height: 24px;
    }
    .avatar {
      .mint-cell-title {
        padding: 20px 0;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      }
    }
  }
  .button {
    margin: 20px;
  }
}
</style>
