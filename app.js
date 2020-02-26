new Vue({
    el: '#app',
    data: {
        title: 'Todo List',
        id: 4,
        tasks: [
            { id: 1, name: 'Learn HTML', done: false },
            { id: 2, name: 'Learn CSS', done: false },
            { id: 3, name: 'Learn JS', done: false }
        ],
        task: {
            id: '',
            name: '',
            done: false
        }
    }
});