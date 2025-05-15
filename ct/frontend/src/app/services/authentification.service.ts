import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
interface Token { token: string, userid: number }

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

private server = 'http://localhost:8082'
private _token?: string = undefined
  private _email?: string = undefined
  private _userid?: number = undefined
  private _error = false


  public reset_error() { this._error = false }

  public get error() { return this._error }

  public get isAuthentified(): boolean {
    return this._token !== undefined
  }

  public get token(): string {
    return this._token ? this._token : ''
  }

  public get email(): string {
    return this._email ? this._email : ''
  }

  public get userid(): number {
    return this._userid ? this._userid : NaN
  }

  constructor(private http: HttpClient, private router: Router) { }

  public login(email: string, password: string): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/ld+json' });
    this.http.post<Token>(this.server + '/auth', { email, password }, { headers })
      .subscribe({
        next: (response: Token) => {
          if (response) {
            this._token = response['token'];
            this._userid = response['userid'];
            this._email = email;
            localStorage.setItem('token', this._token); 
            this.router.navigate(['/animals']);
          } else {
            this._error = true;
          }
        },
        error: () => { this._error = true; }
      });
  }
  
  public logout(): void {
    this._token = undefined;
    this._email = undefined;
    this._userid = undefined;
    this._error = false;
    localStorage.removeItem('token'); // Supprime le token stocké
    this.router.navigate(['/login']); // Redirige vers la page de connexion
  }

  public register(email: string, password: string, firstname: string = 'Default', lastname: string = 'User',role: string = 'Role_USER'): void {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    const payload = { 
      email, 
      password, 
      firstname,  
      lastname,   
      roles: [role] 
    };
    
    console.log('Données envoyées:', payload);
    
    this.http.post(this.server + '/register', payload, { headers })
      .subscribe({
        next: (response: any) => {
          console.log('Réponse réussie:', response);
          if (response) {
            this.router.navigate(['/login']);
          } else {
            this._error = true;
          }
        },
        error: (error) => { 
          console.error('Erreur d\'inscription:', error);
          if (error.error) {
            console.error('Détails de l\'erreur:', error.error);
          }
          this._error = true; 
        }
      });
  }
}