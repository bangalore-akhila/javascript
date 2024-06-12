// function Circle() {
//     this.radius = 10;
//     this.getArea = function() {
//         var self = this;
//         var increaseRaduis = function() {
//             self.radius = 20;
//         }
//         increaseRaduis();
//         return Math.PI*Math.pow(this.radius,2)
//     };
// }

// var circle = new Circle();
// console.log(circle.getArea());

//using prototypes
function CircleRadius(){
    this.radius =20;
}
CircleRadius.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
}

var Circle = new CircleRadius();
console.log(Circle.getArea());