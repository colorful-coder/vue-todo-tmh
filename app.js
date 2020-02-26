new Vue({
    el: '#app',
    data: {
        title: 'Todo List',
        tasks: [
            {id: 1, name: 'Learn JS', done: false, editMode: false},
            {id: 2, name: 'Learn Vue', done: true, editMode: false},
            {id: 3, name: 'Learn React', done: false, editMode: false},
        ],
        newTask: '',
        id: 4,
        taskNameCache: '',
        filter: 'all'
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    computed: {
        remaining() {
            return this.tasks.filter(task => !task.done).length
        },
        taskFiltered() {
            if(this.filter === 'active') {
                return this.tasks.filter(task => !task.done)
            }
            if (this.filter === 'completed') {
                return this.tasks.filter(task => task.done)
            }
            return this.tasks;
        }
    },
    methods: {
        addTask() {
            if(!this.newTask.trim()) {
                return
            }
            this.tasks.push({
                id: this.id,
                name: this.newTask,
                done: false, 
                editMode: false
            })
            this.id++;
            this.newTask = '';
        },
        editTask(task) {
            this.taskNameCache = task.name;
            task.editMode = true;
        },
        doneEditTask(task) {
            if (!task.name.trim()) {
                task.name = this.taskNameCache;
            }
            task.editMode = false;
        },
        cancelEditTask(task) {
            task.name = this.taskNameCache;
            task.editMode = false
        },
        deleteTask(task) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        },
        clearDoneTask() {
            this.tasks = this.tasks.filter(task => !task.done);
        }
    }
})