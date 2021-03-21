let input = prompt('Input your command as seen on the webpage');
const todos = ['write my todos', 'Studying'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log("**********************")
        for (let i = 0; i < todos.length; i++) {
            console.log(+ i + ': ' + todos[i]);
        }
        console.log("**********************")
    } else if (input === 'new') {
        const newTodo = prompt('What is the new todo?');
        todos.push(newTodo)
        console.log(+ newTodo + ' added to the list')
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter index of todos to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log('Ok, Deleted ' + deleted[0])
        } else {
            console.log('unknown index')
        }
    }
    input = prompt('Input your command as seen on the webpage');
}
console.log('Ok Exiting!')