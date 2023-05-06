import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-modalview',
  templateUrl: './modalview.component.html',
  styleUrls: ['./modalview.component.scss']
})
export class ModalviewComponent implements OnInit{

  constructor(private spinner: NgxSpinnerService,) {
  }

  ngOnInit(): void {
  }


}
