import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements OnInit, AfterViewInit {
  
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
      title: 'Engagement Platforms',
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

  // For future animations - safely handle SSR
  isBrowser: boolean;
  animationInProgress = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // No DOM operations here - SSR safe
  }

  ngAfterViewInit(): void {
    // Only run animations on client side
    if (this.isBrowser) {
      this.safeInitializeAnimations();
    }
  }

  /**
   * Safe animation initialization that only runs on browser
   * This handles SSR gracefully
   */
  private safeInitializeAnimations(): void {
    if (!this.isBrowser || this.animationInProgress) {
      return;
    }

    this.animationInProgress = true;
    
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      try {
        // Since we're using CSS-only animations now, we don't need to add classes
        // But we can add a visual cue that animations are ready
        const serviceCategories = document.querySelectorAll('.service-category');
        
        // Add a small visual feedback for client-side rendering
        serviceCategories.forEach((category, index) => {
          setTimeout(() => {
            category.classList.add('loaded');
          }, index * 100);
        });
        
      } catch (error) {
        console.warn('Animation initialization failed:', error);
        // Fallback: Ensure everything is visible
        this.ensureVisibilityFallback();
      }
    }, 100);
  }

  /**
   * Fallback method to ensure visibility if animations fail
   */
  private ensureVisibilityFallback(): void {
    if (!this.isBrowser) return;
    
    try {
      // Add a class that forces visibility
      const elements = document.querySelectorAll('.service-category, .service-card, .infrastructure-card');
      elements.forEach(el => {
        el.classList.add('visible');
      });
    } catch (error) {
      console.warn('Fallback visibility failed:', error);
    }
  }

  /**
   * TrackBy function for ngFor optimization
   */
  trackByService(index: number, item: Service): string {
    return `${item.title}-${index}`;
  }

  /**
   * Utility method for debugging - SSR safe
   */
  getServiceCounts(): { ai: number, infrastructure: number } {
    return {
      ai: this.aiApplications.length,
      infrastructure: this.digitalInfrastructure.length
    };
  }

  /**
   * Check if component is running on server
   * Useful for conditional rendering
   */
  isServer(): boolean {
    return !this.isBrowser;
  }
}