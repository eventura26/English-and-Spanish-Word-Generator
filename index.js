let searchBtn = document.querySelector(`#search-btn`)
let randomBtn = document.querySelector(`#random-btn`)
let saveBtn = document.querySelector(`#save-btn`)
let definitionPop = document.querySelector(`#definition-pop`)
let wordBank = document.querySelector(`#word-bank`)
let keyOne = "059db44f-08b8-4243-b66d-5379a06a78b5"
let keySp = "e2b01471-48df-4301-8ab2-aee32aef513c"

let wordSearched = document.getElementById(`word-searched`)
let wordDefined = document.getElementById(`definition`)
let secondDefinition = document.getElementById(`definition-two`)
let imgBox = document.getElementById(`img-box`)

async function getData(event){
    event.preventDefault() 
    textInput = document.querySelector(`#search-bar`).value
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${textInput}?key=${keyOne}`
    const urlSp = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${textInput}?key=${keySp}`
  
    fetch(url)
    .then(res => {return res.json()})
    
    .then(res =>{
        const imgUrl = `https://www.merriam-webster.com/assets/mw/static/art/dict/${textInput}.gif`

        console.log(res)
        console.log(textInput)
        console.log(imgUrl)
        wordSearched.innerText = ` English: ${res[0].hwi.hw} - ${res[0].fl}`
        wordDefined.innerText = `1: ${res[0].shortdef[0]} `

        secondDefinition.innerText = ''
        secondDefinition.innerText = `2: ${res[2].shortdef[0]}`

        imgBox.innerHTML = ''
        imgBox.innerHTML = `<img src="${imgUrl}" height='270px' width="300px>`

        definitionPop.style.opacity = "1"
        imgBox.style.opacity = "1"
    })
    .catch(err =>{console.log(`error~`,err)})
    


//spanish api req below
    fetch(urlSp)
    .then(resSp => {return resSp.json()}) 
    .then(resSp => {
        console.log(resSp)
        let spTranslation = document.getElementById(`sp-trans`)
        spTranslation.innerText = ''
        spTranslation.innerText = `Spanish: 1. ${resSp[0].shortdef[0]} 2. ${resSp[1].shortdef[0]}`
    })
    .catch(errSp => {console.log(`error!`,errSp) })

}

// "random" word gen

async function getRandom(event){
    event.preventDefault()
    let randomArr = [`sortie`, `photosynthesis`, `triangle`,`developer`, `trademark`, `circle`, `buffalo`, `argument`, `parameter`, `chicken`, `disc`, `hyperbole`, `assassin`, `grazed`, `wound`, `radius`, `elephant`, `triumph`, `cow`, `wings`, `bridge`, `flabbergasted`, `dice`, `canary`]
    let randomIndex = Math.floor(Math.random() * randomArr.length)
    console.log(randomArr[randomIndex])    
    const imgUrl = `https://www.merriam-webster.com/assets/mw/static/art/dict/${randomArr[randomIndex]}.gif`
    const url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${randomArr[randomIndex]}?key=${keyOne}`
    const urlSp = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${randomArr[randomIndex]}?key=${keySp}`
    
    fetch(url)
    .then(res => {return res.json()})
    .then(res =>{
      
        console.log(res)
       
        wordSearched.innerText = ` English: ${res[0].hwi.hw} - ${res[0].fl}`
       
        wordDefined.innerText = `1: ${res[0].shortdef[0]}`
       
        secondDefinition.innerText = ''
        secondDefinition.innerText = `2: ${res[2].shortdef[0]}`
        
        imgBox.innerHTML = ''
        imgBox.innerHTML = `<img src=${imgUrl} height="270px" width="300px">`
       
        definitionPop.style.opacity = "1"
        imgBox.style.opacity = "1"
        imgBox.addEventListener("error", function() {
            imgBox.style.display ="none"
        })

    })
    .catch(err =>{console.log(`error~`,err)})



//spanish api req below
    fetch(urlSp)
    .then(resSp => {return resSp.json()}) 
    .then(resSp => {
        console.log(resSp)
        let spTranslation = document.getElementById(`sp-trans`) 
        spTranslation.innerText = ''
        spTranslation.innerText = `Spanish: 1. ${resSp[0].shortdef[0]} 2. ${resSp[1].shortdef[0]}`
    })
    .catch(errSp => {console.log(`error!`,errSp) })
}




searchBtn.onclick = getData
randomBtn.onclick = getRandom