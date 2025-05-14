import { Component } from '@angular/core'
import { BotChatComponent } from '../bot-chat/bot-chat.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-bot-container',
  imports: [BotChatComponent, CommonModule],
  templateUrl: './bot-container.component.html',
  styleUrl: './bot-container.component.scss'
})
export class BotContainerComponent {
  isChatOpen = true

  toggleChatOpen = () => {
    this.isChatOpen = !this.isChatOpen
  }
}
