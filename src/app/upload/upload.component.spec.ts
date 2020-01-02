import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadComponent } from './upload.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowseService } from '../shared/browse.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [BrowseService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
