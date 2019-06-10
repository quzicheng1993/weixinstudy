Page({

  data:{
    num1:'',
    num2:'',
    result:''
  },

  bindAdd:function(e){
    var r = this.data.num1*1 + this.data.num2*1;
      this.setData({
        result:r
      });
  },

  bindInput1:function(e){
    // console.log(e);
    var n = e.detail.value;
    if(!isNaN(n)){
      this.setData({
        num1: e.detail.value
      });
    }
  },

  bindInput2:function(e){
    var n = e.detail.value;
    if(!isNaN(n)){
      this.setData({
        num2:n
      });
    }
  }

})