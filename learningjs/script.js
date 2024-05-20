/*
/!*
const numbers = [1,2,3,4,5,6];
let sum = 0;
const newArr = numbers.map(number => {})*!/

let mainElement = document.getElementById("main");
console.log(mainElement.attributes);
if(!mainElement.hasAttribute('style')){
    mainElement.setAttribute('style', 'color:red');
}
//Cac thuoc tinh vaf phuong thuc lien quan textnode
console.log(mainElement.textContent);
/!*
mainElement.textContent="Hahaha";
console.log(mainElement.children);*!/
mainElement.children[0].textContent="New Paragraph";
console.log(mainElement.children[0].textContent);
//xoa node
let childToRemove = mainElement.children[0];
mainElement.removeChild(childToRemove);
console.log(mainElement.innerHTML);
//them node
let newElement = document.createElement("div");
newElement.id = "childOfMain";
newElement.style = "color:red; background-color:yellow";
newElement.textContent = "Child Of Main";

newElement.appendChild(newElement);*/

//Buoc1 Xac dinh cac phan tu Tham CHIEU ma chung ta se tac dong
let txtFruit = document.getElementById("txtFruit");
let btnSearch = document.getElementById("btnSearch");
let pNotify = document.getElementById("pNothing");
let imgView = document.getElementById("imgView");

let fruits = ['orange','lemon','strawberry'];
/*
//Buoc 2 xu li su kien
btnSearch.addEventListener("click", doSomeThing)
//Buoc3 ham xu ly
function doSomeThing() {
    let fruit = txtFruit.value;
    if(fruit == ''){
        alert("Please enter something");
    }else{
        if(!fruits.includes(fruit)){
            pNotify.textContent='The '+ fruit +'not exist';
            pNotify.style ='color:red; background-color:yellow';
        }else{
            pNotify.textContent=fruit;
            imgView.src='images/'+fruit+'.jpg';
        }
    }
}*/
//Buoc 2 xu li su kien
btnSearch.addEventListener("click", e => {
        let fruit = txtFruit.value;
        if(fruit === ''){
            alert("Please enter the Fruit ");
        }else{
            if(!fruits.includes(fruit)){
                pNotify.textContent='The '+ fruit +'not exist';
                pNotify.style ='color:red; background-color:yellow';
            }else{
                pNotify.textContent=fruit;
                imgView.src='images/'+fruit+'.jpg';
            }
        }
})
//Buoc3 ham xu ly
