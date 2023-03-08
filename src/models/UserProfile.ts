import SocialProfile from 'models/SocialProfile'
import VerifiedLink from 'models/VerifiedLink'

export default interface UserProfile {
  slug: string
  isOG: boolean
  displayName: string
  avatar: string
  bio: string
  ens: string
  primary_social: SocialProfile[]
  verified_links: VerifiedLink[]
}
