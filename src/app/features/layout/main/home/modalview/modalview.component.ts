import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.component.html',
  styleUrls: ['./modalview.component.scss']
})
export class ModalviewComponent implements OnInit{


  output: any;

  constructor(private dialogRef:MatDialogRef<ModalviewComponent>,@Inject(MAT_DIALOG_DATA) public  data:any) {
    this.output = data;
  }

  ngOnInit(): void {
    this.getStatusColor(this.output)
  }


  getStatusColor(status: string) {
    if (status === 'Wrong pose performed !') {
      return '#F76F61';
    } else {
      return '#D6FC71';
    }
  }

}
