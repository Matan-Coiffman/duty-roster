import { Injectable } from '@angular/core';

export interface Duty {
  id: number;
  title: string;
  assignee: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DutyService {
  private dutiesList: Duty[] = [
    { id: 1, title: 'Main Gate Guard Duty', assignee: 'Cohen', completed: false },
    { id: 2, title: 'Kitchen Cleanup', assignee: 'Levi', completed: false },
    { id: 3, title: 'Dorm Inspection', assignee: 'Avraham', completed: true },
  ];
  getDuties(): Duty[] {
    return this.dutiesList;
  }
}
