import {Component, ElementRef, HostListener, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {Observable, Subscription} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {CommonModule} from "@angular/common";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {PortfolioDataService} from "../model/portfolio-data.service";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MenuAutoCloseDirective} from "../utility/directives/menu-auto-close/menu-auto-close.directive";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LetDirective} from "../utility/directives/let/let.directive";

interface MenuTreeNode {
  name: string;
  url: string[];
  depth: number;
  children?: MenuTreeNode[];
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
    MenuAutoCloseDirective,
    RouterLink,
    RouterLinkActive,
    LetDirective
  ]
})
export class MainNavComponent implements OnInit, OnDestroy {
  private breakpointObserver = inject(BreakpointObserver);

  sideMenuTree: MenuTreeNode[];
  sideMenuTreeDataSource = new MatTreeNestedDataSource<MenuTreeNode>();
  sideMenuTreeControl = new NestedTreeControl<MenuTreeNode>(node => node.children);
  hasChild = (_: number, node: MenuTreeNode) => !!node.children && node.children.length > 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChild("menuAnchor", {read: ElementRef}) menuAnchor!: ElementRef;
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  @ViewChild(MatSidenav, {static: true}) sidenav!: MatSidenav;
  openCloseSidenavSub: Subscription | undefined;

  constructor(public portfolioData: PortfolioDataService) {
    const portfolioItems = portfolioData.portfolioItems.reduce<MenuTreeNode[]>((result, current) => {
      result.push({name: current.label, url: current.url, depth: 1});
      return result;
    }, [])

    this.sideMenuTree = [
      {name: "Portfolio", url: ["portfolio"], depth: 0, children: portfolioItems},
      {name: "About", url: ["about"], depth: 0}
    ];
  }

  ngOnInit(): void {
    this.sideMenuTreeDataSource.data = this.sideMenuTree;
    this.sideMenuTreeControl.dataNodes = this.sideMenuTree;
    this.sideMenuTreeControl.expandAll();

    this.openCloseSidenavSub = this.sidenav.openedStart.subscribe(() => {
      history.pushState("sidebarOpened", "");
    });

    this.openCloseSidenavSub.add(this.sidenav.closedStart.subscribe(() => {
      if (history.state == "sidebarOpened") {
        history.back();
      }
    }));
  }

  ngOnDestroy(): void {
    this.openCloseSidenavSub?.unsubscribe();
  }

  @HostListener("window:popstate") onMobileBack() {
    this.sidenav.close();
  }
}
