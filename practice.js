
const arrOfNum = [1, 3, 9, 5, 578, 0, 99, 2198];
const foundIndex = arrOfNum.findIndex(num => num === 0);
console.log("foundIndex "+foundIndex);


const mappedElements = arrOfNum.map(num => num * 2);
console.log(mappedElements)
const mappedElements2 = arrOfNum.map(num => ({ number: num * 2 }));
console.log(mappedElements2)


const arrOfNum1 = arrOfNum.filter(num => num > 3);
console.log(arrOfNum1)


const find = arrOfNum.find(num => num > 1);
console.log(find);
const listItems = arrOfNum.map(num => `<li> number: ${num} </li>`);
console.log(listItems) 
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const array2 = [1, 4, 9, 16];

const map1 = array2.map(x => x * 2);

const array3 = [1, 2, 3, 4, 5];


console.log(map1);
// expected output: A




const init = {
    method: `GET`,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",


    }

}
async function addMovies() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", init)
        const movies = await response.json()
        for (let i = 0; i < movies.length; i++) {
            const singleMovie = movies[i]
            console.log(singleMovie)
            let row = document.querySelector("row")
            row.innerhtml += `
<div class='col' >
    <div class='card '
    <img src="img url" =${singleMovie.url}>
<div class='card body'

<h1 class="card title"> ${singleMovie.category}</h1>
<p>card description ${singleMovie.description}</p>




</div>   

`
        }

    }

    catch (error) {
        console.error(error)
    }
}


async function getResponse() {
    try {
        const data = {
            name: document.getElementById("name").value,
            description: document.getElementById("description").value,
            imageUrl: document.getElementById("ImageUrl").value,
            category: document.getElementById("category").value



        }
        const options =
        {
            method: 'POST',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
                'content type': 'text/JSON',
                body: JSON.stringify(data),

            }
        }
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", options)
        const singleMovie = response.json()
        console.log(singleMovie)


    }

    catch (error) {
        console.error(error)
    }
}


const options1 = {
    method: 'PUt',

    headers: {

        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
            'content type': 'text/JSON'

        }
    }


function edit() {

    const name = new URLSearchParams(window.location.search).get("name")
    document.getElementById("name").value = name
}
async function movieEdit() {

    try {
        const data1 = {
            name: document.getElementById("name").value,
            category: document.getElementById("category").value,
            imageUrl: document.getElementById("imageUrl").value,
            description: document.getElementById("decription").value

        }
        const options1 = {
            method: 'PUT',
            headers: {
                  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

                    'Content-Type': 'application/JSON',
            body: stringify.JSON(data1)
        }

    }
            let response = await fetch("https://striveschool-api.herokuapp.com/api/movies/", options1)
    const singleMovie = response.json()
    console.log(singleMovie)

}

    
    catch (error) 
    { console.error(error) }
}

async function remove()
{
    try {
        const options2 ={
            method: 'DELETE',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
                'Content-Type': 'application/JSON',
        }}
        const response = await fetch("", +movieId, options2)
        const singleMovie = response.json()
        console.log(singleMovie)

    }
    catch (error) {
        console.error(error)
    }}




    const timer = ms =>new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });

timer(1000)
  .then(() => {
    console.log("Resolved after 1s");
    return timer(3000);
  })
  .then(() => console.log("Resolved after 4s"))
  .then(() => timer(1000))
  .then(() => console.log("Resolved after 5s"))
  .catch(() => console.log("error happened"));

console.log("immediately");
