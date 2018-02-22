import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <div>
      child-component

      value: {{ value | async }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  constructor(private cd: ChangeDetectorRef) { }

  @Input() value;

  ngOnInit() {
    console.log("%cOnInit (child)", "color: pink");
  }

  ngOnChanges() {
    console.log("%cOnChanges (child)", "color: red");
  }

  ngDoCheck() {
    console.log("%cDoCheck (child)", "color: pink");
  }
}
