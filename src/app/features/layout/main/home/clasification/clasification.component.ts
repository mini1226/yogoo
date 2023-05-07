import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertService} from "ngx-alerts";
import {FileService} from "../../../../../core/service/files/file.service";
import {ClassifyService} from "../../../../../core/service/classify/classify.service";


@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent {

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private alertService: AlertService,
    private fileService: FileService,
    private classifyService: ClassifyService
  ) { }


  fileUploaded: boolean = false;
  fileName: string = '';
  file: File | null = null;
  formData: FormData = new FormData();


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


  async onSubmit(): Promise<any> {
    this.spinner.show()
    if (this.fileUploaded) {
      // Call your second API with the file name
      const name = {
        name: this.fileName
      }
      this.classifyService.classify(name).subscribe((res: any) => {
        console.log(res);
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



  // async openDialogUpdate(data: any) {
  //   if (data?.deviceOnOrOff === 'OFF') {
  //     if (await this.permissionService.checkPermission('EDIT_DEVICE')) {
  //       this.modalOpened = true;
  //       let matDialogRef = this.dialog.open(EditDeviceComponent, {
  //         minWidth: '580px',
  //         data: data,
  //         disableClose: true
  //       });
  //       matDialogRef.afterClosed().subscribe(() => {
  //         this.filter((this.page - 1) * this.limit, 'MANUAL');
  //         this.modalOpened = false;
  //       });
  //     }
  //   } else {
  //     this.snackBarService.show('Cannot able to edit the device when it is online!', 'snack-bar-danger');
  //   }
  // }




  // onSubmit(): void {
  //   if (this.fileUploaded) {
  //     this.spinner.show();
  //     this.userService.signup(this.signUpForm.value).subscribe((res: any) => {
  //       console.log(res);
  //       this.alertService.success('User registered successfully');
  //       this.signUpForm.reset();
  //       this.router.navigate(['/sign-in/sign-in']);
  //       this.spinner.hide();
  //     });
  //   } else {
  //     this.alertService.warning('Please upload a file before submitting !');
  //   }
  // }





  getbackhome() {
    this.router.navigate(['start/home'])
  }

}
