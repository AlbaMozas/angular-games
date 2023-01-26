import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoiswhoComponent } from './whoiswho.component';

describe('WhoiswhoComponent', () => {
  let component: WhoiswhoComponent;
  let fixture: ComponentFixture<WhoiswhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoiswhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoiswhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
