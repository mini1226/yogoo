import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FileService} from "../../../../../core/service/files/file.service";
import {ClassifyService} from "../../../../../core/service/classify/classify.service";
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


  multiForm = new FormGroup({
    splits: new FormControl('', [Validators.required]),
  });
  output: Array<any> = [];


  get splits(): any {
    return this.multiForm.get('splits');
  }


  constructor(
    private router: Router,
    private fileService: FileService,
    private classifyService: ClassifyService,
  ) { }



  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const formData  = new FormData();
      formData.append('file', file);
      this.fileService.uploadImgFile(formData).subscribe((res: any) => {
        this.fileUploaded = true;
        this.fileName = file.name;
      });
    }else {
    }

  }


  getStatusColor(status: string) {
    if (status === 'Unknown Pose') {
      return '#FC7171';
    } else {
      return '#D6FC71';
    }
  }



  // async onSubmit(splits:any): Promise<any> {
  //   this.spinner.show()
  //   if (this.fileUploaded) {
  //     // Call your second API with the file name
  //     const name = {
  //       name: this.fileName,
  //       num_splits: this.splits
  //     }
  //     this.classifyService.multiClassify(name).subscribe((res: any) => {
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

  // splitImage(imageName: string, numSplits: number) {
  //   const payload = {
  //     name: imageName,
  //     num_splits: numSplits,
  //   };
  //   return this.http.post('/split_image', payload);
  // }


  async onSubmit(splits: any, modal: HTMLButtonElement): Promise<any> {
    if (this.fileUploaded) {
      // Call your second API with the file name
      const name = {
        name: this.fileName,
        num_splits: Number(splits.value)
      }
      if (name.num_splits) {
        this.classifyService.multiClassify(name).subscribe((res: any) => {
          console.log(res);
          this.output=res.splits;
          modal.click()
        }, (error: any) => {
          console.log(error);
        });
      }else{
      }
    } else {
    }
  }

  getbackhome() {
    this.router.navigate(['start/home'])
  }


  //
  // onFileSelected(event) {
  //   this.selectedFile = <File>event.target.files[0];
  // }

}
