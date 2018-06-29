//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        banners: [], // banner 数据
        recommends: [] // 推荐 数据
    },

    onLoad: function() {
        this.getIndexData('index'); //获取 banner
        this.getIndexData('recommend'); //获取首页推荐
    },

    getIndexData: function(type) {
        let self = this;
        let url = '/WxApp/getBanner';

        wx.showLoading({ title: '加载中...' });
        app.ajax(url, { type: type }, function(data) {
            if( type === 'index') {
                self.setData({ 'banners': data.list });
            } else {
                self.setData({ 'recommends': data.list });
            }
            wx.hideLoading();
        });
    },

    // 获取 banner
    getBanners: function() {
        let self = this;
        let url = '/WxApp/getBanner';

        wx.showLoading({ title: '加载中...' });
        app.ajax(url, {}, function(data) {
            console.log(data);
            self.setData({
                'banners': data.list
            });
            wx.hideLoading();
        });
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
