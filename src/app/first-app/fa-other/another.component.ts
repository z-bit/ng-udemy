import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <p>
      another Works!
    </p>
    
    <p>
      It was created in the fa-other foleder by 
    </p>
    
    <pre><code>
      ng generate component --flat --inline-styles --inline-template <b>another</b>>
      ng g c -f -is -it <b>another</b>
    </code></pre>
    
    <p>  
      --flat crates the file in the same directory (no subdir)  
    </p>
  `,
  styles: []
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
