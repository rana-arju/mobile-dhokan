// Main Api Call whare passign name
const searchBtn = () => {
    const inputValue = document.getElementById("search-input").value;
    document.getElementById("search-input").value = "";
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`)
        .then(response => response.json())
        .then(data => showPhone(data.data.slice(1,21)));
}
// api result Show

const showPhone = data => {
    const container = document.getElementById("container");
    container.textContent = "";
    if (data.length != 0) {
    error.innerHTML = "";
    for (const info of data) {
        const div = document.createElement("div");
        div.className = "col-md-4 ";
        div.innerHTML = `
        <div class="card mb-3 mx-auto" style="width: 18rem;">
            <img src="${info.image}" class="card-img-top" width ="200px" height="100%">
                <div class="card-body">
                    <h5 class="card-title">Brand: ${info.brand}</h5>
                    <p class="card-text">Model: ${info.phone_name}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary custom-btn rounded-pill" onclick="phoneDetails('${info.slug}')">Details</button>
                </div>
                </div>
        `;
        container.appendChild(div);
    }
}else{
    const error = document.getElementById("error");
    error.innerHTML = `<h2 class= "text-center text-danger">Oops!😥😪😢 Your Search Result Not Found!</h2>`;
}
}

// Phone Details Show Here
const phoneDetails = slug => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(response => response.json())
    .then(data => detailsId(data.data));
}
const detailsId = id => {
    const details = document.getElementById("details");
    details.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0" >
        <div class="col-md-4">
            <img src="${id.image}" class="img-fluid rounded-start" alt="">
            </div>
        <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Model: ${id.name}</h5>
            <h6 class="card-title">Brand: ${id.brand}</h6>
            <p> <i>Released Date:</i> ${id.releaseDate ? id.releaseDate : "Release Date Not Found"}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-primary"><h5>Main Feature</h5></li>
            <li class="list-group-item"><h6>Storage:</h6> ${id.mainFeatures.storage}</li>
            <li class="list-group-item"><h6>Display Size:</h6> ${id.mainFeatures.displaySize}</li>
            <li class="list-group-item"><h6>Ram:</h6> ${id.mainFeatures.memory}</li>
            </ul>
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-primary" id ="sensor"><h5>${id.name} Specification</h5></li>
            <li class="list-group-item">1) ${id.mainFeatures.sensors[0] ? id.mainFeatures.sensors[0]: "No more Info"}</li>
            <li class="list-group-item">2) </h5> ${id.mainFeatures.sensors[1] ? id.mainFeatures.sensors[1]: "No more Info"}</li>
            <li class="list-group-item">3) ${id.mainFeatures.sensors[2] ? id.mainFeatures.sensors[2]: "No more Info"}</li>
            <li class="list-group-item">4) ${id.mainFeatures.sensors[3] ? id.mainFeatures.sensors[3]: "No more Info"}</li>
            <li class="list-group-item">5) ${id.mainFeatures.sensors[4] ? id.mainFeatures.sensors[4]: "No more Info"}</li>
            <li class="list-group-item">6) ${id.mainFeatures.sensors[5] ? id.mainFeatures.sensors[5]: "No more Info"}</li>
            
            </ul>
            <ul class="list-group list-group-flush">
            <li class="list-group-item text-primary" id ="sensor"><h5>${id.name} Others</h5></li>
            <li class="list-group-item">WLAN: ${id.others.WLAN ? id.others.WLAN: "Not Found"}</li>
            <li class="list-group-item">Bluetooth: </h5> ${id.others.Bluetooth ? id.others.Bluetooth: "Not Found"}</li>
            <li class="list-group-item">GPS: ${id.others.GPS ? id.others.GPS: "Not Found"}</li>
            <li class="list-group-item">NFC: ${id.others.NFC ? id.others.NFC: "Not Found"}</li>
            <li class="list-group-item">Radio: ${id.others.Radio ? id.others.Radio: "Not Found"}</li>
            <li class="list-group-item">USB: ${id.others.USB ? id.others.USB: "Not Found!"}</li>
            </ul>
            </div>
        </div>
    </div>
    `;


}