let flag=false;
let numLi=0;
let liarr=[];
const todoInput = document.getElementById("todoInput");
const ulTag = document.getElementById("ulTag");
const amountUlTagFirst=ulTag.innerHTML;
const btnPlus=document.getElementById("btnPlus");
const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",function(){
    todoInput.value="";
    todoInput.focus();
    if(ulTag.innerHTML===amountUlTagFirst){
        const H3=document.createElement("h3");
        H3.innerHTML="لیست اهداف شما خالی است";
        H3.classList.add("message");
        ulTag.appendChild(H3);  
    }
})
btnPlus.addEventListener("click", creatTodoList);
todoInput.addEventListener("keyup", creatTodoList1);
ulTag.addEventListener("click", removeTodoList);
ulTag.addEventListener("click", checkCompletUncomplet);
filter.addEventListener("click",filterChoose);




function creatTodoList(){
    if(ulTag.children[0].classList[0]=="message"){
        const H3=document.querySelector(".message");
        H3.remove();
    }
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
    const numtodo = document.createElement("span");
    numtodo.classList.add("numTodo");
    li.appendChild(numtodo);
    liarr=document.querySelectorAll(".todoItem");
    for(let i=0;i<liarr.length;i++){
        const numTodo= document.querySelectorAll(".numTodo");
        const li= document.querySelectorAll(".todoItem");
        numTodo[i].innerHTML=`- ${i+1}`;
        li[i].id=`${i}`;
    }
    todoInput.value="";
    todoInput.focus();
}
function creatTodoList1(e){
    e.preventDefault();
    if(e.keyCode == 13){
        if(ulTag.children[0].classList[0]=="message"){
            const H3=document.querySelector(".message");
            H3.remove();
        }
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
        const numtodo = document.createElement("span");
        numtodo.classList.add("numTodo");
        li.appendChild(numtodo);
        liarr=document.querySelectorAll(".todoItem");
        for(let i=0;i<liarr.length;i++){
            const numTodo= document.querySelectorAll(".numTodo");
            const li= document.querySelectorAll(".todoItem");
            numTodo[i].innerHTML=`- ${i+1}`;
            li[i].id=`${i}`;
        }
        todoInput.value="";
        todoInput.focus();
    }

}

function removeTodoList(event){
    const tage =event.target;
        if(tage.classList[1]=="btn_delete"){
        tage.parentElement.remove();
        liarr=document.querySelectorAll(".todoItem");
        if(liarr.length==0){
                ulTag.innerHTML=amountUlTagFirst;
        }
        for(let i=0;i<liarr.length;i++){
            const numTodo= document.querySelectorAll(".numTodo");
            const li= document.querySelectorAll(".todoItem");
            numTodo[i].innerHTML=`- ${i+1}`;
            li[i].id=`${i}`;
        }
        todoInput.focus();
        if(ulTag.innerHTML===amountUlTagFirst){
            const H3=document.createElement("h3");
            H3.innerHTML="لیست اهداف شما خالی است"
            H3.classList.add("message");
            ulTag.appendChild(H3);
        }
    }
}
function checkCompletUncomplet(event){
    let numCompletedLi=0;
    let numUncompletedLi=0;
    const tag = event.target;
       if(tag.classList[1]==="btn_check"){
            const li= tag.parentElement;
            li.classList.toggle("complet");
            if(li.classList[1]==="complet"){
                tag.src="/Todolist/img/complet.svg";
            }else tag.src="/Todolist/img/check.svg";
            const allLi=document.querySelectorAll("li");
            for(let i=0;i<allLi.length;i++){
                if(allLi[i].classList[1]==="complet"){
                   numCompletedLi=1+numCompletedLi
                }
                if(allLi[i].classList[1]!="complet"){
                    numUncompletedLi=1+numUncompletedLi
                 }
            }
            
            
            if(allLi.length==numCompletedLi){
                const H3=document.createElement("h3");
                H3.innerHTML="خدا قوت پهلوان به تمام اهداف خود رسیدید";
                H3.classList.add("successMessage");
                ulTag.appendChild(H3);  
                flag=true;  
            }
            if(flag && numUncompletedLi>0){
                const H3 = document.querySelector(".successMessage");
                H3.remove();
                flag=false;
            }   
        }
        todoInput.focus();
    
}
function filterChoose(event){
    const allLi=document.querySelectorAll(".todoItem");
    allLi.forEach(function(todo){
        if(event.target.value=="all"){
            todo.style.display="flex"
        }
        if(event.target.value=="completed"){
            if(todo.classList[1]=="complet"){
                todo.style.display="flex";
            }else todo.style.display="none";

        }
        if(event.target.value=="uncompleted"){
            if(todo.classList[1]=="complet"){
                todo.style.display="none";
            }else todo.style.display="flex";

        }
    })
    
        
}

