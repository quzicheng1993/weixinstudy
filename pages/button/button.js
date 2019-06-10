Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize:'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },

  //设置 disabled变量的值
  setDisabled: function(e){
    this.setData({
      disabled: !this.data.disabled
    })
  },

  //设置 plain变量的值
  setPlain: function (e) {
    this.setData({
      plain: !this.data.plain
    })
  },

  //设置loading变量的值
  setLoading:function(e){
    this.setData({
      loading: !this.data.loading
    })
  },

  //default 按钮触按事件处理函数
  default:function(e){
    var d = this.data.defaultSize == 'default'?'mini':'default';
    this.setData({
      defaultSize:d //切换defaultSize的值
    })
  },

  //primary按钮触按时间处理函数
  primary:function(e){
    var d = this.data.primarySize == 'default'?'mini':'default';
    this.setData({
    primarySize:d //切换primarySize的值
    })
  },

  // warn按钮触按时间处理函数
  warn:function(e){
    var d = this.data.warnSize == 'default'?'mini':'default';
    this.setData({
      warnSize:d //切换primarySize的值
    })
  }
  
})