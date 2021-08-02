function addListDiv(e){
    // e.previousElementSibling.style.background = "green";
    currtodo.querySelector(".todo-filter").style.background = currentColor;
    let headingText = e.target.textContent;
    listClk = document.createElement("div");
    listClk.classList.add("list-click");
    listClk.innerHTML = `<div class="close-btn">
                            <i class="fas fa-window-close"></i>
                        </div>
                        <div class="list-heading">
                                ${headingText}
                        </div>
                        <div class="filters">
                            <div class="filter-name">
                                Filters:
                            </div>
                            <div class="list-filter">
                                <div class="red"></div>
                                <div class="green"></div>
                                <div class="orange"></div>
                                <div class="blue" ></div>
                            </div>
                        </div>
                        <div class="Desc">Description :</div>
                        <div class="list-desc" contenteditable="true"></div>
                        <button type="submit" class="save-content">SAVE</button>
                        <div class="delete">
                            <i class="fas fa-trash"></i>
                        </div>`

    box.append(listClk);

    box.querySelector(".close-btn").addEventListener("click", function(e){listClk.remove();})
    box.querySelector(".delete").addEventListener("click", function(e){
        listClk.remove();
        currtodo.remove();
    }) 
    let colorfilters = box.querySelectorAll(".list-filter div");
    for(let i = 0;i<colorfilters.length;i++){
        colorfilters[i].addEventListener("click", function(e){
            if(e.target.classList.contains("active-filter")){
                return;
            }
            if (document.querySelector(".active-filter")) {
                document
                  .querySelector(".active-filter")
                  .classList.remove("active-filter");
            }
            e.target.classList.add("active-filter");
            currentColor = filterCodes[e.target.classList[0]];
            currtodo.querySelector(".todo-filter").style.background = currentColor;
        })
    }
    currtodo.querySelector(".todo-filter").style.background = currentColor;
    
}
