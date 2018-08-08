//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        imgs: [
            '/images/banner1.jpg',
            '/images/banner2.jpg',
            '/images/banner3.jpg',
            '/images/banner4.jpg'
        ]
    },
    tel: function() {
        wx.makePhoneCall({
            phoneNumber: '18233283758',
            success: function() {
                console.log('拨打电话成功')
            },
            fail: function() {
                console.log('拨打电话失败')
            }
        })
    },
    gomore: function(e) {
        var opId = e.currentTarget.dataset.id;
        console.log("点击的more索引是" + opId); 
        app.globalData.opId = opId;
        wx.switchTab({
            url: '../sort/sort',
            /*下面success是解决微信小程序switchTab后选项卡不刷新，因为如果当前页的某个选项卡之前已经打开，再跳转到这个的时候页是不走任何生命周期的，所以这个页面还是显示已经打开的那个选项卡 */
            success: function() {
                var page = getCurrentPages().pop();/*getCurrentPages方法是得到当前页面栈（也就是当前打开的所有页），以数组形式按栈的顺序给出，第一个元素为首页，最后一个参数是当前页。pop() 数组方法是为了得到当前页。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。 */
                if (page == undefined || page == null) return;
                page.onLoad();/*调用onLoad方法强制刷新*/
            }
        })
    },

})