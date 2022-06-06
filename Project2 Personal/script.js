const red = document.getElementById('red')
const blue = document.getElementById('blue')
const green = document.getElementById('green')
const circlesr = document.querySelectorAll('.circle.red')
const circlesb = document.querySelectorAll('.circle.blue')
const circlesg = document.querySelectorAll('.circle.green')
const hearts = document.querySelectorAll('.heart')
const start = document.getElementById('start')


let currentActive = -1
let count = 0
let life = 2
let holes =[]

red.disabled = false
blue.disabled = false
green.disabled = false

circlesr.forEach(()=>{
    holes[count]= Math.floor(Math.random() * 3) +1
    count++ 
  })

start.addEventListener('click', ()=>{
    location.reload(true)
})

red.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>=circlesr.length){
        disableButtons()
    }
    updater()
})

blue.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>=circlesb.length){
        disableButtons()
    }
    updateb()
})

green.addEventListener('click', ()=>{
    currentActive++
    if(currentActive>=circlesg.length){
        disableButtons()
    }
    updateg()
})


function updater(){
    circlesr.forEach((circlesr,idx)=>{
        if (holes[idx]==1 && currentActive==idx){
            updateLife()
            circlesr.classList.add('hole')
        }else{             
             if(idx ==currentActive){
                circlesr.classList.add('active')
            }else{
                 circlesr.classList.remove('active')
                 circlesg.forEach((circlesg)=>{circlesg.classList.remove('active')})
                 circlesb.forEach((circlesb)=>{circlesb.classList.remove('active')})
        }}
    })
}

function updateb(){
    circlesb.forEach((circlesb,idx)=>{
        if (holes[idx]==2 && currentActive==idx){
            updateLife()
            circlesb.classList.add('hole')
        }else{
        if(idx ==currentActive){
            circlesb.classList.add('active')
        }else{
            circlesb.classList.remove('active')
            circlesg.forEach((circlesg)=>{circlesg.classList.remove('active')})
            circlesr.forEach((circlesr)=>{circlesr.classList.remove('active')})
        }}
    })
}

function updateg(){
    circlesg.forEach((circlesg,idx)=>{
        if (holes[idx]==3 && currentActive==idx){
            updateLife()
            circlesg.classList.add('hole')
        }else{
        if(idx == currentActive){
            circlesg.classList.add('active')
        }else{
            circlesg.classList.remove('active')
            circlesr.forEach((circlesr)=>{circlesr.classList.remove('active')})
            circlesb.forEach((circlesb)=>{circlesb.classList.remove('active')})
        }}
    })
}

function updateLife(){
    currentActive = -1
    life--
    hearts.forEach((hearts,idx)=>{
        if(life<idx){
            hearts.classList.add('empty')
        }
    })
        if(life==-1){
            disableButtons()
        }
}

function disableButtons(){
    red.disabled = true
    blue.disabled = true
    green.disabled = true
}