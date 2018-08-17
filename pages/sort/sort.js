//获取应用实例
const app = getApp()

Page({
    data: {
        tabArr: {
            curHdIndex: 0,
            curBdIndex: 0
        },
    },
    tabFun: function(e) {
        //获取触发事件组件的dataset属性
        var _datasetId = e.target.dataset.id;
        /*console.log("----" + _datasetId + "----");*/
        var _obj = {};
        _obj.curHdIndex = _datasetId;
        _obj.curBdIndex = _datasetId;
        this.setData({
            tabArr: _obj
        });
    },
    goDetail: function(e) {
      var pid = e.currentTarget.dataset.pid;
        wx.navigateTo({
          url: 'detail/detail?pid=' + pid,
        })
    },
    onLoad: function(e) {
        var _opId = app.globalData.opId;
        if (_opId == undefined || _opId == null) {
            _opId = 0;/*解决不点击more，跳转分类页时tabArr没数据 */
        }
        /*console.log("****" + _opId + "****");*/
        var _opobj = {};
        _opobj.curHdIndex = _opId;
        _opobj.curBdIndex = _opId;
        this.setData({
            tabArr: _opobj
        });
    },
    //onShow: function() {
    //    this.onLoad();
    //}
})