//create an asynchronous function called start
//create a const variable called response and set it equal to await fetch(url)
//create a const variable called data and set it equal to await response.json()
//what data are you receiving back? console.log(data)
//add function for Breedlist
//Call start function

async function start(){
    const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
    const data = await response.json();

    createBreedList(data.message);
}

start();

//create creatBreedList function
//pass in breedList as parameter
//use getElementById to get ("breed") innerHTML
//use template literals to create dog breed drop down
//use Object class and keys methos to map breed
//add .join to make a list

function createBreedList(breedList){
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
    <option>Choose Dog Breed</option>
    ${Object.keys(breedList).map(function(breed){
        return `<option> ${breed}</option>`
    }).join(``)}
    </select>
    `

}


//add async function that responds to dog breed 
//check with alert
//set const response equal to await fetch with api
//set const data equal to await response.json()
//console.log(data)

async function loadByBreed(breed){
    alert(breed);
}