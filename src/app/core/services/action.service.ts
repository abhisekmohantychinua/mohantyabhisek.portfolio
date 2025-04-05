import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  redirectTo(url: string) {
    window.open(url, 'blank');
  }
}
