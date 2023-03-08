import UserProfile from 'models/UserProfile'

export default function (username: string) {
  return fetch(
    `https://mysterious-stream-82183.herokuapp.com/https://nf.td/api/public/v1/user?name=${username}`
  )
    .then((res) => res.json() as Promise<UserProfile & { error?: string }>)
    .then((res) => {
      if (res.error) {
        throw new Error(res.error)
      }
      return res
    })
}
