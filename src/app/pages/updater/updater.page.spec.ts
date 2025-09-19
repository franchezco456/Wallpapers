import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdaterPage } from './updater.page';

describe('UpdaterPage', () => {
  let component: UpdaterPage;
  let fixture: ComponentFixture<UpdaterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
