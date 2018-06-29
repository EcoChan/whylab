// 所有机型页面
const app = getApp();

Page({
    data: {
        companyes: ['Apple', '三星', '华为', '小米', '一加','vivo','OPPO','锤子','诺基亚','魅族','努比亚','SONY','HTC','Google','LG','金立','TCL','IUNI','Microsoft'],
        brand: '',
        keyword: '',
        list: [],
        showNoResult: false  // 显示没结果 icon
    },

    onLoad: function () {
        this.search();
    },

    setKeyword: function(event) {
        console.log(event.detail);
        var keyword = event.detail.value;
        this.setData({ keyword: keyword });
    },

    search: function() {
        var self = this;
        var url = '/WxApp/searchPhone';
        self.setData({ 
            showNoResult: false,
            brand: '',
        });
        wx.showLoading({ title: '加载中...'});
        app.ajax(url, { keyword: this.data.keyword }, function(data) {
            self.setData({ list: data });
            data.length <= 0 && self.setData({ showNoResult: true });
            wx.hideLoading();
        });
    },

    searchByBrand: function(event) {
        var self = this;
        var brand = event.currentTarget.dataset.brand;
        var url = '/WxApp/searchPhoneByBrand';
        self.setData({ brand: brand });
        self.setData({ showNoResult: false });
        wx.showLoading({ title: '加载中...'});
        app.ajax(url, { brand: brand }, function(data) {
            self.setData({ list: data });
            data.length <= 0 && self.setData({ showNoResult: true });
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
            path: '/pages/allPhones/allPhones'
        }
    }
})
