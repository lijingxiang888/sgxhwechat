// pages/site/site.js
Page({
    
    data: {
        markers:[{
            iconPath:"/images/site-icon.png",
            id: 0,
            latitude: 38.862890,
            longitude: 115.468730,
            width: 35,
            height: 40,
            title: "北京盛广信合知识产权代理有限公司保定分公司"
        }]
    },
    clickNav: function() {
        wx.openLocation({
            latitude: 38.862890,
            longitude: 115.468730,
            scale:18,
            name:'北京盛广信合知识产权代理有限公司保定分公司',
            address:'保定市竞秀区朝阳南大街358号盛泰中国02栋2003'
        })
    }

})