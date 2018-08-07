var listdata = [{
    name:'普通商标注册'
},{
    name:'商标复审'
},{
    name:'商标变通加急'
},{
    name:'国际商标'
}];
module.exports = listdata; /*导出数据，外面就可以用了。然后哪个页面要用，就在哪个页面对应的js文件顶部var list = require('这里要写相对路径，也就是此时这个js文件怎么找到data.js文件'）*/
/*在引入数据的页面的js文件中，data里新建lists:[]，然后在onLoad函数里把假数据放进data对象里：this.setData({lists:list});*/
/*然后在页面文件中，循环数据并绑定，建议最外层套一个block标签，block标签是一个无意义的块级标签，然后在block标签里wx-for="{{lists}}"，最后把变量的地方写上{{item.name}}等*/