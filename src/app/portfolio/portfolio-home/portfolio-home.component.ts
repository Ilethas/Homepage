import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {
  constructor(public portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Portfolio",
      description: "A collection of personal projects I made throughout my journey as a programmer."
    });
  }
}
