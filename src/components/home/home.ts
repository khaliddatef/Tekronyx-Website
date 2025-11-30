import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {

  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  // Core pillars data
  pillars = [
    {
      title: 'AI-Native Applications',
      items: [
        'Citizen & Community Engagement Platforms',
        'AI-Powered Crime Prevention & Prediction',
        'Intelligent Decision Dashboards',
        'Predictive Risk & Incident Management'
      ],
      icon: '🤖'
    },
    {
      title: 'Digital Infrastructure',
      items: [
        'Hyperscale & Sovereign Data Centres',
        'National Digital Sovereignty Network',
        'Foreign Direct Investment in ICT',
        'High-Speed Fiber & Cloud Backbone'
      ],
      icon: '🏗️'
    }
  ];

  // Key projects data
  projects = [
    {
      title: 'MOI AI-Powered Public Security Platform',
      description: 'Predictive policing, real-time dashboards, secure data archiving, citizen engagement apps',
      impact: 'Faster safety operations, data sovereignty, nationwide optimization',
      image: './assets/images/futuristic-technology-concept.jpg'
    },
    {
      title: 'Digital Sovereignty Network',
      description: 'Nationwide secure connectivity system with AI-native dashboards & analytics',
      impact: 'Enhanced security, reduced foreign hosting dependency',
      image: './assets/images/octtttt_6.jpg'
    }
  ];

  // Competitive advantages
  advantages = [
    {
      title: 'AI-Native Solutions',
      description: 'End-to-end AI integration from ground up',
      icon: '⚡'
    },
    {
      title: 'Full Stack Expertise',
      description: 'Applications + Infrastructure combined excellence',
      icon: '🔧'
    },
    {
      title: 'Local & Global',
      description: 'Local presence with international partnerships',
      icon: '🌍'
    },
    {
      title: 'Trusted Partner',
      description: 'Preferred by ministries & telecom operators',
      icon: '🤝'
    }
  ];

  // ===== NEW CODE FOR AUTO-PLAY VIDEO FIX =====
  ngAfterViewInit(): void {
    const video = this.bgVideo?.nativeElement;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        setTimeout(tryPlay, 500); // retry if blocked
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('loadeddata', () => {
        tryPlay();
      });
    }
  }
}
