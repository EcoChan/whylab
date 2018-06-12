//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgUrls: [
        ],
    },
    onShareAppMessage: function (res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: 'WHYLAB - 手机百科',
            path: '/pages/index/index'
        }
    }
})
