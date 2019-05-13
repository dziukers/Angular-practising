import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 intervalControl;
 actualNumber = 0;
 @Output() numberCreated = new EventEmitter<{actualNumber: number}>();
  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
   this.intervalControl = setInterval(() => {
      this.numberCreated.emit({
        actualNumber: this.actualNumber++
      });
    },1000);
  }
}
