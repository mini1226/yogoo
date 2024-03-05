import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/service/user/user.service";
import {Router} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {AlertService} from "ngx-alerts";
import {ClassifyService} from "../../../../core/service/classify/classify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private classifyService: ClassifyService,
    private router: Router,
    private spinner: NgxSpinnerService,
  ) { }


  async realclass(): Promise<boolean> {
    return new Promise(async resolve => {
      await this.spinner.show();
      this.classifyService.getClassify().subscribe({
        next:(res)=>{
          resolve(true);
          this.spinner.hide();
        },
        error:() => {
          resolve(false);
          this.spinner.hide();
        }
      });
    });
  }

  ngOnInit(): void {
  }

  classifyVersion() {
    this.router.navigate(['start/classify'])
  }

  trackVersion() {
    this.router.navigate(['start/track'])
  }

  guideVersion() {
    this.router.navigate(['start/guide'])
  }

  multiVersion() {
    this.router.navigate(['start/multi'])
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
