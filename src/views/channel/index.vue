<template lang="pug">
  section.app-content
    ._full_inner._scroll.component-channel
      ul
        li(@click="goto_allvip(item.link)",v-for='(item,index) in list',:key='index')
          .mask
          .title {{item.name}}
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
          name: '全网VIP',
          src: '//r1.ykimg.com/051600005BBC3AF7ADA7B286280E454B'
        },
        {
          id: 1,
          link: '/common/webview',
          name: 'VIP会员频道',
          src: '//r1.ykimg.com/051600005BA4FCE3ADBA6B12B10A6F88'
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
.component-channel {
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
