import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contacts = [
    { label: 'Email', value: 'hello@tekronyx.com', action: 'Drop a note' },
    { label: 'Phone', value: '+20 127 555 9012', action: 'Call the studio' },
    { label: 'Locations', value: 'Cairo · Dubai · Remote', action: 'Book an in-person' },
  ];

  protected readonly slots = ['Product Strategy', 'Experience Design', 'Engineering Pod', 'AI Discovery'];
}
