
let listClk;
let currtodo;
function attachDnDEvents(){
    alltodos = document.querySelectorAll(".todos");
    for(let i = 0;i<alltodos.length;i++){
        currtodo = alltodos[i];
        alltodos[i].addEventListener('click', addListDiv);
        alltodos[i].draggable = "true";
        alltodos[i].addEventListener('dragstart', function(e){
            alltodos[i].classList.add("dragging");
        })
    
        alltodos[i].addEventListener('dragend', function(){
            alltodos[i].classList.remove("dragging");
        })
    }
    for(let j = 0;j<contentDiv.length;j++){
        contentDiv[j].addEventListener('dragover', function(e){
            e.preventDefault();
            
            const draggable = document.querySelector(".dragging");
            contentDiv[j].querySelector(".todo-lists").appendChild(draggable);
        })
    }
}