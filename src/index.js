console.log('%c HI', 'color: firebrick')
//let contain = document.querySelector("#dog-image-container");
//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//const dogs = document.getElementById('dog-breeds')
//dogs.addEventListener('click', handleClick)
//let breedsArray= []

function getImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderImg(imgsArray)
    })    
}

function createImgElement(imgs){
  return  imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
   })
}

function renderImgs(imgsArray){
    imgsArray.forEach(element  =>{
        renderImg(element)
    })
}
function renderImg(element){
    document.querySelector("#dog-image-container").innerHTML  += element 
}

function dogBreed(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(breeds => {
         breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLi(breedsLis)

        //let imgsArray = createImgElemnt(imgs)
       // renderImg(imgsArray)
    }) 
   
}
function createLiElement(breedsArray){
    return  breedsArray.map((breed) => {
          let li = `<li>${breed}</li>`
           
          return li
     })
}

function renderLis(breedsLis){
    breedsLis.forEach(element  =>{
        renderLi(element)
    })
}
function renderLi(element){
    document.querySelector("#dog-breeds").innerHTML  += element 
}
document.querySelector('#dog-breeds').addEventListener('click',handleClick)
function handleClick(e){
  if(e.target.style.color==='red'){
    e.target.style.color = 'black'
  }
  else{
    e.target.style.color = 'red'
  }  
}
document.querySelector('#breed-dropdown').addEventListener('change',handleChange)
function handleChange(e){
    const letter = e.target.value
    const filteredBreed = breedsArray.filter(breed => breed.startsWith(letter))
    // filter out the lest of the letter
    const filteredBreedsLis= createLiElement(filteredBreed)
    document.querySelector("#dog-breeds").innerHTML = ''
    renderLis(filteredBreedsLis)
}

//getImages()
dogBreed()
    
        



    