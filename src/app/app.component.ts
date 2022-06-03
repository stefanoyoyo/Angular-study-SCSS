import { Component, VERSION } from '@angular/core';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  public squares: string[] = [
    'grey',
    'red',
    'green',
    'blue'
  ];
}
