import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent {
  duties = [
    { id: 1, title: 'Main Gate Guard Duty', assignee: 'Cohen', completed: false },
    { id: 2, title: 'Kitchen Cleanup', assignee: 'Levi', completed: false },
    { id: 3, title: 'Dorm Inspection', assignee: 'Avraham', completed: true },
  ];
}
