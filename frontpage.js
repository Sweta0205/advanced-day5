function insertDropdown(categoryList) {
    var select = document.createElement('select');
    select.setAttribute("name", "category");
    select.setAttribute("id", "category");
    select.setAttribute("onChange", "myFunction()");
    for (let i = 0; i < categoryList.length; i++) {
        var option = document.createElement('option');
        option.setAttribute("value", categoryList[i])
        option.innerHTML = categoryList[i]
        select.appendChild(option)
    }
    document.getElementById('dropdown-container').appendChild(select)
}



 function myFunction(){
   const category=document.getElementById("category");
   const value =category.options[category.selectedIndex].value
   let row = document.querySelector(".row")
   row.innerHTML =""
   getMovies(value)
}



const init = {
    method: 'GET',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

    }

}

window.onload = fetch("https://striveschool-api.herokuapp.com/api/movies", init)
    .then((response) => {
        return response.json();
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

    }
}

