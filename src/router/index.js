import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../views/recommend'
import channel from '../views/channel'
import allVip from '../views/channel/all-vip'
import seed from '../views/seed'
import live from '../views/live'
import person from '../views/person'
import error from '../views/404'
import download from '../views/common/download/index'
import myVideos from '../views/common/download/my-videos'

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
    {
      path: '*',
      name: '404',
      component: error
    },
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
          path: '/channel/download',
          name: 'download',
          component: download,
          children: [
            {
              path: '/channel/download/myVideos',
              name: 'myVideos',
              component: myVideos
            }
          ]
        },
        {
          path: '/channel/allVip',
          name: 'allVip',
          component: allVip,
          children: [
            {
              path: '/channel/allVip/download',
              name: 'download',
              component: download,
              children: [
                {
                  path: '/channel/allVip/download/myVideos',
                  name: 'myVideos',
                  component: myVideos
                }
              ]
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
