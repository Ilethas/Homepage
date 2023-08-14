import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export enum PortfolioItem {
  RPGInventorySystem,
  Platformer,
  SmallArkanoid,
  Bubbles,
  MultiplayerSpaceShooter,
  Arkanoid,
  StarCraft2ProtossBot,
  OpenGLTutorial
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  portfolioItems = [
    {
      id: PortfolioItem.RPGInventorySystem,
      label: "RPG Inventory System (Unreal Engine)",
      description: `Inventory system designed for multiplayer, like one you'd see in Baldur's Gate 3 or Divinity Original Sin 2`,
      thumbnailSrc: "./assets/thumbnails/RPG Inventory System (UE4).png",
      url: ["/", "portfolio", "rpg-inventory-system"]
    },
    {
      id: PortfolioItem.Platformer,
      label: "Platformer (Unity)",
      description: `Features two levels – procedural and traditional`,
      thumbnailSrc: "./assets/thumbnails/Platformer (Unity).png",
      url: ["/", "portfolio", "platformer"]
    },
    {
      id: PortfolioItem.SmallArkanoid,
      label: "Small Arkanoid (Unity)",
      description: `Minimal implementation of multiplayer Arkanoid game`,
      thumbnailSrc: "./assets/thumbnails/Small Arkanoid (Unity).png",
      url: ["/", "portfolio", "small-arkanoid"]
    },
    {
      id: PortfolioItem.Bubbles,
      label: "Bubbles",
      description: `A small Unity game made for practice`,
      thumbnailSrc: "./assets/thumbnails/Bubbles.png",
      url: ["/", "portfolio", "bubbles"]
    },
    {
      id: PortfolioItem.MultiplayerSpaceShooter,
      label: "Multiplayer Space Shooter",
      description: `Made with C++ and SFML`,
      thumbnailSrc: "./assets/thumbnails/Multiplayer Space Shooter.png",
      url: ["/", "portfolio", "multiplayer-space-shooter"]
    },
    {
      id: PortfolioItem.Arkanoid,
      label: "Arkanoid",
      description: `Made with C++ and SFML`,
      thumbnailSrc: "./assets/thumbnails/Arkanoid.png",
      url: ["/", "portfolio", "arkanoid"]
    },
    {
      id: PortfolioItem.StarCraft2ProtossBot,
      label: "StarCraft 2 Protoss Bot",
      description: `Python implementation of a bot that plays StarCraft 2 as the Protoss race`,
      thumbnailSrc: "./assets/thumbnails/StarCraft 2 Protoss Bot.png",
      url: ["/", "portfolio", "starcraft-2-protoss-bot"]
    },
    {
      id: PortfolioItem.OpenGLTutorial,
      label: "OpenGL Tutorial",
      description: `Qt 5 C++ Aplication showing a variety of graphics programming techniques`,
      thumbnailSrc: "./assets/thumbnails/OpenGL Tutorial.png",
      url: ["/", "portfolio", "opengl-tutorial"]
    }
  ]

  titlebarContent$ = new BehaviorSubject<{ title: string, description: string }>({
    title: "Title",
    description: "Description"
  })
}
