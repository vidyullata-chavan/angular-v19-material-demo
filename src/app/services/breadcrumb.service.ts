import { Injectable } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { BehaviorSubject, filter, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {
  private breadcrumbs$ = new BehaviorSubject<PageBreadcrumb[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const breadcrumbs = this.buildBreadcrumbs(this.route.root);
        this.breadcrumbs$.next(breadcrumbs);
      });
  }

  getBreadcrumbs(): Observable<PageBreadcrumb[]> {
    return this.breadcrumbs$.asObservable();
  }

  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: PageBreadcrumb[] = []): PageBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) return breadcrumbs;

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, redirectTo: url, icon: '' });
      }

      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}

export interface PageBreadcrumb {
  label: string;
  icon: string;
  redirectTo: string;
}
