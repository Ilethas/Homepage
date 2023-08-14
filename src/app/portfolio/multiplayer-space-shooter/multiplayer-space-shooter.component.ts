import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-multiplayer-space-shooter',
  standalone: true,
    imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './multiplayer-space-shooter.component.html',
  styleUrls: ['./multiplayer-space-shooter.component.scss']
})
export class MultiplayerSpaceShooterComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "Multiplayer Space Shooter",
      description: ""
    });
  }
}
