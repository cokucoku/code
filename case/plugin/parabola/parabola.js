function parabola(options) {
    let defaultOptions = {
        curvature: 0.0008,
        speed:1,
        success:function (status) {
        }
    };
    this.option = Object.assign(defaultOptions, options);
    if (typeof (this.option.el) == "string") {
        this.el = document.querySelector(this.option.el)
    } else {
        this.el = this.option.el;
    }
    if (typeof (this.option.target) == "string") {
        this.target = document.querySelector(this.option.target)
    } else {
        this.target = this.option.target;
    }
    this.a = -this.option.curvature;
    this.x = 0;
    this.b = ((this.el.offsetTop - this.target.offsetTop) - this.a * (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2) * (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2)) / (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2);
    //console.log(this.b)
}

parabola.prototype.move = function () {
    let oldX = this.el.offsetLeft;
    let oldY=this.el.offsetTop;
    if (this.target.offsetLeft - this.el.offsetLeft > 0) {
        this.x += this.option.speed;
    } else {
        this.x -= this.option.speed;
    }
    this.y = this.a * this.x * this.x + this.b * this.x;
    if (Math.abs(this.x - this.target.offsetWidth / 2) >= Math.abs(oldX - this.target.offsetLeft)) {
        this.option.success.call(this,'ok');
        return
    }
    this.el.style.cssText = "left:"+oldX+"px;top:"+oldY+"px;transform: translate(" + this.x + "px," + (-this.y) + "px)";
    requestAnimationFrame(this.move.bind(this));
};
