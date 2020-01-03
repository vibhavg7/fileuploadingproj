import { TestBed, async } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [UserService]
    });
    service = TestBed.get(UserService);
});

  it('should set token', () => {
    service.setToken('1234');
    expect(service.isLoggedIn).toBe(true);
  });

  it('should return isLoggedIn', () => {
    service.setToken('1234');
    expect(service.isLoggedIn).toBe(true);
  });

  it('should logout and remove token', () => {
    service.setToken('1234');
    service.logout();
    expect(service.isLoggedIn).toBe(false);
  });

  it('should be created', () => {
    const userservice: UserService = TestBed.get(UserService);
    expect(userservice).toBeTruthy();
  });

  it('should login', () => {
        const token = '12345';
        const status = 200;
        const user = { user_name: 'v@g.com', password: '12345'};
        service.login(user)
        .subscribe(data => {
          expect(data.status).toEqual(status);
        });
  });
});
