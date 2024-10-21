document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Por favor, adicione uma tarefa.');
        return;
    }

    // Criar nova tarefa (li)
    const li = document.createElement('li');

    // Checkbox de tarefa concluída
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
    });

    // Texto da tarefa
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Botão de excluir
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.classList.add('remove-task');
    removeBtn.addEventListener('click', function() {
        li.remove();
    });

    // Adiciona os elementos à tarefa (li)
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(removeBtn);

    // Adiciona a tarefa à lista (ul)
    document.getElementById('todo-list').appendChild(li);

    // Limpar o campo de entrada
    taskInput.value = '';
});
