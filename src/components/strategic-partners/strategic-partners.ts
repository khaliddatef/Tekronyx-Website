import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-strategic-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strategic-partners.html',
  styleUrls: ['./strategic-partners.css']
})
export class StrategicPartnersComponent implements OnInit {
  
  // For mobile responsiveness
  isBrowser: boolean;
  
  // Partner data - matching home design system colors
  partners = [
    {
      id: 'huawei',
      name: 'Huawei',
      description: 'Trusted partner in advanced software development and enterprise digital solutions.',
      tags: ['Software Development', 'Digital Solutions', 'Enterprise Tech'],
      color: '#0c0c0c' // Pure black
    },
    {
      id: 'kalam',
      name: 'K Telecom Egypt',
      description: 'Our international bandwidth provider ensuring strong global connectivity.',
      tags: ['Global Connectivity', 'Bandwidth', 'Network Infrastructure'],
      color: '#333333' // Dark gray
    },
    {
      id: 'vodafone',
      name: 'Vodafone Egypt',
      description: 'Supports our solutions with high-performance telecom and data infrastructure.',
      tags: ['Telecom Infrastructure', 'Data Networks', 'High-Performance'],
      color: '#666666' // Medium gray
    },
    {
      id: 'etisalat',
      name: 'Etisalat Egypt',
      description: 'Delivers robust data networks and connectivity powering our digital ecosystem.',
      tags: ['Data Networks', 'Digital Ecosystem', 'Connectivity'],
      color: '#999999' // Light gray
    }
  ];

  // Partnership stats
  partnershipStats = [
    {
      number: '4+',
      label: 'Strategic Partners'
    },
    {
      number: 'Global',
      label: 'Connectivity Reach'
    },
    {
      number: '24/7',
      label: 'Support Infrastructure'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // Only run browser-specific code on client side
    if (this.isBrowser) {
      this.initializeAnimations();
    }
  }

  private initializeAnimations(): void {
    // Animation handled by CSS
    // This ensures component works on both server and client
  }

  // Helper methods
  getPartnerById(id: string): any {
    return this.partners.find(partner => partner.id === id);
  }

  // Get color for partner card (for future use)
  getPartnerColor(index: number): string {
    const colors = ['#0c0c0c', '#333333', '#666666', '#999999'];
    return colors[index] || colors[0];
  }
}