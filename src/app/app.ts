import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Add it to the imports array
  imports: [TaskListComponent],
  // 3. Notice these match your screenshot exactly
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'duty-roster';
}
