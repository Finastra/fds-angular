import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UxgUserProfileMenuComponent } from './user-profile-menu.component';

describe('UxgUserProfileMenuComponent', () => {
  let component: UxgUserProfileMenuComponent;
  let fixture: ComponentFixture<UxgUserProfileMenuComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgUserProfileMenuComponent);
    component = fixture.componentInstance;

    component.user = {
      email: 'secret@uxg.ro',
      gravatarEmail: 'gravatar@uxg.ro',
      username: 'Agent 47'
    };

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
