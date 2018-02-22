import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>How Angular change detection works!</h1>
    <parent></parent>

    <img src="/assets/cd-tree.svg">
  `,
})
export class AppComponent { }
