function insertDropdown(categoryList) {
    var div = document.createElement('select');
    div.setAttribute("name", "platform");
    div.setAttribute("id", "select");
    for (let i = 0; i < categoryList.length; i++) {
        var option = document.createElement('option');
        option.setAttribute("value", categoryList[i])
        option.innerHTML = categoryList[i]
        div.appendChild(option)
    }
    document.getElementById('dropdown-container').appendChild(div)
}






const init = {
    method: 'GET',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

    }

}

window.onload = fetch("https://striveschool-api.herokuapp.com/api/movies", init)
    .then((response) => {
        return response.json(); // or .json() or .blob() ...
    })
    .then((categories) => {
        for (let i = 0; i < categories.length; i++) {
            const singleCategory = categories[i]

            getMovies(singleCategory)

        }
        insertDropdown(categories)
    })
    .catch((e) => {
        console.log(e) // error in e.message
    });



async function getMovies(movieCategory) {

    const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + movieCategory, init)
    const movies = await response.json()
    for (let i = 0; i < movies.length; i++) {
        const singleMovie = movies[i]

        console.log(singleMovie)
        let row = document.querySelector(".row")
        row.innerHTML += `
      
          <div class='col'> 
          <div class="card" style="width: 18rem;">
          <a href="./admin.html?movieId=${singleMovie._id}&category=${movieCategory}&description=${singleMovie.description}&imageUrl=${singleMovie.imageUrl}&name=${singleMovie.name}">


              <img id="img"src="${singleMovie.imageUrl}" class="card-img-top" alt="image not found">
              <div class="card-body">
              <p class="card-text"> ${singleMovie.category} </p>
              <h3 class="card-title" >${singleMovie._id}</h3>


            <h5 class="card-title" >${singleMovie.name}</h5>
                  <p class="card-text"> ${singleMovie.description} </p>
                  
                 
      
              </div>
          </div>
      </div>
      `
        //finish fetch using async wait

    }
}

const addClickFunction = (event) => {
    console.log("print" + event)
    let clickedBookTitle = event.target.closest(".card").querySelector("h3").innerHTML
    alert(clickedBookTitle)

    console.log(clickedBookTitle)


    const card1 = event.target.parentElement
    card1.classList.toggle("clicked-card")
}


