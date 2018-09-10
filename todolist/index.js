new Vue({
  el: '.todoapp',
  data: {
    newTask: '',
    tasks: [],
  },
  methods: {
    addTask: function() {
      if (this.newTask.length === 0) {
        alert("請勿輸入空白");
        return
      }
      this.tasks.push({
        id: this.tasks.length,
        title: this.newTask,
        isEdit:false,
        isComplete: false
      })
      this.newTask = ""
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
    changeStatus: function(task) {
      task.isEdit = !task.isEdit;
    },
    complete: function(task) {
      task.isComplete = !task.isComplete;
    }
  }
});
