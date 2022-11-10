"use strict";
var common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_circle = common_vendor.resolveComponent("circle");
  const _component_path = common_vendor.resolveComponent("path");
  const _component_g = common_vendor.resolveComponent("g");
  const _component_svg = common_vendor.resolveComponent("svg");
  (_component_circle + _component_path + _component_g + _component_svg)();
}
const _sfc_main = {
  __name: "Home",
  setup(__props) {
    const Image_Banner = ["spyfamily1", "spyfamily2", "spyfamily3"];
    const Image_Business = [
      {
        name: "\u5145\u503C",
        url: "/static/Image/spyfamily1.jpg"
      },
      {
        name: "\u63D0\u73B0",
        url: "/static/Image/spyfamily2.jpg"
      },
      {
        name: "\u8BA2\u5355",
        url: "/static/Image/spyfamily3.jpg"
      },
      {
        name: "\u62CD\u5356",
        url: "/static/Image/spyfamily1.jpg"
      }
    ];
    const number_Display = [
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: "200.00",
        wave: "+0.5%"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: "205.00",
        wave: "-0.5%"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: "210.00",
        wave: "+0.5%"
      }
    ];
    const Billboard_list = [
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        number: "0001",
        price: 200,
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      },
      {
        name: "\u85CF\u54C1\u540D\u79F0",
        price: 200,
        number: "0001",
        wave: "+1.11%",
        total: "55555"
      }
    ];
    const Billboard = ["\u70ED\u95E8", "\u6DA8\u5E45\u699C", "\u8DCC\u5E45\u699C", "24h\u6210\u4EA4\u91CF"];
    const News = ["\u52A8\u6001", "\u8981\u95FB", "\u70ED\u95E8", "\u81EA\u9009"];
    const Billboard_index = common_vendor.ref(0);
    const News_index = common_vendor.ref(0);
    const changebillboardindex = (index) => Billboard_index.value = index;
    const changenewsindex = (index) => News_index.value = index;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          cx: "14",
          cy: "14",
          r: "12"
        }),
        b: common_vendor.p({
          d: "m23 23l7 7"
        }),
        c: common_vendor.p({
          stroke: "#ff7b00",
          ["stroke-linecap"]: "round",
          ["stroke-linejoin"]: "round",
          ["stroke-width"]: "4"
        }),
        d: common_vendor.p({
          width: "16",
          height: "16",
          viewBox: "0 0 32 32"
        }),
        e: common_vendor.p({
          d: "M17 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Z"
        }),
        f: common_vendor.p({
          d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0 0 12 22Z"
        }),
        g: common_vendor.p({
          stroke: "#ff7b00",
          ["stroke-linecap"]: "round",
          ["stroke-linejoin"]: "round",
          ["stroke-width"]: "2"
        }),
        h: common_vendor.p({
          width: "24",
          height: "24",
          viewBox: "0 0 24 24"
        }),
        i: common_vendor.f(Image_Banner, (item, index, i0) => {
          return {
            a: `/static/Image/${item}.jpg`,
            b: item,
            c: index
          };
        }),
        j: common_vendor.f(Image_Business, (item, index, i0) => {
          return {
            a: item.url,
            b: item.name,
            c: common_vendor.t(item.name),
            d: index
          };
        }),
        k: common_vendor.f(number_Display, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.price),
            c: common_vendor.n(item.wave > 0 ? "price-up" : "price-down"),
            d: common_vendor.t(item.wave),
            e: common_vendor.n(item.wave > 0 ? "wave-up" : "wave-down"),
            f: index
          };
        }),
        l: common_vendor.f(Billboard, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(Billboard_index.value == index ? "billboard-active" : ""),
            c: common_vendor.o(($event) => changebillboardindex(index)),
            d: common_vendor.n(Billboard_index.value == index ? "decorate" : ""),
            e: index
          };
        }),
        m: common_vendor.f(Billboard_list, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.number),
            c: common_vendor.t(item.price),
            d: common_vendor.t(item.wave),
            e: common_vendor.t(item.total),
            f: index
          };
        }),
        n: common_vendor.f(News, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: common_vendor.n(News_index.value == index ? "billboard-active" : ""),
            c: common_vendor.o(($event) => changenewsindex(index)),
            d: common_vendor.n(News_index.value == index ? "decorate" : ""),
            e: index
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-316747f2"], ["__file", "C:/Users/17252/Desktop/UNI/SecondPlatform/pages/Tabbar/Home.vue"]]);
wx.createPage(MiniProgramPage);
