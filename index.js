let botones = document.querySelectorAll('button')
console.log(botones)
let clic1 = botones[1].addEventListener('click',function(e){
    e.preventDefault();
    botones[1].style = 'background-color:#0A3871;color:#fff'
    botones[0].style = 'background-color:#D8DFE8;color:#0A3871'
})
let clic2 = botones[0].addEventListener('click',function(e){
    e.preventDefault();
    botones[0].style = 'background-color:#0A3871;color:#fff'
    botones[1].style = 'background-color:#D8DFE8;color:#0A3871'
})


