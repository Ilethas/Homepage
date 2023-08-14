import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(public router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const title = this.getTitle(this.router.routerState.root);
                gtag('config', 'G-EKKSQ3SSZN', {
                    page_title: title,
                    page_path: event.urlAfterRedirects,
                    page_location: document.location.href
                });
            }
        })
    }

    private getTitle(activatedRoute: ActivatedRoute | null): string | undefined {
        while (activatedRoute) {
            if (activatedRoute.firstChild) {
                activatedRoute = activatedRoute.firstChild;
            } else {
                return activatedRoute.snapshot.title;
            }
        }
        return undefined;
    }
}
