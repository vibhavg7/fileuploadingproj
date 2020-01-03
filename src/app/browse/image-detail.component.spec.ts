import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowseService } from '../shared/browse.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ImageDetailComponent', () => {
  let component: ImageDetailComponent;
  let service: BrowseService;
  let fixture: ComponentFixture<ImageDetailComponent>;
  // let mockimageService;
  let images;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageDetailComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [BrowseService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // mockimageService = jasmine.createSpyObj('', ['getImageById']);
    service = TestBed.get(BrowseService);
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the image detail', () => {
    images = [
      {
        id: 1,
        image_url: 'https://sample-proj.s3.ap-south-1.amazonaws.com/1576675708515',
        text: 'rupee-indian.png',
        userid: null,
        type: 'image/png',
      },
      {
        id: 2,
        image_url: 'https://sample-proj.s3.ap-south-1.amazonaws.com/1576675708515',
        text: 'rupee-indian.png',
        userid: null,
        type: 'image/png',
      },
      {
        id: 3,
        image_url: 'https://sample-proj.s3.ap-south-1.amazonaws.com/1576675708515',
        text: 'rupee-indian.png',
        userid: null,
        type: 'image/png',
      }
    ];
    const data = component.getImageData(1);
    service.getImageById(1).subscribe((imagedata) => {
      expect(imagedata).toBe(data);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
