import { UserService } from './user.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { DataService } from '../shared/data.service';

describe('UserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
    });
  });

  it('user component create', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use user name from service', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display user name if user has logged in', () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    app.IsLoggeddIn = true;
    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('p').textContent).toContain(app.user.name);
  });

  it("should n't display user name if user has not logged in", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    let complied = fixture.debugElement.nativeElement;
    expect(complied.querySelector('p').textContent).not.toContain(
      app.user.name
    );
  });

  it("should n't fetch data successfully if not called asynchronously", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should  fetch data successfully if not called asynchronously', async () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let dataService = fixture.debugElement.injector.get(DataService);

    let spy = spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data')
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  });
});
