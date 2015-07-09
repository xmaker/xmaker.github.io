var app  = [1,2,3,4,5,6,7,9];
var pout = function(){
    app.forEach(function(data){
        console.log(data);
    });
};

function User(name, age){

    var self = this instanceof User ?
                this :
                Object.create(User.prototype);

    self.name = name;
    self.age  = age;

    return self;
}

var u = new User('jo', 128);
var u2 = User('jun', 500);

function Shape(width, height){
    this.width = width;
    this.height = height;
}

Shape.prototype.draw = function(){
    console.log('draw shape width is ' + this.width + ', height is ' + this.height);
};

var sp = new Shape(20, 30);
sp.draw();

function Rect(width, height){
    this.base = Shape;
    this.base(width, height);
}

Rect.prototype = Shape.prototype;

var rr = new Rect(33,22);
rr.draw();
