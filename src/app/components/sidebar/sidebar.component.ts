import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() homeClicked = new EventEmitter<void>();
  @Output() bancosClicked = new EventEmitter<void>();

  constructor(private router: Router) {}

  emitirHomeClicked() {
    this.homeClicked.emit();
  }

  emitirBancosClicked() {
    this.bancosClicked.emit();
  }

  logoff() {
    this.router.navigate(['/login']);
  }
}