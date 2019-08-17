import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  statusOptions=['stable', 'critical', 'finished'];
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames], this.asyncForbiddenNames),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    })
  }

  forbiddenNames(control: FormControl): {[s:string]: boolean} {
    if(control.value === 'test') {
      return {'isNameForbidden': true}
    }
    return;
  }
  asyncForbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'testproject') {
          resolve({'isNameForbidden': true});
        } else {
          reject(null);
        }
      }, 1500);
    })
    return promise;
  }

  onSubmit() {
      console.log(this.form);
    
    
    
  }
}
