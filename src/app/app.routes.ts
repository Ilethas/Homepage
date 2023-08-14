import {Routes} from '@angular/router';
import {RPGInventorySystemComponent} from "./portfolio/rpg-inventory-system/rpg-inventory-system.component";
import {AboutComponent} from "./about/about.component";
import {PlatformerComponent} from "./portfolio/platformer/platformer.component";
import {SmallArkanoidComponent} from "./portfolio/small-arkanoid/small-arkanoid.component";
import {
  MultiplayerSpaceShooterComponent
} from "./portfolio/multiplayer-space-shooter/multiplayer-space-shooter.component";
import {ArkanoidComponent} from "./portfolio/arkanoid/arkanoid.component";
import {StarCraft2ProtossBotComponent} from "./portfolio/starcraft-2-protoss-bot/starcraft-2-protoss-bot.component";
import {OpenGLTutorialComponent} from "./portfolio/opengl-tutorial/opengl-tutorial.component";
import {PortfolioHomeComponent} from "./portfolio/portfolio-home/portfolio-home.component";
import {PortfolioItem} from "./model/portfolio-data.service";
import {PageWithNavigationComponent} from "./page-with-navigation/page-with-navigation.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {BubblesComponent} from "./portfolio/bubbles/bubbles.component";

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "portfolio"},
  {
    path: "", component: PageWithNavigationComponent, children: [
      {
        path: "portfolio", children: [
          {path: "", pathMatch: "full", title: "Portfolio", component: PortfolioHomeComponent},
          {
            path: "rpg-inventory-system",
            title: "RPG Inventory System (Unreal Engine) | Portfolio",
            component: RPGInventorySystemComponent,
            data: {portfolioItemId: PortfolioItem.RPGInventorySystem}
          },
          {
            path: "platformer",
            title: "Platformer (Unity) | Portfolio",
            component: PlatformerComponent,
            data: {portfolioItemId: PortfolioItem.Platformer}
          },
          {
            path: "small-arkanoid",
            title: "Small Arkanoid (Unity) | Portfolio",
            component: SmallArkanoidComponent,
            data: {portfolioItemId: PortfolioItem.SmallArkanoid}
          },
          {
            path: "bubbles",
            title: "Bubbles | Portfolio",
            component: BubblesComponent,
            data: {portfolioItemId: PortfolioItem.Bubbles}
          },
          {
            path: "multiplayer-space-shooter",
            title: "Multiplayer Space Shooter | Portfolio",
            component: MultiplayerSpaceShooterComponent,
            data: {portfolioItemId: PortfolioItem.MultiplayerSpaceShooter}
          },
          {
            path: "arkanoid",
            title: "Arkanoid | Portfolio",
            component: ArkanoidComponent,
            data: {portfolioItemId: PortfolioItem.Arkanoid}
          },
          {
            path: "starcraft-2-protoss-bot",
            title: "StarCraft 2 Protoss Bot | Portfolio",
            component: StarCraft2ProtossBotComponent,
            data: {portfolioItemId: PortfolioItem.StarCraft2ProtossBot}
          },
          {
            path: "opengl-tutorial",
            title: "OpenGL Tutorial | Portfolio",
            component: OpenGLTutorialComponent,
            data: {portfolioItemId: PortfolioItem.OpenGLTutorial}
          }
        ]
      },
      {path: "about", title: "About | Portfolio", component: AboutComponent},
    ]
  },
  {path: "**", title: "Page not found | Portfolio", component: ErrorPageComponent}
];
