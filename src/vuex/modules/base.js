import { SET_TAB } from '../mutation-types'

let state = {
  // 底部tab
  index_nav: [
    {
      index: 0,
      tabId: 'recommend',
      path: '/recommend',
      icon: 'icon-recommend',
      text: '推荐'
    },
    {
      index: 1,
      tabId: 'channel',
      path: '/channel',
      icon: 'icon-channel',
      text: '频道'
    },
    {
      index: 2,
      tabId: 'seed',
      path: '/seed',
      icon: 'icon-seed',
      text: '种子'
    },
    {
      index: 3,
      tabId: 'live',
      path: '/live',
      icon: 'icon-live',
      text: '直播'
    },
    {
      index: 4,
      tabId: 'person',
      path: '/person',
      icon: 'icon-person',
      text: '个人'
    }
  ],
  // 推荐页选中的tabId
  selectedId: 'film'
}

const mutations = {
  [SET_TAB] (state, selectedId) {
    state.selectedId = selectedId
  }
}

export default {
  state,
  mutations
}
