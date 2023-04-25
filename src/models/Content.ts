export default interface Content {
  type: string
  subtype: string
  label: string
  url: string
  registered_at?: number
  txtRecord?: string
  proof: string
  connectedAddress: string
  sig: null
  signed_message: null
  timestamp: number
  last_modified: null
  first_added: number
  first_confirmed: number
  last_checked: null
  last_confirmed: null
  verified: boolean
}
