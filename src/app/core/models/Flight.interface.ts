import { Location } from './Location.interface'

export interface Flight {
  id: string
  flightNumber: string
  origin: Location
  dest: Location
  price: number
  duration: number // בשעות
  distance: number // בק"מ
  date: Date
  stopover?: Location
  airline: string
  seatsAvailable: number
}

export interface FlightFilter {
  origin?: Location | null
  dest?: Location | null
  minPrice?: number
  maxPrice?: number
  date?: Date
}
