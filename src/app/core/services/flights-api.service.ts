import { Injectable } from '@angular/core'
import { delay, Observable, of } from 'rxjs'
import { Flight, FlightFilter } from '@/app/core/models/Flight.interface'

@Injectable({
  providedIn: 'root'
})
export class FlightsApiService {
  private MockFlights: Flight[] = [
    {
      id: 'F001',
      flightNumber: 'BA162',
      origin: { city: 'Tel Aviv', country: 'Israel', continent: 'Asia' },
      dest: { city: 'London', country: 'UK', continent: 'Europe' },
      price: 320,
      duration: 5.5,
      distance: 3600,
      date: new Date('2025-06-01T08:30:00Z'),
      airline: 'British Airways',
      seatsAvailable: 12
    },
    {
      id: 'F002',
      flightNumber: 'AF217',
      origin: { city: 'New York', country: 'USA', continent: 'North America' },
      dest: { city: 'Paris', country: 'France', continent: 'Europe' },
      price: 580,
      duration: 7.2,
      distance: 5800,
      date: new Date('2025-06-02T13:45:00Z'),
      stopover: { city: 'London', country: 'UK', continent: 'Europe' },
      airline: 'Air France',
      seatsAvailable: 34
    },
    {
      id: 'F003',
      flightNumber: 'LY089',
      origin: { city: 'Tel Aviv', country: 'Israel', continent: 'Asia' },
      dest: { city: 'Tokyo', country: 'Japan', continent: 'Asia' },
      price: 950,
      duration: 11.5,
      distance: 9200,
      date: new Date('2025-06-04T22:00:00Z'),
      airline: 'El Al',
      seatsAvailable: 5
    },
    {
      id: 'F004',
      flightNumber: 'QR798',
      origin: { city: 'Sydney', country: 'Australia', continent: 'Australia' },
      dest: { city: 'Cairo', country: 'Egypt', continent: 'Africa' },
      price: 870,
      duration: 16.0,
      distance: 14400,
      date: new Date('2025-06-10T10:15:00Z'),
      stopover: { city: 'Doha', country: 'Qatar', continent: 'Asia' },
      airline: 'Qatar Airways',
      seatsAvailable: 20
    },
    {
      id: 'F005',
      flightNumber: 'LA322',
      origin: { city: 'Toronto', country: 'Canada', continent: 'North America' },
      dest: { city: 'Rio de Janeiro', country: 'Brazil', continent: 'South America' },
      price: 670,
      duration: 10.0,
      distance: 8200,
      date: new Date('2025-06-12T06:50:00Z'),
      airline: 'LATAM Airlines',
      seatsAvailable: 9
    }
  ]

  constructor() {}

  getFlights = (filter?: FlightFilter): Observable<Flight[]> => {
    return of(
      filter
        ? this.MockFlights.filter((f) => {
            if (filter.origin && f.origin.city !== filter.origin.city) return false
            if (filter.dest && f.dest.city !== filter.dest.city) return false
            if (filter.minPrice != undefined && f.price < filter.minPrice) return false
            if (filter.maxPrice != undefined && f.price > filter.maxPrice) return false
            if (filter.date) {
              if (
                f.date.getFullYear() !== filter.date.getFullYear() ||
                f.date.getMonth() !== filter.date.getMonth() ||
                f.date.getDate() !== filter.date.getDate()
              )
                return false
            }
            switch (filter.stopType) {
              case 'With':
                if (!f.stopover) return false
                break
              case 'Direct':
                if (f.stopover) return false
                break
              default:
                break
            }
            return true
          })
        : this.MockFlights
    ).pipe(delay(500))
  }
}
