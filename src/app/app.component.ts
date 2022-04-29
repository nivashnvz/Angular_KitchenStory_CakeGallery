import { Component } from '@angular/core';
import { NivashService } from './nivash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private nvz:NivashService){

  }
}
