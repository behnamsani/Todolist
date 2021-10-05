let numLi=0;
let liarr=[];
const todoInput = document.getElementById("todoInput");
const ulTag = document.getElementById("ulTag");
const btnPlus=document.getElementById("btnPlus");

btnPlus.addEventListener("click", creatTodoList);
ulTag.addEventListener("click", removeTodoList);


function creatTodoList(){
    const li = document.createElement("li");
    li.classList.add("todoItem");
    const p = document.createElement("p");
    p.innerHTML=todoInput.value;
    p.classList.add("txt_Todo");
    const img_check = document.createElement("img");
    img_check.src="/Todolist/img/check.svg";
    img_check.classList.add("btn_Click");
    img_check.classList.add("btn_check");
    const img_delete = document.createElement("img");
    img_delete.src="/Todolist/img/delete.svg";
    img_delete.classList.add("btn_Click");
    img_delete.classList.add("btn_delete");
    li.appendChild(p);
    li.appendChild(img_check);
    li.appendChild(img_delete);
    ulTag.appendChild(li);
    // numLi=1+numLi;
    const numtodo = document.createElement("span");
    // numtodo.innerText=`- ${numLi}`;
    numtodo.classList.add("numTodo");
    li.appendChild(numtodo);
    liarr=document.querySelectorAll(".todoItem");
    for(let i=0;i<liarr.length;i++){
        const numTodo= document.querySelectorAll(".numTodo");
        numTodo[i].innerHTML=`- ${i+1}`;
    }
    
}

function removeTodoList(event){
    const tage =event.target;
        if(tage.classList[1]=="btn_delete"){
        tage.parentElement.remove();
        liarr=document.querySelectorAll(".todoItem");
        for(let i=0;i<liarr.length;i++){
            const numTodo= document.querySelectorAll(".numTodo");
            numTodo[i].innerHTML=`- ${i+1}`;
        }
    }
}

