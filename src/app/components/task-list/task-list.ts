import { Component, getDebugNode, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DutyService, Duty } from '../../services/duty';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskListComponent implements OnInit {
  private dutyService = inject(DutyService);
  duties: Duty[] = [];

  ngOnInit() {
    this.duties = this.dutyService.getDuties();
  }
}
