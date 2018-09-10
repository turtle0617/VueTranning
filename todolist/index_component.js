Vue.component('add-component', {
  data: function () {
      return {
        newTask:''
      }
  },
  template: `
  <div>
    <input type="text" class="new-task" v-model.trim="newTask" v-on:keyup.enter='addTask'>
    <button class="create" v-on:click='addTask'>create</button>
  </div>
  `,
  methods: {
    addTask: function() {
      if (this.newTask.length === 0) {
        alert("請勿輸入空白");
        return
      }
      this.$emit('give-task',this.newTask)
      this.newTask = ""

    }
  }
});
Vue.component('show-component',{
  props:['task','tasks'],
  template:
  `
  <li>
    <label v-if="!task.isEdit" v-bind:class="{ complete: task.isComplete }" v-on:click="complete(task)"> {{task.title}}</label>
    <input v-if="task.isEdit" type="text" v-model="task.title" v-on:keyup.enter="changeStatus(task)">
    <button v-if="!task.isEdit" class="modifyTask" v-on:click="changeStatus(task)">修改</button>
    <i v-if="!task.isEdit" class="fas fa-times deleteTask" v-on:click="deleteTask(tasks,task)"></i>
  </li>
  `,
  methods:{
    complete:function (task) {
      task.isComplete = !task.isComplete;

    },
    changeStatus:function (task) {
      task.isEdit = !task.isEdit;

    },
    deleteTask:function (tasks,task) {
      tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
})
new Vue({
  el: '.todoapp',
  data: {
    tasks: [],
  },
  methods: {
    receiveTask: function(task) {
      // console.log(task);
      this.tasks.push({
        id: this.tasks.length,
        title: task,
        isEdit: false,
        isComplete: false
      })
    }
  }
});
