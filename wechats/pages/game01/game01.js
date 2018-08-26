// pages/game01/game01.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "[3步测试富贵命]",
    progress_percent: 0,
    score: 1,
    num: 1,
    ChooseYes: "是的",
    ChooseNo: "不是",
    questionMsg: "你认为努力赚钱是人生必不可少的任务吗？"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  changeTheMsg1: function() {
    var p_num
    p_num = this.data.num + 1
    if (p_num > 3) {
      var url
      url = '/pages/game_over/game_over?score=' + this.data.score
      wx.navigateTo({
        url: url,
      })
    }

    var p_questionMsg
    var p_score
    p_questionMsg = this.data.questionMsg
    p_score = this.data.score + 2
    p_questionMsg = this.data.questionMsg

    if (p_num === 2) {
      p_questionMsg = "当你有了一辈子都花不完的金钱时，你还愿意继续工作吗？"
    } else if (p_num === 3) {
      p_questionMsg = "你相信每个人一生的财富都是命中注定的吗？"
    }
    this.setData({
      score: p_score,
      progress_percent: parseInt((p_num - 1) / 3 * 100),
      questionMsg: p_questionMsg,
      num: p_num
    })
  },

  changeTheMsg2: function() {
    var p_num
    p_num = this.data.num + 1
    if (p_num > 3) {
      var url
      url = '/pages/game_over/game_over?score=' + this.data.score
      wx.navigateTo({
        url: url,
      })
    }

    var p_questionMsg
    var p_score
    p_questionMsg = this.data.questionMsg
    p_score = this.data.score + 1
    p_questionMsg = this.data.questionMsg

    if (p_num === 2) {
      p_questionMsg = "当你有了一辈子都花不完的金钱时，你还愿意继续工作吗？"
    } else if (p_num === 3) {
      p_questionMsg = "你相信每个人一生的财富都是命中注定的吗？"
    }
    this.setData({
      score: p_score,
      progress_percent: parseInt((p_num - 1) / 3 * 100),
      questionMsg: p_questionMsg,
      num: p_num
    })
  }
})