let numLi=0;
const todoInput = document.getElementById("todoInput");
const ulTag = document.getElementById("ulTag");
const btnPlus=document.getElementById("btnPlus");

btnPlus.addEventListener("click", creatTodoList);



function creatTodoList(){
    const li = document.createElement("li");
    li.classList.add("todoItem");
    const p = document.createElement("p");
    p.innerHTML=todoInput.value;
    p.classList.add("txt_Todo");
    const img_check = document.createElement("img");
    img_check.src="/Todolist/img/check.svg";
    img_check.classList.add("btn_Click");
    const img_delete = document.createElement("img");
    img_delete.src="/Todolist/img/delete.svg";
    img_delete.classList.add("btn_Click");
    li.appendChild(p);
    li.appendChild(img_check);
    li.appendChild(img_delete);
    ulTag.appendChild(li);
    numLi=1+numLi;
    console.log(numLi);
    const numtodo = document.createElement("span");
    numtodo.innerText=`- ${numLi}`;
    numtodo.classList.add("numTodo");
    li.appendChild(numtodo);
     
}