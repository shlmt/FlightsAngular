import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CascadeSelect } from 'primeng/cascadeselect'
import { Location } from '../../models/Location.interface'
import { LocationsApiService } from '../../services/locations-api.service'

interface Country {
  name: string
  code?: string
  cities: Location[]
}

interface Continent {
  name: string
  countries: Country[]
}

@Component({
  selector: 'app-location-select',
  imports: [FormsModule, CascadeSelect],
  templateUrl: './location-select.component.html',
  styleUrl: './location-select.component.scss'
})
export class LocationSelectComponent implements OnInit {
  continents: any[] = []

  loading = true

  @Input() selectedLocation?: Location
  @Input() placeholder: string = 'Choose City'
  @Output() onLocationSelected: EventEmitter<Location> = new EventEmitter()

  constructor(private locationsApi: LocationsApiService) {}

  ngOnInit() {
    this.locationsApi.getLocations().subscribe((locations: Location[]) => {
      const result = locations.reduce((acc: Record<string, Continent>, location: Location) => {
        if (!acc[location.continent]) {
          acc[location.continent] = {
            name: location.continent,
            countries: []
          }
        }
        const continent = acc[location.continent]
        let country = continent.countries.find((s) => s.name === location.country)
        if (!country) {
          country = { name: location.country, cities: [], code: location.code }
          continent.countries.push(country)
        }
        country.cities.push(location)
        return acc
      }, {})
      this.continents = Object.values(result)
      this.loading = false
    })
  }

  onSelectChange() {
    if (this.onLocationSelected) {
      this.onLocationSelected.emit(this.selectedLocation)
    }
  }
}
