import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { HeaderComponent } from './core/components/header/header.component'
import { BotContainerComponent } from './features/chat-bot/bot-container/bot-container.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, HeaderComponent, HeaderComponent, BotContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
