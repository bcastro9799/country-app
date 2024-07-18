import { Component } from '@angular/core';
import { OptionSidebar } from '../../interfaces/options-sidebar.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  private _options: OptionSidebar[] = [
    // { pathRoute: '', name: 'Home' },
    // { pathRoute: 'about', name: 'About page' },
    // { pathRoute: 'contact', name: 'Contact page' },
    { pathRoute: 'countries/by-capital', name: 'Por capital' },
    { pathRoute: 'countries/by-country', name: 'Por pais' },
    { pathRoute: 'countries/by-region', name: 'Por region' },
  ];
  get options(): OptionSidebar[] {
    return [...this._options];
  }
}
