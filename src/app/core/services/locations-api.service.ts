import { Injectable } from '@angular/core'
import { Location } from '@/app/core/models/Location.interface'
import { delay, Observable, of } from 'rxjs'

const MockLoactions: Location[] = [
  { city: 'Tel Aviv', country: 'Israel', continent: 'Asia', code: 'il' },
  { city: 'New York', country: 'USA', continent: 'North America', code: 'us' },
  { city: 'Philadelphia', country: 'USA', continent: 'North America', code: 'us' },
  { city: 'London', country: 'England', continent: 'Europe', code: 'uk' },
  { city: 'Paris', country: 'France', continent: 'Europe', code: 'fr' },
  { city: 'Tokyo', country: 'Japan', continent: 'Asia', code: 'jp' },
  { city: 'Sydney', country: 'Australia', continent: 'Australia', code: 'au' },
  { city: 'Cairo', country: 'Egypt', continent: 'Africa', code: 'eg' },
  { city: 'Rio de Janeiro', country: 'Brazil', continent: 'South America', code: 'br' },
  { city: 'Cape Town', country: 'South Africa', continent: 'Africa', code: 'za' },
  { city: 'Toronto', country: 'Canada', continent: 'North America', code: 'ca' }
]

@Injectable({
  providedIn: 'root'
})
export class LocationsApiService {
  private locations: Location[] | undefined

  constructor() {}

  getLocations = (): Observable<Location[]> => {
    if (!this.locations) {
      this.locations = MockLoactions
      of(this.locations).pipe(delay(500))
    }
    return of(this.locations)
  }
}
