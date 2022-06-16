
const function1 = async () => {
    try {
        const init =
        {
            method: 'GET',
            headers: {
                Authorization: "ssssssssss",
                'Content-Type': 'application/json',


            }
        }

        let response = await fetch("www.html.com", init)
        const movie = response.json()
        /* movie.forEach((movieData) => {
             console.log(movieData.name)
             console.log(movieData.category)
 
         })
 */
        const movie1 = movie.map((movie) => {
            console.log(movie.name)
            console.log(movie.category)

        })
    }
    catch (error) {
        console.error(error)
    }
}


const mypromise = new promise(function(resolve,reject)
{
    let  i=10;
    if(i==10)
    {
        console.log("success")

    }

    else
    {
        console.log("fail")
    }
    })
mypromise.then(resolve)
{
    console.log("value")
}
mypromise.then(reject)
{
    console.log("no")

}



const message = function (){
    console.log("print after 1 sec")
}
setTimeout(message,1000)



const addCard=async function(){
   {
    const optionstwo =
    {
        method:'GET',
        headers:
        {
            Authorization:"ssssssss",
            'Content-Type':'Application/json',
        }
    }
    let response=await fetch("www.hhhhh.com",optionstwo)
    const singleCard=response.json()
    console.log(singleCard)
   }
}


const AddCard=function Async()
{try{
    const data=
    {

        name:document.getElementById("name").value
    }
    const init1=
    {
        method:'POST',
        headers:
        {
            Authorization :"",
            'Content-Type':'Application/json',
        },
        body:json.stringify(data)
    }
let response=await fetch ("www.",init1)
const singleCard=response.json
console.log(singleCard)
}
catch(error)
{
    console.log(error)
}
}

const updateMovie=async() =>
{
    const data7 =
    {
        
        location:document.getElementById("location").value,

    }
    const opt=
    {
        method:'POST',
        headers:
        {
            Authorization:"ggjjjjjjkj",
            'Content-Type':'Apllication/json'
        },body:stringify.json(data7)

    }
    let res=await fetch("www.sssss.com",opt)
    const movieToUpdate= res.json()
    console.log(movieToUpdate)
}

const remove=async()=>
{
    const options5=
    {
        method:'DELETE',
        headers:
        {
            Authorization:"gggggdd",
            'Content-Type':'Apllication/json',
        }

    }
    let reponse6 =await fetch ("hhhhhhh",options5)
    const removeMovie=reponse6.json()
    console.log(removeMovie)

}

const addPaper=async()=>
{
    const options0={
        method:'GET',
        headers:
        {
            Authorization:"",
            'Content-Type':'Apllication/json',

        }

    }
    let response=await fetch("url",options0)
    const singlePper=response.json()
    console.log(singlePper)
}

const printPaper =async()=>
{
    const data10={
        name:document.getElementById("name")

    }
    const init5=
    {
        method:'POST',
        headers:
        {
            Authorization:"jjj",
            'Content-Type':'Application/json',
        },
        body:json.stringify(data10)
    }
    let getResponse1= await fetch("url",init5)
    const printPaper1=getResponse1.json()
    console.log(printPaper1)
}

const UpdatePper= async()=>
{
const data11={
    name:document.getElementById("name")

}
const init6=
{
    method:'PUT',
    headers:
    {
        Authorization:"jjj",
        'Content-Type':'Application/json',
    },
    body:json.stringify(data11)
}
let getResponse1= await fetch("url", +movieid,init6)
const printPaper1=getResponse1.json()
console.log(printPaper1)
}





const num2=[1,2,3,4,5,6]
num2.forEach(num=>
    {
        num*10
        console.log(num)
        
    })
    const num3=num2.map((num)=>
    {
        num*10
    })
    const num4=num2.filter(num=>num===5)
    const find=num2.find(num=>num>5)
    const findIndex=num2.findIndex(num=>num>5)

    




    const getMovies= async()=>
    {
        try{
        const init10={
            method:'GET',
            headers:{
                Authorization:"sss",
                'Content-Type':'Application/json',

            }
           

        }
        let response=await fetch("url",init10)
        const  res1=response.json()
        console.log(res1)
    }
    catch(error)
    {
        console.log(error)
    }
}



const postMovies= async()=>
    {
        try{
            const data =
            {
                name:document.getElementById("name").value
            }
        const init10={
            method:'POST',
            headers:{
                Authorization:"sss",
                'Content-Type':'Application/json',

            },
           body:json.stringify(data)

        }
        let response=await fetch("url",init10)
        const  res1=response.json()
        console.log(res1)
    }
    catch(error)
    {
        console.log(error)
    }
}


