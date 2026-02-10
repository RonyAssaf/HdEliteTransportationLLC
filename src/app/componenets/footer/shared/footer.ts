import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {
  companyName = 'HD Elite Transportation LLC';
  phoneDisplay = '346 971-4616';
  phoneHref = 'tel:3469714616';

  // optional later
  email = 'contact@hdelitetransportation.com'; // 'info@...'
  locationLabel = 'United States (Location TBD)';
}
