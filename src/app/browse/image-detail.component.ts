import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../shared/browse.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {

  constructor(private imageService: BrowseService,
              private activatedRoute: ActivatedRoute) { }
  imageData: any;
  ngOnInit() {
    const imageId = +this.activatedRoute.snapshot.params.imageId;
    this.imageData = this.imageService.images.find((data) => {
      return data.id === imageId;
    });
  }

}
