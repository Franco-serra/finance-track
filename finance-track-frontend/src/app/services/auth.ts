import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {
    
  }
  login(email: string, password: string) {
  const credentials = {
    email: email,
    password: password
  };
  const url = `${this.apiUrl}/auth/login`;
  this.http.post<any>(url, credentials).subscribe({
    next: (response) => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
    },
    error: (error) => {
      console.error('Login failed', error);
    }
  })
}

}
