import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../componenets/navbar/navbar';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, Navbar],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  companyName = 'HD Elite Transportation LLC';
  phoneDisplay = '346 971-4616';
  phoneHref = 'tel:3469714616';
}
