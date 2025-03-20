import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-ba',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './menu-ba.component.html',
  styleUrl: './menu-ba.component.scss'
})
export class MenuBaComponent {

  constructor(private readonly router: Router) { }

  navigateTo(path: string) {
    this.router.navigate([path])
  }
}
