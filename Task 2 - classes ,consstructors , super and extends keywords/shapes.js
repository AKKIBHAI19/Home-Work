class shape{
    constructor(color){
        this.color = color;
    }
    color(){
        console.log(this.color)
    }
}
class square extends shape{
    constructor(side ,color){
        super(color)
        this.side = side;
    }
    area(){
        return `area of square is ${this.side * this.side} and the color is : ${this.color}`;
    }
}
class triangle extends shape{
    constructor(base , height , color){
        super(color)
        this.base = base;
        this.height = height;
    }
    area(){
        return `the area of triangle is ${1/2*(this.base*this.height)} and the color is : ${this.color}` ;
    }
}

const myTriangle = new triangle(4 , 3 , 'red');
const mySquare = new square(4 , 'blue');

document.querySelector('#justPrint').innerText =  myTriangle.area() + '\n' + mySquare.area()