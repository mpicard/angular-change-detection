import {
  ChangeDetectionStrategy,
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

      value: {{ value }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() value;

  ngOnInit() {
    console.log("%cOnInit (child)", "color: pink");
  }

  ngOnChanges() {
    console.log("%cOnChanges (child)", "color: pink");
  }

  ngDoCheck() {
    console.log("%cDoCheck (child)", "color: pink");
  }
}
