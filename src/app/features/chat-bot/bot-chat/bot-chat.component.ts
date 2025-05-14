import { Message } from '@/app/core/models/Message'
import { CommonModule } from '@angular/common'
import { Component, effect, ElementRef, signal, ViewChild } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ChatMsgComponent } from '../chat-msg/chat-msg.component'
import { AutoFocusModule } from 'primeng/autofocus'

@Component({
  selector: 'app-bot-chat',
  imports: [FormsModule, ChatMsgComponent, AutoFocusModule],
  templateUrl: './bot-chat.component.html',
  styleUrl: './bot-chat.component.scss'
})
export class BotChatComponent {
  messages = signal([
    {
      sender: 'GenieBot',
      content: 'Hello! How can I help you today?',
      timestamp: new Date()
    } as Message
  ])
  input = ''

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef

  constructor() {
    effect(() => {
      this.messages()
      setTimeout(() => {
        this.scrollToBottom()
      }, 0)
    })
  }

  send = () => {
    if (this.input) {
      this.messages.update((messages) => [
        ...messages,
        {
          sender: 'You',
          content: this.input,
          timestamp: new Date()
        }
      ])
      // send to service function
      this.input = ''
    }
  }

  private scrollToBottom = () => {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight
    } catch (err) {}
  }
}
