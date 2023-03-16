export default interface AllLink {
  label: string
  url: string
  type: string
  timestamp: number
  verified: boolean | 'pending'
  subtype: string
  txtRecord: string
}
