import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      //data goes here
      taskList: [
          "Wash Car", "Do Homework", "Walk Dog"
        ],
      newTask: ""
    },

    methods: {
      //methods go here
      addNewTask: function(){
        this.taskList.push(this.newTask);
        this.newTask = "";
      },
      clearTasks: function(){
          this.taskList = []
      }
    }
  });
});
