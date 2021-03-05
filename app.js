//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todolist = document.querySelector('.todo-list');
const filteritem = document.querySelector('.filter-todo');
//Event Listner
todoButton.addEventListener("click",addTodo);
todolist.addEventListener("click",checkdelete);
filteritem.addEventListener("click",filteritems);
//Functions
function addTodo(event){
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"><i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class= "fas fa-trash"><i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append To list
    todolist.appendChild(todoDiv);
    //todoInput Value
    todoInput.value = '';

}


function checkdelete(e){
    const item = e.target;
    //Delete Button
    if (item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transition',function(){
            todo.remove();
        });
        
    }

    //Check Button
    if (item.classList[0] ==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

}


function filteritems(e){
     const todos = todolist.childNodes;
     todos.forEach(function(todo){
         switch(e.target.value){
            case "all":
                 todo.style.display = 'flex';
                 break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            
         }
     });
}