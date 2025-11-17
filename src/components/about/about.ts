import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly values = [
    {
      title: 'Craft over everything',
      copy: 'Precision and focus on the details translate into lovable products and resilient platforms.',
    },
    {
      title: 'Partner, not vendor',
      copy: 'Tekronyx pods embed with your leaders, co-owning the roadmap and KPIs.',
    },
    {
      title: 'Measure the magic',
      copy: 'Every launch is tied to measurable signals: faster releases, less toil, happier customers.',
    },
  ];

  protected readonly milestones = [
    { year: '2018', detail: 'Tekronyx launches as a distributed product studio.' },
    { year: '2020', detail: 'Scaled automation practice serving fintech and mobility scale-ups.' },
    { year: '2022', detail: 'Built first AI copilots powering large research organisations.' },
    { year: '2024', detail: 'Global pods across MENA & Europe delivering 24/7 coverage.' },
  ];

  protected readonly leaders = [
    { name: 'Nour Satti', role: 'Product Strategy', blurb: 'Guides venture-backed teams to high-leverage roadmaps.' },
    { name: 'Karim Wahid', role: 'Engineering', blurb: 'Cloud-native architect obsessed with observability.' },
    { name: 'Laila Mostafa', role: 'Design', blurb: 'Builds intuitive systems marrying data + storytelling.' },
  ];
}
