let input = document.getElementById("item-input");
let button = document.getElementById("item-button");
let list = document.getElementById("lista");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("delete");

function addItems() {
    let li = document.createElement("li"); 
    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "delete";
    li.appendChild(xButton);

    let text = document.createTextNode(input.value)
    

    if(input.value !== ""){
        li.appendChild(text);
        list.appendChild(li);
    } 

    input.value = "";
    buttonEvents();
}

function deleteItem(){
    this.parentElement.remove();
}


function buttonEvents() {
    
    for (let index = 0; index < itemButtons.length; index++) {
        itemButtons[index].addEventListener("click",deleteItem);
        
    }
}

button.addEventListener("click",addItems);
buttonEvents();

