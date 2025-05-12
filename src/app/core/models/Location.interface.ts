export interface Location {
  city: string
  country: string
  continent: 'Asia' | 'Africa' | 'North America' | 'South America' | 'Antarctica' | 'Europe' | 'Australia'
  code?: string
}
