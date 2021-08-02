let filterCodes = {
    red: "#f55c47",
    green: "#4aa96c",
    orange: "#f98404",
    blue: "#39a9cb",
};
//todo
let todo = document.querySelector(".todo");
let addTodo = todo.querySelector(".todo-add");
let todoList = todo.querySelector(".todo-lists");
let todoinput = todo.querySelector(".todo-input");


//doing
let doing = document.querySelector(".doing");
let doingList = doing.querySelector(".todo-lists");
let adddoing = doing.querySelector(".todo-add");
let doinginput = doing.querySelector(".todo-input");



//done
let done = document.querySelector(".done");
let doneList = done.querySelector(".todo-lists");
let adddone = done.querySelector(".todo-add");
let doneinput = done.querySelector(".todo-input");


let alltodos = document.querySelectorAll(".todos");
const content = document.querySelector(".content");
const contentDiv = document.querySelectorAll(".content>div");

let box = document.querySelector(".list-box");

let currentColor = "#39a9cb"




let isBtn = false;
let isBtndoing = false;
let isBtndone = false;
let inputtodo;
let inputdoing;
let inputdone;

addTodo.addEventListener("click", function () {

    appendtodo();
    attachDnDEvents();
});


adddoing.addEventListener("click", function (e) {

    appenddoing();
    attachDnDEvents();
})



adddone.addEventListener("click", function (e) {

    appenddone();
    attachDnDEvents()

})


function appendtodo() {
    if (isBtn && inputtodo.value) {
        let val = inputtodo.value;
        let tododiv = document.createElement("li");
        tododiv.classList.add("todos");
        tododiv.draggable = true;
        tododiv.innerHTML = `<div class="todo-filter">

                            </div>
                            <div class="li-text">${val}</div>`;
        todoList.append(tododiv);
        inputtodo.remove(inputtodo);
        todo.style.height = "";
        isBtn = false;
        // isBtn = false;
    } else if (isBtn == false && !todo.querySelector(".in-todo")) {


        todo.style.height = "350px";
        inputtodo = document.createElement("input");
        inputtodo.type = "text";
        inputtodo.classList.add("in-todo");
        // todoinput.innerHTML = "";
        todoinput.append(inputtodo);
        // todoinput.append(addTodo);
        isBtn = true;


    } else if (isBtn && !inputtodo.value) {
        inputtodo.remove();
        todo.style.height = "";
        isBtn = false;
    }
}




function appenddoing() {
    if (isBtndoing && inputdoing.value) {
        let val = inputdoing.value;
        let tododiv = document.createElement("li");
        tododiv.classList.add("todos");
        tododiv.draggable = true;
        tododiv.innerHTML = `<div class="todo-filter">

                            </div>
                            <div class="li-text">${val}</div>`;

        doingList.append(tododiv);
        inputdoing.remove();
        doing.style.height = "";
        isBtndoing = false;
        // isBtn = false;
    } else if (isBtndoing == false && !doing.querySelector(".in-todo")) {
        doing.style.height = "350px";
        inputdoing = document.createElement("input");
        inputdoing.type = "text";
        inputdoing.classList.add("in-todo");
        // todoinput.innerHTML = "";
        doinginput.append(inputdoing);
        // todoinput.append(addTodo);
        isBtndoing = true;


    } else if (isBtndoing && !inputdoing.value) {
        inputdoing.remove();
        doing.style.height = "";
        isBtndoing = false;
    }
}



function appenddone() {
    if (isBtndone && inputdone.value) {
        let val = inputdone.value;
        let tododiv = document.createElement("li");
        tododiv.classList.add("todos");
        tododiv.innerHTML = `<div class="todo-filter">
                            </div>
                            <div class="li-text">${val}</div>`;;
        tododiv.draggable = true;

        doneList.append(tododiv);
        inputdone.remove(inputdone);
        done.style.height = "";
        isBtndone = false;
        // isBtn = false;
    } else if (isBtndone == false && !done.querySelector(".in-todo")) {


        done.style.height = "350px";
        inputdone = document.createElement("input");
        inputdone.type = "text";
        inputdone.classList.add("in-todo");
        // todoinput.innerHTML = "";
        doneinput.append(inputdone);
        // todoinput.append(addTodo);
        isBtndone = true;


    } else if (isBtndone && !inputdone.value) {
        inputdone.remove();
        done.style.height = "";
        isBtndone = false;
    }
}