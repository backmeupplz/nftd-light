import AllLink from 'models/AllLink'
import EnsData from 'models/EnsData'
import PrimarySocial from 'models/PrimarySocial'
import VerifiedLink from 'models/VerifiedLink'

export default interface UserProfile {
  slug: string
  isOG: boolean
  displayName: string
  avatar: string
  bio: string
  ensData: EnsData[]
  primary_social: PrimarySocial[]
  verified_links: VerifiedLink[]
  all_links: AllLink[]
}
