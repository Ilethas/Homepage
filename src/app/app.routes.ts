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

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "portfolio"},
  {
    path: "", component: PageWithNavigationComponent, children: [
      {
        path: "portfolio", children: [
          {path: "", pathMatch: "full", component: PortfolioHomeComponent},
          {
            path: "rpg-inventory-system",
            component: RPGInventorySystemComponent,
            data: {portfolioItemId: PortfolioItem.RPGInventorySystem}
          },
          {
            path: "platformer",
            component: PlatformerComponent,
            data: {portfolioItemId: PortfolioItem.Platformer}
          },
          {
            path: "small-arkanoid",
            component: SmallArkanoidComponent,
            data: {portfolioItemId: PortfolioItem.SmallArkanoid}
          },
          {
            path: "multiplayer-space-shooter",
            component: MultiplayerSpaceShooterComponent,
            data: {portfolioItemId: PortfolioItem.MultiplayerSpaceShooter}
          },
          {path: "arkanoid", component: ArkanoidComponent, data: {portfolioItemId: PortfolioItem.Arkanoid}},
          {
            path: "starcraft-2-protoss-bot",
            component: StarCraft2ProtossBotComponent,
            data: {portfolioItemId: PortfolioItem.StarCraft2ProtossBot}
          },
          {
            path: "opengl-tutorial",
            component: OpenGLTutorialComponent,
            data: {portfolioItemId: PortfolioItem.OpenGLTutorial}
          }
        ]
      },
      {path: "about", component: AboutComponent},
    ]
  },
  {path: "**", component: ErrorPageComponent}
];
