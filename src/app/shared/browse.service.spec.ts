import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowseService } from './browse.service';

describe('BrowseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [BrowseService]
  }));

  it('should be created', () => {
    const service: BrowseService = TestBed.get(BrowseService);
    expect(service).toBeTruthy();
  });
});
