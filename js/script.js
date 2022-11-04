let todos = [];
const todosNode = document.querySelector('.items');
const input = document.querySelector('.input-todo');
const btn = document.querySelector('.button-todo');


function addTodo(text) {
   const todo = {
      text,
      done: false,
      id: `${Math.random()}`
   };

   todos.push(todo);
};

function deleteTodo(id) {
   todos.forEach(todo => {
      if (todo.id === id) {
         todo.done = true;
      }
   })
}

function render() {
   let html = '';

   todos.forEach(todo => {
      if (todo.done) {
         return;
      }
      html += `
      <li class='item'>
         ${todo.text}
         <button data-id = '${todo.id}'>Сделано</button> 
       </li>
      `;
   })
   todosNode.innerHTML = html;
};

btn.addEventListener('click', () => {
   const text = input.value;
   addTodo(text);
   /*
   function clearText() {
      if (input.placeholder === 'Введи новое действие') return;
      if (input === text) {
         input = ' ';
      }
   }
   */
   //clearText()
   render();
})
todosNode.addEventListener('click', (event) => {
   if (event.target.tagName != 'BUTTON') return;
   const id = event.target.dataset.id;
   deleteTodo(id);
   render();
})


//**Удаление плэйсхолдера при вводе задачи clearText*/



