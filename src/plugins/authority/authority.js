export default{
  install (Vue, options) {
    
    Vue.directive("dExcalibur", {
      inserted (el, binding) {

        const _drole = options.store.state.userInfo.role
        const _dauthNum = options.store.state.userInfo.authNum

        let hasExcalibur = false

        if (binding.arg === "role") {
          if (Array.isArray(binding.value)) {
            if (binding.value.some(r => r === _drole)) { // 拥有该角色
              hasExcalibur = true
            }
          } else {
            if (binding.value === _drole) { // 拥有该角色
              hasExcalibur = true
            }
          }
        }
        if (binding.arg === "authNum") { 
          if (binding.value <= _dauthNum) { // 所需权限小于角色权限
            hasExcalibur = true
          }
        }
        if (!hasExcalibur) { 
          el.parentNode.removeChild(el)
        }
      } 
    })

    Vue.prototype.dhasExcalibur = function (value) {

      const _drole = options.store.state.userInfo.role
      const _dauthNum = options.store.state.userInfo.authNum

      let hasExcalibur = false

      if (Array.isArray(value)) {
        if (value.some(r => r === _drole)) { // 拥有该角色
          hasExcalibur = true
        }
      } else {
        if (value === _drole) { // 拥有该角色
          hasExcalibur = true
        }
        if (typeof value === "number") { // 模块所需权限小于角色权限
          if (value <= _dauthNum) {
            hasExcalibur = true
          }
        }
      }
      return hasExcalibur

    }
  }
}