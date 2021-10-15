const checkResponse = (result) => {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Произошла ошибка: ${result.status}:${result.statusText}`)
}

export const getMovies = () => {
  return fetch('https://bd-diplom.nomoredomains.club/', {
    method: 'GET',
    headers : {
      'Content-Type': 'application/json',
    }
  })
    .then((res) => checkResponse(res))
}
