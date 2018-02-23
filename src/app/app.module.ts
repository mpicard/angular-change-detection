import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export function reducer(state: number, action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
    default: return state;
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [BrowserModule, NgReduxModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private store: NgRedux<number>,
    private devTools: DevToolsExtension
  ) {
    store.configureStore(reducer, 0, [], [devTools.enhancer()]);
  }
}
