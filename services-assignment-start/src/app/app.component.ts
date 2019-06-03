import { Component, OnInit, Injectable } from '@angular/core';
import { CounterService } from './shared/counter.service';
import { UsersService } from './shared/users.service';
@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent implements OnInit {
  counter: number;

  constructor(public counterService: CounterService, public usersService: UsersService) {}

  ngOnInit() {
    this.usersService.counterChange.subscribe(
      (counter) => this.counter = counter
    )
  }

}
