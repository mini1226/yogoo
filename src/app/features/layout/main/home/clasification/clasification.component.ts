import { Component } from '@angular/core';

@Component({
  selector: 'app-clasification',
  templateUrl: './clasification.component.html',
  styleUrls: ['./clasification.component.scss']
})
export class ClasificationComponent {

  constructor() { }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      console.log(file.name);
      // add code to upload the file to the system
    }

  }

}
