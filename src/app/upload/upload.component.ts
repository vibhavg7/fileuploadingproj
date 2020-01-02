import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  imgURL1: any;
  imagePath: any;
  imagePath1: any;
  uploadedImage = false;
  uploadedImage1 = false;
  selectedFile: File;
  selectedFile1: File;
  constructor(
    private http: HttpClient,
    private router: Router,
    private browserService: BrowseService
  ) { }

  ngOnInit() {
  }

  fileChangeEvent(files: any, type: any) {
    const reader = new FileReader();
    if (!type) {
      this.imagePath = files[0].name;
      this.selectedFile = files[0];
    } else {
      this.imagePath1 = files[0].name;
      this.selectedFile1 = files[0];
    }
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      if (!type) {
        this.uploadedImage = true;
        this.imgURL = reader.result;
      } else {
        this.uploadedImage1 = true;
        this.imgURL1 = reader.result;
      }
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
