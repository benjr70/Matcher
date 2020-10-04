import { Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  implements OnInit, OnDestroy {
  title = 'Frontend';
  bodyTag: HTMLBodyElement = document.getElementsByTagName('body')[0];
  htmlTag: HTMLElement = document.getElementsByTagName('html')[0];

  ngOnInit() {
    // add the css-style to the html and body tags
    this.bodyTag.classList.add('home-page');
    this.htmlTag.classList.add('home-page');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.bodyTag.classList.remove('home-page');
    this.htmlTag.classList.remove('home-page');
  }

}
