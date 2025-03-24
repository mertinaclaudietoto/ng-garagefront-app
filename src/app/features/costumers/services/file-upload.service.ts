import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }
  onFileSelected(file:File) {
    if (file) {
        // this.fileName = file.name;
        // const formData = new FormData();
        // formData.append("thumbnail", file);
        // const upload$ = this.http.post("/api/thumbnail-upload", formData);
        // upload$.subscribe();
    }
}
}
