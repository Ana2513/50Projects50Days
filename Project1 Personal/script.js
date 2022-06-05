const panels = document.querySelectorAll('.panel')
const elementos = document.querySelectorAll('.panel_ele')

var element

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

elementos.forEach((panel_ele)=>{
    panel_ele.addEventListener('click',()=>{
        removeVisibleClasses()
        removeActiveClasses()
        addDisableClasses()

        if (panel_ele.classList.contains('pyro')){
       
            elementsSelectClass('pyro')
       }
        if (panel_ele.classList.contains('hydro')){
       
            elementsSelectClass('hydro')
       }
        if (panel_ele.classList.contains('electo')){
       
            elementsSelectClass('electo')
       }
        if (panel_ele.classList.contains('cryo')){
       
            elementsSelectClass('cryo')
       }
       if (panel_ele.classList.contains('anemo')){
       
             elementsSelectClass('anemo')
        }
        if (panel_ele.classList.contains('geo')){
       
            elementsSelectClass('geo')
        }


    })
})

function removeActiveClasses() {
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

function removeVisibleClasses() {
    panels.forEach(panel=>{
        panel.classList.remove('visible')
    })
}

function addDisableClasses() {
    panels.forEach(panel=>{
        panel.classList.add('disable')
    })
}

function removeDisableClasses() {
    panels.forEach(panel=>{
        panel.classList.remove('disable')
    })
}

function elementsSelectClass(element){
    panels.forEach((panel)=>{
        if(panel.classList.contains(element)){
        panel.classList.remove('disable')  
        }
   })
}