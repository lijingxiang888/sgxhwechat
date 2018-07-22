//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgs:[
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
      '/images/banner4.jpg'
    ]
  },
  tel:function() {
    wx.makePhoneCall({
      phoneNumber: '18233283758',
      success:function(){
        console.log('拨打电话成功')
      },
      fail:function(){
        console.log('拨打电话失败')
      }
    })
  }

})
