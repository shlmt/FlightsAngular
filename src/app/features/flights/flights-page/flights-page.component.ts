import { Component, signal, WritableSignal } from '@angular/core'
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { FlightsApiService } from '@/app/core/services/flights-api.service'
import { Flight, FlightFilter } from '@/app/core/models/Flight.interface'
import { LocationSelectComponent } from '@/app/core/components/location-select/location-select.component'
import { Location } from '@/app/core/models/Location.interface'
import { SliderModule } from 'primeng/slider'
import { FormsModule } from '@angular/forms'
import { DatePickerModule } from 'primeng/datepicker'
import { IconFieldModule } from 'primeng/iconfield'
import { InputIconModule } from 'primeng/inputicon'
import { InputTextModule } from 'primeng/inputtext'
import { DecimalPipe } from '@angular/common'
import { FlightsListComponent } from '../flights-list/flights-list.component'

@Component({
  selector: 'app-flights-page',
  imports: [
    ToolbarModule,
    ButtonModule,
    LocationSelectComponent,
    SliderModule,
    FormsModule,
    DatePickerModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    DecimalPipe,
    FlightsListComponent
  ],
  templateUrl: './flights-page.component.html',
  styleUrl: './flights-page.component.scss'
})
export class FlightsPageComponent {
  flights: WritableSignal<Flight[]> = signal([])
  rangeValues: number[] = [0, 30000]
  date: Date | undefined
  today = new Date()

  selectedOrigin: Location | null = { city: 'Tel Aviv', country: 'Israel', continent: 'Asia', code: 'il' }
  selectedTarget: Location | null = null

  constructor(public flightApi: FlightsApiService) {
    flightApi.getFlights().subscribe((flights) => this.flights.set(flights))
  }

  setOrigin = (loc: Location | null) => {
    this.selectedOrigin = loc
  }

  setTarget = (loc: Location | null) => {
    this.selectedTarget = loc
  }

  filterFlights = () => {
    const filter: FlightFilter = {
      origin: this.selectedOrigin,
      dest: this.selectedTarget,
      minPrice: this.rangeValues[0],
      maxPrice: this.rangeValues[1],
      date: this.date
    }
    this.flightApi.getFlights(filter).subscribe((flights) => this.flights.set(flights))
  }
}
