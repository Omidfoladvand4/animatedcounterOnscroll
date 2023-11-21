let $ = document
const counters = $.querySelectorAll('.num')
let heroContainer = $.querySelector('.hero')
let startCounter = false
console.log();
window.addEventListener('scroll' , (e) => {

   if(window.scrollY >= heroContainer.offsetTop - 200){
    if(!startCounter){

        counters.forEach((counter) => setCounter(counter))
    
    }
    startCounter = true
   }
})

function setCounter(el){
    let elementNumCount = el.dataset.count
  let counterInterval =    setInterval(() => {

        el.textContent++
        if(el.textContent === elementNumCount){
            clearInterval(counterInterval)
        }

    } , 5)
}