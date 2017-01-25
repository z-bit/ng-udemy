import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
  id: string;
  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
    this.id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

  onClick() {
    this.router.navigate(['/routing']);
  }

}
