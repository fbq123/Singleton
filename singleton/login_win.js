"use strict";


class LoginWinSinhleton {
  constructor() {
    //instance 实例
    this.instance = null;
    this.appendWin();
    this.attachEvent();
  }

  static  getInstance(){
    if(!this.instance) {
      this.instance = new LoginWinSinhleton();

    }
    return this.instance;
  }

  appendWin(){
    this.containerElement = document.createElement('div');
    this.containerElement.className = 'layer';
    this.containerElement.innerHTML = '我是登录浮窗';
    document.body.appendChild(this.containerElement);
    this.containerElement.style.display = 'none';
  }

  attachEvent(){
    var that = this;
    this.containerElement.addEventListener('click',function(){
      that.hide();
    },false)
  }

  hide(){
    this.containerElement.style.display = 'none';
  }
  show(){
    this.containerElement.style.display = 'block';
  }
}
