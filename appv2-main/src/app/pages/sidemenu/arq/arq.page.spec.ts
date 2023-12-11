import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArqPage } from './arq.page';

describe('ArqPage', () => {
  let component: ArqPage;
  let fixture: ComponentFixture<ArqPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
