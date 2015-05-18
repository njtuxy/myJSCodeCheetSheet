function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(destination){
    console.log(this.name, 'is walking to', destination)
}

a = new Animal("elephant");
b = new Animal("chicken");

a.walk('san francisco');
b.walk('Oakland');

