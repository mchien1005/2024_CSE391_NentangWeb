{
    let a = 5;
    let b = 10;
    let c = a + b;
}
let d = new Date();
//console.log(c);
alert(d);
d="Hello";
console.log(d);
let arr = [1,2,3];
let coppyArr = [...arr];

const doSomeThing =() =>{console.log("Hello")}
doSomeThing("Hi Greet");
setTimeout(doSomeThing, 2000);

const student={
    name: "Nguyen Van A",
    class: "64KTMP2",
    doSomeThing:function(){
        console.log("Hello");
    }
};
console.log(student.name);
console.log(student["class"]);
student.doSomeThing();

class Student{
    constructor(name,school_class) {
        this.name = name;
        this.school_class = school_class;
    }
    getInfo = () =>{
        return this.school_class;
    }
}

let myArr = [3,4,5,6,7];//original
const square = (x) => {return x*x};
const modifyArray = (arr,func) =>{
    let result = [];
    for(let i = 0;i<=arr,length-1;i++){
        result.push(func(arr[i]));
    }
    console.log(result);
}
modifyArray(myArr, square);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if(shoppingCart.includes('Meat') !=true){
    shoppingCart.unshift('Meat');
    console.log(shoppingCart);
}
