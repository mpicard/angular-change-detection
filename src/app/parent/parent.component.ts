import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'parent',
  template: `
    <div>
      parent-component (value: {{ value | async }})

      <child [value]="value | async"></child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  constructor(private cd: ChangeDetectorRef) { }

  value;

  ngOnInit() {
    console.log("%cOnInit (Parent)", "color: lightgreen");

    const offset = 5000;
    const interval = 1000;

    this.value = Observable
      .timer(offset, interval)
      .startWith(0)
      .do((value) => console.log("value:", value));
  }

  ngOnChanges() {
    console.log("%cOnChanges (Parent)", "color: lightgreen");
  }

  ngDoCheck() {
    console.log("%cDoCheck (Parent)", "color: lightgreen");
  }
}
