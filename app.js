const getCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const item =  res.json()
    console.log(item)
}