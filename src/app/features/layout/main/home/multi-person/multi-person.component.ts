import { Component } from '@angular/core';
import {ModalviewComponent} from "../modalview/modalview.component";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertService} from "ngx-alerts";
import {FileService} from "../../../../../core/service/files/file.service";
import {ClassifyService} from "../../../../../core/service/classify/classify.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-multi-person',
  templateUrl: './multi-person.component.html',
  styleUrls: ['./multi-person.component.scss']
})
export class MultiPersonComponent {

  fileUploaded: boolean = false;
  fileName: string = '';
  file: File | null = null;
  formData: FormData = new FormData();


  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private fileService: FileService,
    private classifyService: ClassifyService,
    private dialog: MatDialog
  ) { }



  onFileSelected(event: Event): void {
    this.spinner.show();
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData  = new FormData();
      formData.append('file', file);
      this.fileService.uploadFile(formData).subscribe((res: any) => {
        this.alertService.success('File Successfully uploaded !');
        this.spinner.hide();
        this.fileUploaded = true;
        this.fileName = file.name;
      });
    }else {
      this.alertService.warning('File upload failed !');
      this.spinner.hide();
    }

  }


  openModal(dataa: any) {
    this.dialog.open(ModalviewComponent, {
      width: '500px',
      data: dataa
    });
  }



  async onSubmit(): Promise<any> {
    this.spinner.show()
    if (this.fileUploaded) {
      // Call your second API with the file name
      const name = {
        name: this.fileName
      }
      this.classifyService.classify(name).subscribe((res: any) => {
        console.log(res);
        this.openModal(res)
        this.spinner.hide()
      }, (error: any) => {
        console.log(error);
        this.spinner.hide();
      });
    } else {
      this.alertService.warning('Please upload a file before submitting !');
      this.spinner.hide();
    }
  }




  // async onSubmit(): Promise<any> {
  //   this.spinner.show()
  //   if (this.fileUploaded) {
  //     // Call your second API with the file name
  //     const name = {
  //       name: this.fileName
  //     }
  //     this.classifyService.classify(name).subscribe((res: any) => {
  //       console.log(res);
  //       this.openModal(res)
  //       this.spinner.hide()
  //     }, (error: any) => {
  //       console.log(error);
  //       this.spinner.hide();
  //     });
  //   } else {
  //     this.alertService.warning('Please upload a file before submitting !');
  //     this.spinner.hide();
  //   }
  // }

  getbackhome() {
    this.router.navigate(['start/home'])
  }


  //
  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }
}
