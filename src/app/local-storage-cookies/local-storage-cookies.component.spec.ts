import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStorageCookiesComponent } from './local-storage-cookies.component';

describe('LocalStorageCookiesComponent', () => {
  let component: LocalStorageCookiesComponent;
  let fixture: ComponentFixture<LocalStorageCookiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalStorageCookiesComponent]
    });
    fixture = TestBed.createComponent(LocalStorageCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
