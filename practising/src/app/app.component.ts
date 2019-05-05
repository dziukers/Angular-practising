import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'practising';
  showPassword : boolean = false;
  buttonClicks= [];
  clicks:number = 0;

  togglePassword() {
    this.clicks++;
    this.showPassword = !this.showPassword;
    this.buttonClicks.push(this.clicks)
  }

  getColor() {
    
    return this.clicks > 5 ? 'blue' : 'white';
  }
}
