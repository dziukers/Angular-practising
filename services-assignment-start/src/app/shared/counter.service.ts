import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CounterService {
    counter: number = 0;
    count() {
        this.counter++;
    }
}