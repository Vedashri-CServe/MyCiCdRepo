import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RealTimeMenuService {
  sendMessage = new BehaviorSubject<any>(0);
  constructor() { }

  sendData(details) {
    this.sendMessage.next(details);
  }

  receiveData() {
    return this.sendMessage;
  }


}
