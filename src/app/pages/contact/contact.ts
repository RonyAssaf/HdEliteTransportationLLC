import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../componenets/navbar/navbar';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, Navbar],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  phoneDisplay = '346 971-4616';
  phoneHref = 'tel:3469714616';

  onSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Front-end only — later you can connect to EmailJS/Formspree/Resend.
    console.log('Contact form submitted:', Object.fromEntries(data.entries()));

    form.reset();
    alert('Thanks! We received your message.');
  }
}
