import App from './App'
import Vue from 'vue'
import Vuex from 'vuex'
import VHtmlPlugin from '@megalo/vhtml-plugin'
import MegaloRouterPatch from 'megalo-router-patch'

Vue.use(Vuex)
Vue.use(VHtmlPlugin)
Vue.use(MegaloRouterPatch)

const store = require('./store').default
Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    pages: [
      'pages/index/index',
      'pages/todomvc/index',
      'pages/v-model/index',
      'pages/v-html/index',
      'pages/vuex/index',
      'pages/native/index',
      'pages/webview/index',
      'pages/img/index',
      'pages/postcss/index',
      'pages/requestTest/index'
    ],
    subpackages: [
      {
        root: 'packageA',
        pages: ['pages/a/index', 'pages/todomvc/index', 'pages/minapp-api-promise/index']
      }
    ],
    tabBar: {
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页'
        },
        {
          pagePath: 'pages/todomvc/index',
          text: 'todo'
        }
      ]
    },
    usingComponents: {
      'van-cell': '/custom-component/vant-weapp/dist/cell/index',
      'van-cell-group': '/custom-component/vant-weapp/dist/cell-group/index'
    },
    _alipay: {
      window: {
        navigationBarTitleText: 'Alipay'
      }
    },
    _swan: {
      window: {
        navigationBarTitleText: 'Baidu'
      }
    }
  }
}
