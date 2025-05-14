import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMsgComponent } from './chat-msg.component';

describe('ChatMsgComponent', () => {
  let component: ChatMsgComponent;
  let fixture: ComponentFixture<ChatMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatMsgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
