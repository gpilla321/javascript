
//prototypes
//the idea is to create a TaskList and a person class
//the person can inherit the task list to add task to the person
function TaskList(taskList) {
    this.taskList = taskList || [];
    this.AddTask = function(task) {  return this.taskList.push(task); }
    this.AddTaskList = function(tasks) {  return this.taskList = [...this.taskList, tasks]; }
}

function Person(name, age, tasks) {
    TaskList.call(this, tasks);
    this.name = name;
    this.age = age;
}

const taskList = new TaskList();

taskList.AddTask('Create a new feature');
taskList.AddTask('Learn something new');
taskList.AddTask('Read a good book')

const person = new Person('Joe', 31, ['Wake up', 'Call to friends']);

console.log(taskList);
console.log(person)

person.AddTask('new task');
person.AddTaskList(['Task 1', 'Task 2', 'Task 3'])

console.log('after adding task list')
console.log(person)