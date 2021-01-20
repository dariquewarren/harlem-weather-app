const weatherForm = document.querySelector('form')

const searchElement = document.querySelector('input')
const mainDiv = document.getElementById('mainDiv')

const weatherImage = document.getElementById('weatherImage')
const detailedInfo = document.getElementById('detailedInfo')
const detailedInfoSummary = document.getElementById('detailedInfoSummary')

const weatherLocation = document.getElementById('weatherLocation')



weatherForm.addEventListener('submit', (e)=>{
e.preventDefault()


var location = searchElement.value
mainDiv.textContent = `..TRYING..TO..GET..WEATHER..`
fetch(`/weather?address=${location}`).then((response)=> {
    
    
    response.json().then((data)=>{
       if (data.error) {
       return    locationInfo.textContent = `${data.error}`
       }
       const weatherSnippets = {...data.body}
       const weatherArray = Object.entries(data.body)
       // create weather info here
    mainDiv.innerHTML = ''
// weather info h3
const temperatureParagraph = document.createElement('p')
// locationInfo h6
weatherImage.style = 'height:6rem; width:6rem;'
weatherImage.src = weatherSnippets.weather_icons[0]  
temperatureParagraph.textContent = `${weatherSnippets.temperature}${String.fromCharCode(176)}F / Feels like ${weatherSnippets.feelslike}${String.fromCharCode(176)}F / Wind:${weatherSnippets.wind_speed}MPH `
temperatureParagraph.style = 'border:2px solid red;'


let ddw = []
mainDiv.appendChild(temperatureParagraph)
       // takes weathericon fro object of object and sends it to image tag inside index.html
    let i = 0
 
    for (i; i< weatherArray.length; i ++){
if(typeof weatherArray[i][1] !== 'array'){
    
ddw.push(`${weatherArray[i][0]} ========= ${weatherArray[i][1]}`)
}else{
ddw.push(`${weatherArray[i][0]} ========= ${weatherArray[i][1][0]}`)
}
    }

    console.log('ddw', ddw)
    ddw.map((m)=>{
let weatherDetail = document.createElement('li')
weatherDetail.textContent = `${m}`
weatherLocation.textContent = `Weather for ${data.location}`
detailedInfo.append(weatherDetail)
    })
    detailedInfoSummary.textContent =`Detailed weather information (scrollable)`
detailedInfo.style = "height: 80px; overflow:scroll; border: 2px solid black"
       console.log('testbody weatherSnippets', weatherSnippets)
       console.log('testbody weatherArray', weatherArray)
       console.log('testbody weatherArray keys', Object.keys(data.body))
console.log('data', data.location)

})
})  

})


