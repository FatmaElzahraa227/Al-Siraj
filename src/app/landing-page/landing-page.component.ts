import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @ViewChild('carousel') carousel: ElementRef | undefined;
  ngAfterViewInit(): void {
    setInterval(() => {
      this.carousel?.nativeElement.click();
    }, 3000)
  }
}
