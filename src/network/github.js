function get(url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest()

    req.addEventListener('load', function onRequestLoaded() {
      resolve({ code: this.status, data: JSON.parse(this.response) })
    })

    req.addEventListener('error', error => reject(error))
    req.open('GET', url)
    req.send()
  })
}

export async function getAvatarUrl(username) {
  const apiUrl = `https://api.github.com/users/${username}`
  const response = await get(apiUrl)
  if (response.code === 200) {
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return response.data.avatar_url
    // jscs:enable
  }
}
