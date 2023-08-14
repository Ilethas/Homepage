import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-platformer',
  standalone: true,
    imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './platformer.component.html',
  styleUrls: ['./platformer.component.scss']
})
export class PlatformerComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Platformer (Unity)",
      description: ""
    });
  }
}
