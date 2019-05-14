import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 @Output() changedRoute = new EventEmitter<string>();

 onSelect(route: string) {
   this.changedRoute.emit(route);
 }
}
