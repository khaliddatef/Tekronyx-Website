import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly offerings = [
    {
      title: 'Strategy & Discovery',
      description: 'Vision sprints, capability mapping, opportunity prioritisation and product roadmap definition.',
      items: ['CX / Service blueprints', 'Data readiness audit', 'North star prototypes']
    },
    {
      title: 'Design & Experience',
      description: 'Design systems, interactions, motion and narrative design bridging physical + digital worlds.',
      items: ['Product & brand systems', 'Prototyping & testing', 'Content & storytelling']
    },
    {
      title: 'Engineering',
      description: 'Full-stack squads delivering secure, observable and scalable platforms.',
      items: ['Cloud-native backends', 'Web & mobile apps', 'DevOps & SRE']
    },
    {
      title: 'AI & Automation',
      description: 'LLM integration, workflow automation and human-in-the-loop interfaces.',
      items: ['Copilots & agents', 'Data pipelines', 'Intelligent automation']
    },
  ];

  protected readonly stacks = [
    'Angular', 'Next.js', 'Node.js', 'Python', 'LangChain', 'AWS', 'GCP', 'Figma'
  ];
}
