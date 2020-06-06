const weatherForm = document.querySelector('form')

const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = `Brought to you by JavaScript, handlebars, APIs, ExpressJS, and Mr. Darique D. Warren`
/*
Brought to you by JavaScript, handlebars, APIs, async/await, and Mr. Darique D. Warren

*/
weatherForm.addEventListener('submit', (e)=>{
e.preventDefault()

var location = searchElement.value
messageTwo.textContent = `..TRYING..TO..GET..WEATHER..`
fetch(`/weather?address=${location}`).then((response)=> {
    
    
    response.json().then((data)=>{
       if(data.error) {
       return    messageOne.textContent = `${data.error}`
       }
       messageOne.textContent = `${data.location}`
       messageTwo.textContent = `${data.forecast}`
       
})
})  
console.log(location)
})


