import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
  PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-starcraft-2-protoss-bot',
  standalone: true,
  imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './starcraft-2-protoss-bot.component.html',
  styleUrls: ['./starcraft-2-protoss-bot.component.scss']
})
export class StarCraft2ProtossBotComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "StarCraft II Protoss Bot",
      description: ""
    });
  }
}
