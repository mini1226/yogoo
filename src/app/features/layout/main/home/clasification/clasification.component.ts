import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../../../../../core/service/files/file.service";
import {ClassifyService} from "../../../../../core/service/classify/classify.service";
import {timeout} from "rxjs";


@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent {

  fileUploaded: boolean = false;
  fileName: string = '';
  file: File | null = null;
  formData: FormData = new FormData();
  // }
  label: any;

  constructor(
    private router: Router,
    private fileService: FileService,
    private classifyService: ClassifyService
  ) {
  }

  onFileSelected(event: Event): void {

    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      this.fileService.uploadFile(formData).subscribe((res: any) => {
        this.fileUploaded = true;
        this.fileName = file.name;
      });
    } else {
    }

  }


  getStatusColor(status: string) {
    if (status === 'Wrong pose performed !') {
      return '#FC7171';
    } else {
      return '#D6FC71';
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

  // async onSubmit(modal: HTMLButtonElement): Promise<any> {
  //   this.spinner.show()
  //   if (this.fileUploaded) {
  //     // Call your second API with the file name
  //     const name = {
  //       name: this.fileName
  //     }
  //     this.classifyService.classify(name).subscribe((res: any) => {
  //       console.log(res);
  //       this.label=res;
  //       modal.click()
  //       this.spinner.hide()
  //     }, (error: any) => {
  //       this.alertService.warning('Posture not detected !');
  //       this.spinner.hide();
  //     });
  //   } else {
  //     this.alertService.warning('Please upload a file before submitting !');
  //     this.spinner.hide();
  //   }
  // }


  async onSubmit(modal: HTMLButtonElement): Promise<any> {
    if (this.fileUploaded) {
      // Call your second API with the file name
      const name = {
        name: this.fileName
      }
      this.classifyService.classify(name).pipe(timeout(25000)).subscribe((res: any) => {
        console.log(res);
        this.label=res;
        modal.click()
      }, (error: any) => {
      });
    } else {
    }
  }




  getbackhome() {
    this.router.navigate(['start/home'])
  }

}
