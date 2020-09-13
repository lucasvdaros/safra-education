import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavItem } from './nav-item';
import { ThemeService } from './services/theme.services';
import { LoginService } from '../core/services/login/login.service';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  private allNavItems: NavItem[] = [
    {
      id: 1,
      title: 'Inicio',
      iconName: 'home',
      url: ['', '/dashboard'],
      isActive: false
    },
    {
      id: 2,
      title: 'Cursos',
      iconName: 'youtube',
      url: ['', '/'],
      isActive: false
    },
    {
      id: 3,
      title: 'Tutoriais',
      iconName: 'book-open',
      url: ['', '/'],
      isActive: false
    },
    {
      id: 4,
      title: 'Certificações',
      iconName: 'star',
      url: ['', '/'],
      isActive: false
    },
    {
      id: 5,
      title: 'Chatbot',
      iconName: 'message-circle',
      url: ['', '/'],
      isActive: false
    },
  ];

  sideBarOpen = false;
  dark$ = this.themeService.darkTheme$;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private themeService: ThemeService) { }

  ngOnInit(): void {
    this.checkInitialActiveUrl();
    this.listenToRedirectEvents();
  }

  listenToRedirectEvents(): void {
    this.router
      .events
      .subscribe(
        (navigationEvent: any) => {
          if (navigationEvent instanceof NavigationEnd) {

            this.sideBarOpen = false;

            if (!!navigationEvent.urlAfterRedirects) {
              const currentNav = this.navItems
                .filter(navItem => {
                  return navItem.url.join('') === navigationEvent.urlAfterRedirects;
                }).pop();


              this.allNavItems = this.updateNavItems(this.navItems, currentNav);
            }
            else {
              const currentNav = this.navItems
                .filter(navItem => {
                  return '/' + navItem.url.join('/') === navigationEvent.url;
                }).pop();

              this.allNavItems = this.updateNavItems(this.navItems, currentNav);
            }
          }
        });
  }

  checkInitialActiveUrl(): void {

    this.allNavItems = this.updateNavItems(this.allNavItems,
      this.allNavItems.filter(navItem => {
        return navItem.url.join('') === this.router.routerState.snapshot.url;
      }).pop());
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  get navItems(): NavItem[] {
    return this.allNavItems;
  }

  private updateNavItems(navItems: NavItem[], newActiveItem: NavItem): NavItem[] {

    if (!newActiveItem) {
      return navItems;
    }

    return [
      ...this.navItems
        .filter(i => i.url != newActiveItem.url)
        .map(i => { return { ...i, isActive: false } }),
      {
        ...newActiveItem,
        isActive: true
      }
    ]
      .sort((a, b) => {
        if (a.id > b.id) return 1;
        else if (b.id > a.id) return -1;
        return 0;
      });
  }
}
