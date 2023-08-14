import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {PortfolioDataService} from "../../../model/portfolio-data.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map} from "rxjs/operators";
import {mod} from "../../../../math";

@Component({
  selector: 'app-previous-next-navigation',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './previous-next-navigation.component.html',
  styleUrls: ['./previous-next-navigation.component.scss']
})
export class PreviousNextNavigationComponent {
  constructor(private portfolioData: PortfolioDataService, private route: ActivatedRoute) {
  }

  getRelativePortfolioItemUrl(distance: number) {
    return this.route.data.pipe(
      map(data => {
        if (typeof data["portfolioItemId"] == "number") {
          const index = this.portfolioData.portfolioItems.findIndex(value => value.id === data["portfolioItemId"]);
          if (index === -1) return null;

          const newIndex = mod(index + distance, this.portfolioData.portfolioItems.length);
          return this.portfolioData.portfolioItems[newIndex].url;
        }
        return null;
      })
    );
  }
}
