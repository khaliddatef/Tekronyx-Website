import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly metrics = [
    { label: 'Products deployed', value: '120+' },
    { label: 'Automation hours saved', value: '48k' },
    { label: 'Active partners', value: '32' },
  ];

  protected readonly capabilities = [
    {
      title: 'Intelligent Platforms',
      description: 'Modular cloud-native platforms that connect product, data and operations.',
      tag: 'Platforms'
    },
    {
      title: 'AI & Automation',
      description: 'LLM-powered copilots, data pipelines and predictive intelligence tuned to your business.',
      tag: 'AI'
    },
    {
      title: 'Experience Design',
      description: 'Interactive prototypes, motion systems and design languages infused with purpose.',
      tag: 'Design'
    },
    {
      title: 'Innovation Pods',
      description: 'Dedicated cross-functional pods that move from discovery to launch in weeks.',
      tag: 'Pods'
    },
  ];

  protected readonly process = [
    {
      title: 'Discover & Align',
      detail: 'Immersive workshops surface opportunities and rapidly align leadership on the right bets.'
    },
    {
      title: 'Architect & Prototype',
      detail: 'Systems, journeys and prototypes shaped together with stakeholders & pilot users.'
    },
    {
      title: 'Engineer & Launch',
      detail: 'Robust engineering, observability-first deployments and measurable launches in market.'
    }
  ];

  protected readonly caseStudies = [
    {
      client: 'Nordic Mobility',
      headline: 'Orchestrated a multimodal fleet brain',
      detail: 'Unified operations, predictive maintenance and dispatch UI that cut downtime by 37%.'
    },
    {
      client: 'Citrine Labs',
      headline: 'AI copilots inside complex research flows',
      detail: 'Bespoke LLM agents accelerated documentation and lab analysis across 18 teams.'
    },
    {
      client: 'Venturo Bank',
      headline: 'Conversational wealth desk',
      detail: 'Human + AI service desk with explainable models exceeded CSAT targets in 6 weeks.'
    }
  ];

  protected readonly partners = ['Siemens', 'Citrine', 'Venturo', 'Nordic', 'PulseGrid'];
}
