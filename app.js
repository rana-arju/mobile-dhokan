const searchBtn = () => {
    const inputValue = document.getElementById("search-input").value;
    document.getElementById("search-input").value = "";
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(response => response.json())
        .then(data => showPhone(data.data));
}
const showPhone = data => {
    const container = document.getElementById("container");
    for (const info of data) {
        const div = document.createElement("div");
        div.className = "col-md-4 ";
        div.innerHTML = `
        <div class="card mb-3 mx-auto" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" width ="200px" height="100%">
                <div class="card-body">
                    <h5 class="card-title">Name: ${info.brand}</h5>
                    <p class="card-text">Model: ${info.phone_name}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary custom-btn rounded-pill" id ="details">Details</button>
                </div>
                </div>
        `;
        container.appendChild(div);
    }
}