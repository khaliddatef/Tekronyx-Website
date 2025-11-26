import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

interface Project {
  icon: string;
  title: string;
  modules?: string[];
  impact: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit {
  
  particles: number[] = Array(50).fill(0);
  
  aiApplications: Service[] = [
    {
      icon: '📊',
      title: 'AI-Powered Decision Dashboards',
      description: 'Real-time data and analytics that support decision-making across ministries and authorities.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Cross-ministry integration',
        'Customizable dashboards'
      ]
    },
    {
      icon: '🏛️',
      title: 'Smart Government Services',
      description: 'AI-driven apps and platforms that simplify access to permits, licenses, and public services.',
      features: [
        'Automated permit processing',
        'Intelligent license management',
        'Citizen service optimization',
        '24/7 virtual assistance'
      ]
    },
    {
      icon: '💬',
      title: 'Citizen Engagement Platforms',
      description: 'Feedback, participation, surveys, and communication channels between citizens and government.',
      features: [
        'Multi-channel engagement',
        'Sentiment analysis',
        'Automated response systems',
        'Community feedback loops'
      ]
    },
    {
      icon: '🔮',
      title: 'Predictive Policy & Planning',
      description: 'AI models that forecast national needs in health, infrastructure, energy, transport, and education.',
      features: [
        'Healthcare demand forecasting',
        'Infrastructure planning',
        'Energy consumption prediction',
        'Transportation optimization',
        'Educational resource allocation'
      ]
    },
    {
      icon: '🛡️',
      title: 'Risk & Resource Management',
      description: 'AI systems for crisis management and efficient allocation of national resources.',
      features: [
        'Real-time risk assessment',
        'Resource optimization algorithms',
        'Crisis prediction models',
        'Emergency response coordination'
      ]
    }
  ];

  digitalInfrastructure: Service[] = [
    {
      icon: '🏢',
      title: 'Hyperscale & Sovereign Data Centers',
      description: 'Hosting national systems inside Egypt with global partner collaboration.'
    },
    {
      icon: '🌐',
      title: 'National Digital Sovereignty Network',
      description: 'A secure backbone connecting ministries, agencies, HQs, and critical sites.'
    },
    {
      icon: '🤝',
      title: 'International Partnerships & FDI in ICT',
      description: 'Attracting foreign investment and international technology expertise.'
    },
    {
      icon: '⚡',
      title: 'Fiber & Cloud Backbone',
      description: 'Future-proof infrastructure delivering high-speed connectivity and cloud capabilities.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.initializeScrollAnimations();
  }

  private initializeScrollAnimations(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      setTimeout(() => {
        // FIXED: Added .section-header to the observed elements
        const elements = document.querySelectorAll('.section-header, .service-category, .service-card, .infrastructure-card');
        elements.forEach(el => observer.observe(el));
      }, 100);
    }
  }

  getAnimationDelay(index: number, baseDelay: number): string {
    return `${(index * 0.1) + baseDelay}s`;
  }

  trackByService(index: number, item: Service): string {
    return item.title + index;
  }
}