import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  services = [
    {
      icon: 'fas fa-brain',
      image: '🤖',
      title: 'Intelligent AI Platforms',
      description: 'Advanced artificial intelligence systems designed for national-scale operations and decision-making.'
    },
    {
      icon: 'fas fa-chart-network',
      image: '📊',
      title: 'Real-time Analytics Systems',
      description: 'Live decision support platforms for government and enterprise operations with instant insights.'
    },
    {
      icon: 'fas fa-shield-check',
      image: '🛡️',
      title: 'Secure Sovereign Infrastructure',
      description: 'Data and network infrastructure ensuring national security and digital independence.'
    }
  ];
}