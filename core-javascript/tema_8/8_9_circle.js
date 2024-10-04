

class Circle {

    constructor(ratio){
        this.ratio = ratio;
    }

    get_perimeter(){
        return 2*Math.PI*this.ratio;
    }

    get_area(){
        return Math.PI*this.ratio*this.ratio;
    }

    get_volume(height){
        return Math.PI*this.ratio*this.ratio*height;
    }
}

let smaller_circle = new Circle(2);
console.log(smaller_circle.get_perimeter());
console.log(smaller_circle.get_area());
console.log(smaller_circle.get_volume(10));

let bigger_circle = new Circle(3);
console.log(bigger_circle.get_perimeter());
console.log(bigger_circle.get_area());
console.log(bigger_circle.get_volume(10));

console.log("Has bigger circle more perimeter than smaller circle?");
console.log(bigger_circle.get_perimeter() > smaller_circle.get_perimeter());