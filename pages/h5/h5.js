//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        id: '1'
    },
    onLoad: function(options) {
        this.setData({
          id: options.id
        })
    },
    onShareAppMessage: function (res) {
        var str = res.webViewUrl.split('?')[1];
        console.log(str);
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: 'WHYLAB - 1分钟读懂手机',
            path: '/pages/h5/h5?' + str
        }
    }
})
