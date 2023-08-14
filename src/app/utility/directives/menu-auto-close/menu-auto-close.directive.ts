import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Directive({
  selector: '[appMenuAutoClose]',
  standalone: true
})
export class MenuAutoCloseDirective implements OnInit {
  @Input() autoCloseTrigger!: MatMenuTrigger;
  @Input() autoCloseMenuBody!: HTMLElement;
  @Input() autoCloseTimeout = 400;
  isMenuHoveredOver = false;

  @HostListener("mouseenter") onMouseEnter() {
    if (!this.autoCloseTrigger) return;

    this.autoCloseTrigger.openMenu();
    this.isMenuHoveredOver = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    if (!this.autoCloseTrigger) return;

    this.closeMenu();
    this.isMenuHoveredOver = false;
  }

  constructor(private autoCloseMenuElement: ElementRef) {
  }

  ngOnInit(): void {
    this.autoCloseMenuBody.addEventListener("mouseenter", this.onMouseEnter.bind(this));
    this.autoCloseMenuBody.addEventListener("mouseleave", this.onMouseLeave.bind(this));
  }

  private closeMenuTimeoutId = 0;

  private closeMenu() {
    if (!this.autoCloseTrigger) return;

    clearTimeout(this.closeMenuTimeoutId);
    this.closeMenuTimeoutId = setTimeout(() => {
      if (!this.isMenuHoveredOver) {
        this.autoCloseTrigger.closeMenu();
        this.autoCloseMenuElement.nativeElement.classList.remove("cdk-program-focused");
        this.autoCloseMenuElement.nativeElement.classList.remove("cdk-mouse-focused");
      }
    }, this.autoCloseTimeout);
  }
}
