import Content from 'models/Content'
import EnsData from 'models/EnsData'
import PrimarySocial from 'models/PrimarySocial'

export default interface UserProfile {
  tokenId: string
  slug: string
  isOG: boolean
  avatar: string
  displayName: string
  bio: string
  content: Content[]
  primary_social: PrimarySocial[]
  ensData: EnsData[]
  fid: number
  verified_links: Content[]
}
