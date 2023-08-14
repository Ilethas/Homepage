import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
  PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-rpg-inventory-system',
  standalone: true,
  imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './rpg-inventory-system.component.html',
  styleUrls: ['./rpg-inventory-system.component.scss']
})
export class RPGInventorySystemComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "RPG Inventory System (Unreal Engine)",
      description: ""
    });
  }
}
