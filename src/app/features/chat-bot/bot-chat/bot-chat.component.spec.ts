import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotChatComponent } from './bot-chat.component';

describe('BotChatComponent', () => {
  let component: BotChatComponent;
  let fixture: ComponentFixture<BotChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
