import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainNavComponent} from "../main-nav/main-nav.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-page-with-navigation',
  standalone: true,
  imports: [CommonModule, MainNavComponent, RouterOutlet],
  templateUrl: './page-with-navigation.component.html',
  styleUrls: ['./page-with-navigation.component.scss']
})
export class PageWithNavigationComponent {

}
