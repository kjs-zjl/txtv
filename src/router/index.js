import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../views/recommend'
import channel from '../views/channel'
import seed from '../views/seed'
import live from '../views/live'
import person from '../views/person'
// import error from '../views/404'
import download from '../views/common/download/index'
import myVideos from '../views/common/download/my-videos'
import detail from '../views/channel/detail'
import detail2 from '../views/channel/detail2'
import detail3 from '../views/channel/detail3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'recommend'
    },
    // {
    //   path: '*',
    //   redirect: '/404'
    // },
    // {
    //   path: '/404',
    //   name: '404',
    //   component: error
    // },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend,
      meta: {
        title: '推荐'
      },
      children: [
        {
          path: '/recommend/download',
          name: 'download',
          component: download,
          children: [
            {
              path: '/recommend/download/myVideos',
              name: 'myVideos',
              component: myVideos
            }
          ]
        }
      ]
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel,
      meta: {
        title: '频道'
      },
      children: [
        {
          path: '/channel/detail',
          name: 'detail',
          component: detail,
          children: [
            {
              path: '/channel/detail/detail2',
              name: 'detail2',
              component: detail2,
              children: [
                {
                  path: '/channel/detail/detail2/detail3',
                  name: 'detail3',
                  component: detail3
                }
              ]
            },
            {
              path: '/channel/detail/detail3',
              name: 'detail3',
              component: detail3
            }
          ]
        }
      ]
    },
    {
      path: '/seed',
      name: 'seed',
      component: seed,
      meta: {
        title: '种子'
      },
      children: [
        {
          path: '/seed/download',
          name: 'download',
          component: download,
          children: [
            {
              path: '/seed/download/myVideos',
              name: 'myVideos',
              component: myVideos
            }
          ]
        }
      ]
    },
    {
      path: '/live',
      name: 'live',
      component: live,
      meta: {
        title: '直播'
      }
    },
    {
      path: '/person',
      name: 'person',
      component: person,
      meta: {
        title: '个人'
      }
    }
  ]
})
