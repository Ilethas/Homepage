import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortfolioDataService} from "../../model/portfolio-data.service";
import {
    PreviousNextNavigationComponent
} from "../../utility/components/previous-next-navigation/previous-next-navigation.component";

@Component({
  selector: 'app-opengl-tutorial',
  standalone: true,
    imports: [CommonModule, PreviousNextNavigationComponent],
  templateUrl: './opengl-tutorial.component.html',
  styleUrls: ['./opengl-tutorial.component.scss']
})
export class OpenGLTutorialComponent implements OnInit {
  constructor(private portfolioData: PortfolioDataService) {
  }

  ngOnInit(): void {
    this.portfolioData.titlebarContent$.next({
      title: "OpenGL Tutorial",
      description: ""
    });
  }
}
