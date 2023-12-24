const container = document.getElementById("container")
const getCountries = async() => {
    
    const url = 'https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const item =  await res.json()
    
    item.forEach(e => {
        createCard(e)
    });
}

const createCard = (data) => {
    const cardEl = document.createElement("div")
    cardEl.classList.add("country")
    const contentHtml = `
        <div class="img-container>
            <img src="${data.flag}"/>
        </div>
    `
}
getCountries()