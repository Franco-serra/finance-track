import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  
  constructor(private authService: Auth) {}

  onSubmit() {
    this.isLoading = true;
    this.authService.login(this.email, this.password);
  }
}
