import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../utility/components/previous-next-navigation/previous-next-navigation.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PreviousNextNavigationComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "About",
      description: ""
    });
  }
}
