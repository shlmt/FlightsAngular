import { Message } from '@/app/core/models/Message';
import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-msg',
  imports: [DatePipe, CommonModule, FormsModule],
  templateUrl: './chat-msg.component.html',
  styleUrl: './chat-msg.component.scss'
})
export class ChatMsgComponent {

  @Input() msg!: Message

}
