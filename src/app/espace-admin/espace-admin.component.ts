import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espace-admin',
  standalone: true,
  imports: [],
  templateUrl: './espace-admin.component.html',
  styleUrl: './espace-admin.component.scss'
})
export class EspaceAdminComponent {
  constructor(private router: Router) { }

  parametrage() {
    this.router.navigateByUrl('/parametrage');
  }
  
  adduser() {
    this.router.navigateByUrl('/addUser');
  }

}
