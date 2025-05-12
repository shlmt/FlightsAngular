import { TestBed } from '@angular/core/testing'

import { FlightsApiService } from './flights-api.service'
import { FlightFilter } from '@/app/core/models/Flight.interface'

describe('FlightsApiService', () => {
  let service: FlightsApiService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FlightsApiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
  it('should return all flights when no filter is provided', (done) => {
    service.getFlights().subscribe((flights) => {
      expect(flights.length).toBe(5)
      done()
    })
  })

  it('should filter by origin city', (done) => {
    const filter: FlightFilter = {
      origin: { city: 'Tel Aviv', country: 'Israel', continent: 'Asia' }
    }

    service.getFlights(filter).subscribe((flights) => {
      expect(flights.length).toBe(2)
      flights.forEach((f) => expect(f.origin.city).toBe('Tel Aviv'))
      done()
    })
  })

  it('should filter by destination city', (done) => {
    const filter: FlightFilter = {
      dest: { city: 'Paris', country: 'France', continent: 'Europe' }
    }

    service.getFlights(filter).subscribe((flights) => {
      expect(flights.length).toBe(1)
      expect(flights[0].dest.city).toBe('Paris')
      done()
    })
  })

  it('should filter by price range', (done) => {
    const filter: FlightFilter = {
      minPrice: 600,
      maxPrice: 900
    }

    service.getFlights(filter).subscribe((flights) => {
      expect(flights.length).toBe(3)
      flights.forEach((f) => {
        expect(f.price).toBeGreaterThanOrEqual(600)
        expect(f.price).toBeLessThanOrEqual(900)
      })
      done()
    })
  })

  it('should filter by date (ignoring time)', (done) => {
    const filter: FlightFilter = {
      date: new Date('2025-06-02T00:00:00')
    }

    service.getFlights(filter).subscribe((flights) => {
      expect(flights.length).toBe(1)
      expect(flights[0].flightNumber).toBe('AF217')
      done()
    })
  })

  it('should return no flights if filters exclude all', (done) => {
    const filter: FlightFilter = {
      origin: { city: 'Mars', country: 'Space', continent: 'Antarctica' }
    }

    service.getFlights(filter).subscribe((flights) => {
      expect(flights.length).toBe(0)
      done()
    })
  })
})
