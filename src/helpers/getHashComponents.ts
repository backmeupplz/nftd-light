export default function () {
  const slug = window.location.hash.substring(2)
  return {
    slug,
  }
}
