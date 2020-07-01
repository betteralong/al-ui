import AlButton from './src/index'

/* istanbul ignore next */
AlButton.install = function(Vue) {
  Vue.component(AlButton.name, AlButton)
}

export default AlButton