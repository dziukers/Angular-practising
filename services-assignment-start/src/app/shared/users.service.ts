import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    counterChange = new EventEmitter<number>();

constructor(private counterService: CounterService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.count();
        this.counterChange.emit(this.counterService.counter)
      }

      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.count();
        this.counterChange.emit(this.counterService.counter)
      }
}