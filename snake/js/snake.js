const Snake = function Snake() {
  this.direction = "N";
  this.segments = [10,10];
};

Snake.prototype.move = function move () {

};


Function.prototype.myBind = function(context, ...args) {
  return (...callArgs) => {
    return this.apply(context, args.concat(callArgs));
  };
};


Function.prototype.inherits = function inherits(parent) {
  function Surrogate () {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate;
  this.prototype.constructor = this;
};

Function.prototype.inherits = function inherits(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

Function.prototype.inherits = function inherits(parent) {

};

function currySum (numArgs) {
  let nums = [];
  function _currySum(arg) {
    nums.push(arg);
    if (numArgs === nums.length) {
      let sum = 0;
      for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      return sum;
    } else {
      return _currySum;
    }
  }

  return _currySum;
}




Markov.hello.myBind(Sally, "hello")("me")
