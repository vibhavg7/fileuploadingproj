import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../shared/browse.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { distinctUntilChanged, debounceTime, tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  filterBy: any = '';
  searchCriteriaForm: FormGroup;
  constructor(private imageService: BrowseService,
              private formBuilder: FormBuilder) {
    this.searchCriteriaForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }
  imagesCount: any;
  imageTotalCount: any;
  images: any[];

  ngOnInit() {
    this.imageService._pageNumber = 1;
    this.imageService.getImages(this.filterBy, false).subscribe((data: any) => {
      this.images = data.images;
      this.imageTotalCount = +data.images_total_count;
      this.imagesCount = +data.imagesCount;
    });
  }

  onChanges() {
    this.searchCriteriaForm.get('searchCriteria').valueChanges.pipe(tap(data => {
    }), distinctUntilChanged(), debounceTime(500),
      switchMap(query => ( this.filterBy = query, this.imageService.getImages(query, false)))
    )
      .subscribe((res: any) => { this.images = res.images, this.imageTotalCount = res.images_total_count;
                                 this.imagesCount = +res.imagesCount; });
  }

  loadMoreImages() {
    this.imageService._pageNumber = ++this.imageService._pageNumber;
    this.imageService.getImages(this.filterBy, true).subscribe((data: any) => {
      this.images = data.images;
      this.imageTotalCount = +data.images_total_count;
      this.imagesCount = +data.imagesCount;
    });
  }

}
