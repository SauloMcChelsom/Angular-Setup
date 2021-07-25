import { Component, ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public  theme$ = 'black-theme';
  public  themeColor: 'primary' | 'accent' | 'warn' = 'accent';


  //black-theme / nature-theme / default-theme / light-theme

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  

  constructor(private overlayContainer: OverlayContainer,private observer: BreakpointObserver) {}
  
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav

  ngOnInit() {}
}