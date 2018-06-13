//logs.js
Page({
    data: {
        companyes: ['Apple', '三星', '华为', '小米', '一加','vivo','OPPO','锤子','诺基亚','魅族','努比亚','SONY','HTC','Google','LG','金立','TCL','IUNI','Microsoft']
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(log => {
                return util.formatTime(new Date(log))
            })
        })
    }
})
