import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../componenets/navbar/navbar';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink, Navbar],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss',
})
export class AboutUs {
  phoneDisplay = '346 971-4616';
  phoneHref = 'tel:3469714616';
}
