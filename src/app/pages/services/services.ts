import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../componenets/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Navbar, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  phoneDisplay = '346 971-4616';
  phoneHref = 'tel:3469714616';

  services = [
    {
      title: '24/7 Support',
      tag: 'ALWAYS ON',
      desc: 'Day or night, we stay available to coordinate, update, and keep things moving without delays.',
    },
    {
      title: 'Accounting',
      tag: 'CLEAR & ORGANIZED',
      desc: 'We help keep the paperwork and numbers clean — so you can focus on driving and delivering.',
    },
    {
      title: 'High-Price Loads',
      tag: 'BETTER OPPORTUNITIES',
      desc: 'We aim to connect drivers and clients with strong-paying loads and dependable lanes.',
    },
    {
      title: 'Latest Devices',
      tag: 'MODERN TOOLS',
      desc: 'We work with up-to-date tech and devices to help communication, tracking, and coordination stay smooth.',
    },
    {
      title: 'Enrolled Permits',
      tag: 'COMPLIANT',
      desc: 'Support with permits when needed — helping operations stay aligned with route and load requirements.',
    },
  ];
}
