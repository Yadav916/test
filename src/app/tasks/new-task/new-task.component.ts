import { Component, EventEmitter, inject, Input, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService = inject(TasksService)

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.tasksService.addTask({ title: this.enteredTitle,
       summary: this.enteredSummary,
        date: this.enteredDate }, this.userId)
  }

}
