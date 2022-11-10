"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "Login",
  setup(__props) {
    const login_way = common_vendor.ref("true");
    const changeWay = () => {
      login_way.value = !login_way.value;
    };
    const gohome = () => common_vendor.index.switchTab({ url: "/pages/Tabbar/Home" });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.n(login_way.value ? "react" : ""),
        b: common_vendor.o(changeWay),
        c: common_vendor.n(login_way.value ? "" : "react"),
        d: common_vendor.o(changeWay),
        e: login_way.value
      }, login_way.value ? {} : {}, {
        f: login_way.value
      }, login_way.value ? {} : {}, {
        g: common_vendor.o(gohome)
      });
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3a2da0cc"], ["__file", "C:/Users/17252/Desktop/UNI/SecondPlatform/pages/Login/Login.vue"]]);
wx.createPage(MiniProgramPage);
