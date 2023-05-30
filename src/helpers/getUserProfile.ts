import UserProfile from 'models/UserProfile'

export default function (username: string) {
  return fetch(`https://nf.td/api/public/v1/user?name=${username}`, {
    // headers: {
    //   Authorization:
    //     'KUOUYqx7R0KihHHRtx034Gs7xh8QiRhcsP7w26wmPkQ7z9u7vM2hjnRSundqlPqT',
    // },
  })
    .then(
      (res) =>
        res.json() as Promise<{ data: UserProfile[] } & { error?: string }>
    )
    .then((res) => {
      if (res.error) {
        throw new Error(res.error)
      }
      return res.data[0]
    })
}
