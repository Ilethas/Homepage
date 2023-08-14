import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";
import {PortfolioDataService} from "../../model/portfolio-data.service";

@Component({
  selector: 'app-bubbles',
  standalone: true,
  imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss']
})
export class BubblesComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Bubbles",
      description: ""
    });
  }
}
