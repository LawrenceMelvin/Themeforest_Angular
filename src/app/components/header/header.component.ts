import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone:true,
  imports: [
    RouterModule // ✅ Import RouterModule for `routerLink`
  ]
})
export class HeaderComponent {
  menuItems = [
    { path: '/', icon: 'fa-home', title: 'Home', exact: true },
    { path: '/about', icon: 'fa-user', title: 'About' },
    { path: '/portfolio', icon: 'fa-briefcase', title: 'Portfolio' },
    { path: '/contact', icon: 'fa-envelope-open', title: 'Contact' },
    { path: '/blog', icon: 'fa-comments', title: 'Blog' }
  ];
}
