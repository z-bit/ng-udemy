import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fileread',
  templateUrl: './fileread.component.html',
  styleUrls: ['./fileread.component.css']
})
export class FilereadComponent implements OnInit {
  works: string = '';

  constructor() { }
  ngOnInit() {}

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    console.log(file);
    var myReader:FileReader = new FileReader();

    myReader.onloadend = function(e){
      // you can perform an action with readed data here
      console.log(myReader.result);
    }

    myReader.readAsText(file);
  }
}
