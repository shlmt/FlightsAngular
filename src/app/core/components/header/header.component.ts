import { Component } from '@angular/core'
import { MegaMenuItem } from 'primeng/api'
import { MegaMenu } from 'primeng/megamenu'
import { ButtonModule } from 'primeng/button'
import { AvatarModule } from 'primeng/avatar'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-header',
  imports: [MegaMenu, ButtonModule, AvatarModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MegaMenuItem[] = [
    {
      label: 'Planning',
      root: true,
      items: [
        [
          {
            items: [
              { label: 'Flights', icon: 'pi pi-list', subtext: 'Subtext of item' },
              { label: 'Hotels', icon: 'pi pi-users', subtext: 'Subtext of item' },
              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Trips', icon: 'pi pi-shield', subtext: 'Subtext of item' },
              { label: 'Attractions and Sites', icon: 'pi pi-question', subtext: 'Subtext of item' },
              { label: 'Restaurants', icon: 'pi pi-search', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
              { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
              { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
            ]
          }
        ],
        [
          {
            items: [
              {
                image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png',
                label: 'GET STARTED',
                subtext: 'Build spectacular apps in no time.'
              }
            ]
          }
        ]
      ]
    },
    {
      label: 'Resources',
      root: true
    },
    {
      label: 'Contact',
      root: true
    }
  ]
}
