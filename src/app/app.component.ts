import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName: string;
  email: string;
  secret: string;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(f:NgForm){
    console.log('Submnitted',f)
  }
}
