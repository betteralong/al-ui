import Alform from './src/index'

/* istanbul ignore next */
Alform.install = function(Vue) {
  Vue.component(Alform.name, Alform)
}

export default Alform