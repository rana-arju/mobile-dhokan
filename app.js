const searchBtn = () => {
    const inputValue = document.getElementById("search-input").value;
    document.getElementById("search-input").value = "";
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(response => response.json())
        .then(data => showPhone(data.data));
}