import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthenticationService } from './services/authentication.service';
=======
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GZA Rheinfelden';
  showFiller = false;
  events: string[] = [];
  opened: boolean;
  currentUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

=======
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
>>>>>>> aed10a091be6f1f07faacd509ef2f6a9c3cea105
