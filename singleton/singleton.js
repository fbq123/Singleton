/*
 *created by fbq
 *2016.8.23
 *单例的实现
 */

var Singleton = function(name) {
  this.name = name;
  //instance 实例
  this.instance = null;
}

Singleton.prototype.getName = function (name) {
  console.log(this.name);
};

Singleton.getInstance = function(name){
  if(!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

let a = Singleton.getInstance('sven1');
let b = Singleton.getInstance('sven2');
a.getName();
b.getName();
