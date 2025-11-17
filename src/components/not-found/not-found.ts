import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  protected readonly suggestions = [
    { label: 'About Tekronyx', path: '/about' },
    { label: 'What we build', path: '/services' },
    { label: 'Start a project', path: '/contact' },
  ];
}
