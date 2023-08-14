import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-arkanoid',
  standalone: true,
    imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './arkanoid.component.html',
  styleUrls: ['./arkanoid.component.scss']
})
export class ArkanoidComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Arkanoid",
      description: ""
    });
  }
}
