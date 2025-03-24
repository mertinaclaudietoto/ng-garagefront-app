import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-sign-in',
  imports: [FileUpload, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {
  uploadedFiles: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  onUpload(event: any) {
    // for (let file of event.files) {
    //   this.uploadedFiles.push(file);
    // }
  }
}
