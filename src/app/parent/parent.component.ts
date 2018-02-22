import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  template: `
    <div>
      parent-component (value: {{ value }})

      <child [value]="value"></child>
    </div>
  `
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  value = 0;

  ngOnInit() {
    console.log("%cOnInit (Parent)", "color: lightgreen");

    setTimeout(() => {

      setInterval(() => {
        this.value += 1;
        console.log(this.value);
      }, 2000);

    }, 5000);
  }

  ngOnChanges() {
    console.log("%cOnChanges (Parent)", "color: lightgreen");
  }

  ngDoCheck() {
    console.log("%cDoCheck (Parent)", "color: lightgreen");
  }
}
