// pages/game_over/game_over.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_scores: 0,
    responseMsg: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var all_scores
    var responseMsg
    all_scores = parseInt(options.score)
    if (all_scores < 4) {
      responseMsg = "也许吃饭还是没有问题的."
    }
    else if (all_scores === 4) {
      responseMsg = "你将会一夜暴富."
    }
    else if (all_scores > 4) {
      responseMsg = "下一个富豪就是你了."
    }
    this.setData({
      responseMsg:responseMsg,
      all_scores: all_scores
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})