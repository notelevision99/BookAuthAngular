  import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from './model/UserModel';
import { AuthenticateService } from './services/authenticate.service';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {
    currentUser : UserModel;
    constructor(private router: Router,
      private authenticateService : AuthenticateService
    ) {
      this.authenticateService.currentUser.subscribe((user : UserModel) => {this.currentUser = user}
      );
    }
    

    title = 'BookStore';
  }
