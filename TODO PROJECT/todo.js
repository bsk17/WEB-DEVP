let input = prompt('What would you like to do ?');
const todos = ['Complete Javascript', 'play farcry', 'play fifa'];

function show() {
            for (let i = 0; i < todos.length; i++) {
                        console.log(`${i} : ${todos[i]}`);
            }
}
while (input !== 'quit') {

            // condition for list
            if (input === 'list') {
                        console.log('**********');
                        // for (let i = 0; i < todos.length; i++) {
                        //             console.log(`${i} : ${todos[i]}`);
                        // }
                        show();
                        console.log('**********');
            }
            else if (input === 'new') {
                        const newTodo = prompt('Ok, what would you like to add in the todo ?');
                        // add to the end of the array
                        todos.push(newTodo);
                        console.log(`${newTodo} has been added to the list !!!`)
                        console.log('Your new todo list is - ');
                        show();
            }
            else if (input === 'delete') {
                        show();
                        const index = parseInt(prompt('Enter the index of the todo you want to remove !!!'));
                        // start from index and delete one item basically remove only the item at index
                        if (!Number.isNaN(index)) {
                                    const deleted = todos.splice(index, 1);
                                    console.log(`Removed "${deleted}" from the list !!!`);
                                    show();
                        } else {
                                    console.log('Unknown index ');
                        }
            }
            input = prompt('What would you like to do ?');
}

console.log('YOU QUIT THE APP !!!')