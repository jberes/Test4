import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindRestServiceService } from './northwind-rest-service.service';

describe('NorthwindRestServiceService', () => {
  let service: NorthwindRestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindRestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
