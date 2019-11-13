import Vue from "vue"
import { mapGetters } from "vuex"

Vue.component("d-menu", {
  data () {
    return {
      isCollapse: false,
      logoStyle: {
        height: "100px",
        lineHeight: "100px",
        cursor: "pointer",
        textAlign: "center"
      }
    }
  },
  computed: {
    ...mapGetters([
      "getuserInfo"
    ])
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    },
    createDMenu(_d = []) {
      if (!Array.isArray(_d)) return undefined
      const dmenu = _d.map(d => {
        if (d.type === "dmenu" && d.children) {
          return (
            <el-menu
            default-active={ this.$route.path }
            collapse={ this.isCollapse }
            router={ true }
            uniqueOpened={ true }
            >
              { this.createDMenu(d.children) }
            </el-menu>
          )
        }
        if (d.type === "dsubMenu" && d.children) {
          return (
            <el-submenu index={ d.path }>
              <template slot="title">
                <i class={ d.iClass }></i>
                <span slot="title">{ d.title }</span>
              </template>
              { this.createDMenu(d.children) }
            </el-submenu>
          )
        }
        if (d.type === "dgroup" && d.children) {
          return (
            <el-menu-item-group>
              <span slot="title">{ d.title }</span>
              { this.createDMenu(d.children) }
            </el-menu-item-group>
          )
        }
        if (d.type === "ditem") {
          return (
            <el-menu-item index={ d.path }>
              <i class={ d.iClass }></i>
              <span slot="title">{ d.title }</span>
            </el-menu-item>
          )
        }
        return undefined
      })
      return dmenu
    }
  },
  render: function (h) {
    return (
      <div>
        {
          this.isCollapse
            ? (<div onClick={this.changeCollapse} style={ this.logoStyle }>{ this.$slots.smallLogo }</div>)
            : (<div onClick={this.changeCollapse} style={ this.logoStyle }>{ this.$slots.bigLogo }</div>)
        }
        { this.createDMenu(this.getuserInfo.menu) }
      </div>
    )
  }
})