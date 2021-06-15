import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise Log';
  currExercise!: Exercise;
  exercises: Exercise[] = [];   // refers to exercises in an 'entry' instance
  exerOpts: string[] = ["pushup", "squat", "pullup", "bridge", "handstand"];   // exercises to choose from ( exerOpts.length >= exercises.length)


  constructor() {
    this.exercises[0] = new Exercise(0);
  }

  addExercise() {
    this.exercises[this.exercises.length] = new Exercise(this.exercises.length);
    console.log(this.exercises);
  }

  setCurrExercise(ex: Exercise): void {
    this.currExercise = ex;
    console.log(this.currExercise.name, this.currExercise.id);
  }

  deleteCurrExercise(): void {
    if (this.currExercise == null) return;
    
    for(let i=0; i<this.exercises.length; i++) {
      if (this.exercises[i].id == this.currExercise.id) {
        this.exercises.splice(i, 1);
      }
    }
  }

  checkEntry(): boolean {
    if (this.exercises.length == 0) {
      console.log("empty entry");
      return false;
    }

    let valid:boolean = true;
    this.exercises.forEach( (element) => {
      let s1 = element.sets[0];
      let s2 = element.sets[1];
      let s3 = element.sets[2];

      if (element.name == "") {
        console.log("Make sure exercise names are set.");
        valid = false;
      }

      if (s1 == null || s1 < 0 || s2 == null || s2 < 0  || s3 == null || s3 < 0) {
        console.log("Check set numbers are valid. Must be an int >= 0.");
        valid = false;
      }        
    });

    return valid;
  }

  submitEntry(): void {
    
    if ( this.checkEntry() ) {
      console.log("Valid entry! submitted! ->", this.exercises);
    }
    else {
      console.log("not submitted. check entry values. ");
      alert("Check entry validity.");
    }
    
  }

  deleteLastExercise(): void {
    if (this.exercises.length > 0) {
      this.exercises.splice(this.exercises.length - 1, 1);
    }
    
  }




}
