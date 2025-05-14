import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotContainerComponent } from './bot-container.component';

describe('BotContainerComponent', () => {
  let component: BotContainerComponent;
  let fixture: ComponentFixture<BotContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
