import { Component, OnInit } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { BrowseService } from '../shared/browse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  imgURL: any;
  imagePath: any;
  uploadedImage = false;
  selectedFile: File;
  constructor(
    private router: Router,
    private browserService: BrowseService
  ) { }

  ngOnInit() {
  }

  fileChangeEvent(files: any, type: any) {
    const reader = new FileReader();
    this.imagePath = files[0].name;
    this.selectedFile = files[0];
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
        this.uploadedImage = true;
        this.imgURL = reader.result;
    };
  }

  uploadImage() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.browserService.uploadImage(uploadData)
      .subscribe((data: any) => {
        if (data.status === 200) {
          this.router.navigate(['/browse']);
        }
      });
  }

}
