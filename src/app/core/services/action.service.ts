import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  redirectTo(url?: string) {
    if (url)
      window.open(url, 'blank');
  }
}
