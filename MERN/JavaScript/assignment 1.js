// 1
console.log(hello);
var hello = 'world';
//var hello; 
// console.log(hello) -> undefined
// hello = 'world'




// 2
var needle = 'haystack';
test();
function test (){
    var needle = 'magnet';
    console.log(needle)
}
//magnet

// 3
var brendan  = 'super cool';
function print(){
    brendan = 'only oky';
    console.log(brendan)
}
console.log(brendan)
// super cool 

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// chicken
// half-chicken

// 8
console.log(makeDojo('chicago',65));
console.log(makeDojo('berkeley',0));


function makeDojo(name,students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students>50){
        dojo.hiring=true;
    }
    else if(dojo.students<=0){
        dojo = 'colosed for now!';

    }
    return dojo
}
// dojo is immutable



