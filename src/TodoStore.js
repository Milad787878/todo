import {observable, computed, action, get} from "mobx";


class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}
class TodoStore {
    @observable todos = [];
    @observable completes = this.todos.filter(todo => todo.complete === true);
    @observable lefts = this.todos.filter(todo => todo.complete === false);
    @observable flag = 0;


    @action creatTodo(value) {
        this.todos.push(new Todo(value));
        this.lefts.push(new Todo(value))
    }
    @action clearCompleted = () => {
        this.completes = [];
        this.todos = this.todos.filter(todo => todo.complete === false);
        this.flag = 0;
        this.lefts = this.todos.filter(todo => todo.complete === false);

    };
    @action showAll = () => {
        this.flag = 0;
        this.lefts = this.todos.filter(todo => todo.complete === false);

    };
    @action complete = () => {
        this.completes = this.todos.filter(todo => todo.complete === true);
        this.flag = 1;
        this.lefts = this.todos.filter(todo => todo.complete === false);

    };
    @action showLefts = () => {
        this.lefts = this.todos.filter(todo => todo.complete === false);
        this.flag = -1;
    }






}


let store = new TodoStore();
export default store