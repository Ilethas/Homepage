import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-small-arkanoid',
  standalone: true,
    imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './small-arkanoid.component.html',
  styleUrls: ['./small-arkanoid.component.scss']
})
export class SmallArkanoidComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Small Arkanoid (Unity)",
      description: ""
    });
  }
}
