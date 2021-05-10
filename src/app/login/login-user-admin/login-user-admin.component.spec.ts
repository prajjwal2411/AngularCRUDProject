import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserAdminComponent } from './login-user-admin.component';

describe('LoginUserAdminComponent', () => {
  let component: LoginUserAdminComponent;
  let fixture: ComponentFixture<LoginUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
