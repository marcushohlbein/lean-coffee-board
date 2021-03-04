export default function getUser() {
  return fetch('/api/users').then(res => res.json())
}
