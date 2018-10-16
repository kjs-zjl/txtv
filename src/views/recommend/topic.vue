<template lang="pug">
  mt-loadmore.component-topic(:top-method="loadTop",:bottom-method="loadBottom",:bottom-all-loaded="allLoaded",:auto-fill="false",ref="loadmore1")
    .swiper(v-if="swiperDatas.length")
      mt-swipe(:auto="0",@change="handleChange")
        mt-swipe-item(v-for='item in swiperDatas',:key='item.id')
          .img-bg(:data-src="item.img_url",:style="{backgroundImage:'url(' + item.img_url + ')'}")
        .swipe-title {{swipeTitle}}
    .products
      .panel(v-for='(item,index) in [1,2,3,1]',:key='index')
        .panel-title 正在热播
        ul.film-list.clearfix
          li.film-list-item(v-for='(item,index) in [1,5,5,2,2,6,1]',:key='index',:class="{hot_film : index === 0}")
            img.film-bg(src="http://img4.imgtn.bdimg.com/it/u=1926421234,1074130284&fm=26&gp=0.jpg")
            .film-title.Single-ellipsis 变形金刚5：最后的骑士

</template>
<script>
export default {
  data () {
    return {
      allLoaded: false,
      swiperDatas: [
        {
          id: 20,
          img_url: 'http://img4.imgtn.bdimg.com/it/u=1926421234,1074130284&fm=26&gp=0.jpg',
          link: '',
          title: '人狼'
        },
        {
          id: 21,
          img_url: 'http://img4.imgtn.bdimg.com/it/u=1926421234,1074130284&fm=26&gp=0.jpg',
          link: '',
          title: '心甘情愿'
        },
        {
          id: 22,
          img_url: 'http://img4.imgtn.bdimg.com/it/u=1926421234,1074130284&fm=26&gp=0.jpg',
          link: '',
          title: '我不是药神 TS'
        }
      ],
      swipeTitle: ''
    }
  },
  methods: {
    handleChange (index) {
      for (let i in this.swiperDatas) {
        if (index === Number(i)) {
          this.swipeTitle = this.swiperDatas[i].title
          break
        }
      }
    },
    loadTop () {
      setTimeout(() => {
        this.$refs.loadmore1.onTopLoaded()
      }, 500)
    },
    loadBottom () {
      setTimeout(() => {
        this.allLoaded = true
        this.$refs.loadmore1 && this.$refs.loadmore1.onBottomLoaded()
      }, 500)
    }
  },
  mounted () {
    if (!this.swiperDatas.length) return
    this.swipeTitle = this.swiperDatas[0].title
  }
}
</script>
<style lang="scss" scoped>
.component-topic {
  .swiper {
    height: 200px;
    .img-bg {
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .swipe-title {
      position: absolute;
      width: 100%;
      height: initial;
      display: block;
      transform: inherit;
      bottom: 0;
      padding: 10px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .products {
    .panel {
      margin-top: 4px;
      .panel-title {
        background-color: #fff;
        padding: 5px 6px;
      }
      .film-list {
        .film-list-item {
          &.hot_film {
            width: calc(100% - 8px);
            .film-bg {
              height: 130px;
            }
          }
          margin: 4px;
          width: calc(50% - 8px);
          background-color: #fff;
          float: left;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0px 2px 5px #333333;
          .film-bg {
            width: 100%;
            object-fit: cover;
            height: 90px;
          }
          .film-title {
            padding: 5px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
