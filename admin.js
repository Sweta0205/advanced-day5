const addMovies = async (event) => {
    event.preventDefault();

    try {
        const data = {
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            category: document.getElementById('category').value,
            imageUrl: document.getElementById('imageUrl').value,
        };
        alert(document.getElementById('name').value)
        const options = {
            method: 'POST',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", options)
        const singleProduct = await response.json()
        console.log(singleProduct)

    }
    catch (error) {
        console.error(error);
    }





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
              <div class="card-body">
              <p class="card-text"> ${singleMovie.category} </p>
              <h3 class="card-title" >${singleMovie._id}</h3>
            <h5 class="card-title" >${singleMovie.name}</h5>
                  <button class="edit" type="button" onclick="editClickFunction(event)" id="edit">Edit</button>
                  <button class="delete" type="button" onclick="deleteMovie(event)" id="delete">Delete</button>

                 
      
              </div>
          </div>
      </div>
      `
        //finish fetch using async wait

    }
}


async function deleteMovie(event) {
     let movieId = event.target.closest(".card").querySelector("h3").innerHTML
    alert(movieId)
   
    const headersData = {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
        'Content-Type': 'application/json',
      }
  
    }
    const response = await fetch('https://striveschool-api.herokuapp.com/api/movies/' + movieId, headersData)
    const deleteMovie = await response.json()
    alert(deleteMovie)
  
  };