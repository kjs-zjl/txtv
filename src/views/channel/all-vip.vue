<template lang="pug">
  ._full_router.component-allVip
    ._full_inner
      mt-header(title="全网VIP",fixed)
        .mint-tab-item-label(@click="goto_allvip('/channel/allVip/download')",slot="right") 下载
      ._cover-content._scroll
        ul
          li(@click="goto_allvip(item.link)",v-for='(item,index) in list',:key='index')
            .mask
            .title  {{item.name}}
            img(:src="item.src")
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
      list: [
        {
          id: 1,
          link: '/channel/allVip',
          name: '爱奇艺',
          src: 'http://r1.ykimg.com/051500005BBC7C7AADA80C448D036683'
        },
        {
          id: 2,
          link: '/common/webview',
          name: '芒果',
          src: '//r1.ykimg.com/051600005B2377C9859B5DA5550E896E'
        },
        {
          id: 3,
          link: '/channel/allVip',
          name: '优酷',
          src: '//r1.ykimg.com/051500005BC08E84ADA80C80E50550D6'
        },
        {
          id: 4,
          link: '/common/webview',
          name: '腾讯视频',
          src: '//r1.ykimg.com/050C00005AA62ED7859B5E03F80BE485'
        },
        {
          id: 5,
          link: '/channel/allVip',
          name: 'pptv',
          src: '//r1.ykimg.com/050C00005AA62ED7859B5E03F80BE485'
        },
        {
          id: 6,
          link: '/common/webview',
          name: '乐视',
          src: 'http://t2.hddhhn.com/uploads/tu/201707/521/84st.png'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    goto_allvip (path) {
      this.$router.push({ path })
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.component-allVip {
  ul {
    overflow: hidden;
    li {
      margin: 3px 5px;
      float: left;
      width: calc(50% - 10px);
      position: relative;
      text-align: center;
      border-radius: 3px;
      overflow: hidden;
      height: 0;
      padding-bottom: 26%;
      .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .title {
        position: absolute;
        z-index: 2;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
      }
    }
  }
}
</style>
