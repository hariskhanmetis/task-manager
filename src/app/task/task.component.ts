import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: {
    name: string;
    completed: boolean;
  }[]=[];

  addTask(taskInput: HTMLInputElement) {
    if(taskInput.value.trim()) {
      this.tasks.push({ name: taskInput.value, completed: false });
      taskInput.value = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toogleTask(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
