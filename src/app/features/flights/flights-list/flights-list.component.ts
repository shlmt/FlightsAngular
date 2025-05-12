import { Component, computed, Input, signal, Signal } from '@angular/core'
import { DataView } from 'primeng/dataview'
import { SelectModule } from 'primeng/select'
import { ButtonModule } from 'primeng/button'
import { SelectButton } from 'primeng/selectbutton'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'
import { SelectItem } from 'primeng/api'
import { Flight } from '@/app/core/models/Flight.interface'

@Component({
  selector: 'app-flights-list',
  imports: [DataView, ButtonModule, SelectModule, CommonModule, SelectButton, FormsModule, DropdownModule],
  templateUrl: './flights-list.component.html',
  styleUrl: './flights-list.component.scss'
})
export class FlightsListComponent {
  layout: 'list' | 'grid' = 'list'
  options = ['list', 'grid']
  sortOptions: SelectItem[] = [
    { label: 'Price: High to Low', value: 'price' },
    { label: 'Price: Low to High', value: '!price' },
    { label: 'Duration: High to Low', value: 'duration' },
    { label: 'Duration: Low to High', value: '!duration' }
  ]
  sortOrder = signal(1)
  sortKey = signal('price')

  @Input() flights: Signal<Flight[]> = signal([])

  filteredFlights = computed(() =>
    this.flights().sort((a, b) => {
      const field = this.sortKey() as keyof Flight
      return this.sortOrder() * (Number(b[field]) - Number(a[field]))
    })
  )

  constructor() {}

  onSortChange(event: any) {
    let value = event.value
    if (value.indexOf('!') === 0) {
      this.sortOrder.set(-1)
      this.sortKey.set(value.substring(1, value.length))
    } else {
      this.sortOrder.set(1)
      this.sortKey.set(value)
    }
  }

  getSeverity(flight: Flight) {
    switch (flight.dest.continent) {
      // case 'a':
      //     return 'success';

      // case 'LOWSTOCK':
      //     return 'warn';

      // case 'OUTOFSTOCK':
      //     return 'danger';

      default:
        return null
    }
  }
}
