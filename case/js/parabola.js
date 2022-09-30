function parabola(options) {
    let defaultOptions = {
        curvature: 0.0008,
        success:function (status) {
        }
    };
    this.option = Object.assign(defaultOptions, options);
    if (typeof (this.option.el) == "string") {
        this.el = this.option.el.indexOf('.') >= 0 ? document.querySelectorAll(this.option.el) : document.getElementById(this.option.el.substr(1));
    } else {
        this.el = this.option.el;
    }
    if (typeof (this.option.target) == "string") {
        this.target = this.option.target.indexOf('.') >= 0 ? document.querySelectorAll(this.option.target) : document.getElementById(this.option.target.substr(1));
    } else {
        this.target = this.option.target;
    }
    this.a = -this.option.curvature;
    this.x = 0;
    this.b = ((this.el.offsetTop - this.target.offsetTop) - this.a * (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2) * (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2)) / (this.target.offsetLeft - this.el.offsetLeft + this.target.offsetWidth / 2);
}

parabola.prototype.move = function () {
    let oldX = this.el.offsetLeft;
    let oldY=this.el.offsetTop;
    if (this.target.offsetLeft - this.el.offsetLeft > 0) {
        this.x += 8;
    } else {
        this.x -= 8;
    }
    this.y = this.a * this.x * this.x + this.b * this.x;
    if (Math.abs(this.x - this.target.offsetWidth / 2) >= Math.abs(oldX - this.target.offsetLeft)) {
        this.option.success.call(this,{status:'ok',class:'shake'});
        return
    }
    this.el.style.cssText = "left:"+oldX+"px;top:"+oldY+"px;transform: translate(" + this.x + "px," + (-this.y) + "px)";
    requestAnimationFrame(this.move.bind(this));
};