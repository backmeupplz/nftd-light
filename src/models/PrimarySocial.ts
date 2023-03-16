export default interface PrimarySocial {
  type: string
  subtype: string
  username?: string
  fid: number
  last_modified: null
  first_added: number
  first_confirmed: number
  last_checked: null
  last_confirmed: null
  connectedAddress: string
  proof: string
  verified: boolean
  sig: null
  signed_message: null
}
