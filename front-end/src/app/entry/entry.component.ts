import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// import * as EventEmitter from 'events';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input() exercises!: Exercise[];
  @Input() exerOpts!: string[];
  @Output() addExercise = new EventEmitter<Exercise>();
  @Output() setCurrExercise = new EventEmitter<Exercise>();
  @Output() deleteCurrExercise = new EventEmitter<Exercise>();
  @Output() submitEntry = new EventEmitter<Exercise>();
  @Output() deleteLastExercise = new EventEmitter<Exercise>();

  constructor() { 
    // this.exercises[0] = new Exercise();
    // console.log("here:", this.exercises);
  }
  selectedEx?: Exercise;
  onSelect(ex: Exercise): void {
    this.selectedEx = ex;
  }

  ngOnInit(): void {
    
  }

}
 