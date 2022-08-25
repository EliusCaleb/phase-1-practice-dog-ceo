//console.log('%c HI', 'color: firebrick')
document.addEventListener('click', handleClick)
function getImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElemnt(imgs)
        renderImg(imgsArray)
    })    
}

function createImgElemnt(imgs){
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
        const breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)

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
        renderLis(element)
    })
}



function handleClick(){
    event.target.style.color = 'red'
}

//getImages()
dogBreed()
    
        



    