import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      //data goes here
      taskList: [
        { description: "Wash Car", priority: 1},
        { description: "Do Homework", priority: 2},
        { description: "Walk Dog", priority: 3}
        ],
      description: "",
      priority: 5
    },

    methods: {
      //methods go here
      addNewTask: function(){
        this.taskList.push({description: this.description, priority: this.priority});
        this.description = "";
      },
      clearTasks: function(){
          this.taskList = []
      }
    }
  });
});
