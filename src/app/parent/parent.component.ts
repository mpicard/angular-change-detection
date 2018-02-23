import { NgRedux, select } from '@angular-redux/store';
import { ChangeDetectionStrategy, Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'parent',
  template: `
    <div>
      parent-component
      (value: {{ value | async }})

      <child [value]="value"></child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  constructor(private store: NgRedux<number>) { }

  @select(s => s) value: Observable<number>;

  ngOnInit() {
    console.log("%cOnInit (Parent)", "color: lightgreen");

    setInterval(() => {
      this.store.dispatch({ type: 'INCREMENT' });
    }, 1000);
  }

  /**
   * Called whenever changes are detected to @Input's
   */
  ngOnChanges() {
    console.log("%cOnChanges (Parent)", "color: red");
    // why isn't this one being called? value is now an observable
    // it's reference isn't changing and Angular can deal with that
  }

  /**
   * Use DoCheck for custom change detection
   */
  ngDoCheck() {
    console.log("%cDoCheck (Parent)", "color: lightgreen");
  }
}
