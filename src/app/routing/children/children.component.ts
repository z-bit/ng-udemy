import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {
  code: string =
`{path: 'children', component: ChildrenComponent},
{path: 'children', component: ChildrenComponent, children: CHILDREN_ROUTES}`
  constructor(
      private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/routing']);
  }

}
