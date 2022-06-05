const panels = document.querySelectorAll('.panel')
const elementos = document.querySelectorAll('.panel_ele')

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
        if (panel_ele.classList.contains('pyro')){
       
            panels.forEach((panel)=>{
                if(panel.classList.contains('pyro'))
                panel.classList.add('visible') 
           })
       }
        if (panel_ele.classList.contains('hydro')){
       
            panels.forEach((panel)=>{
                if(panel.classList.contains('hydro'))
                panel.classList.add('visible') 
           })
       }
        if (panel_ele.classList.contains('electo')){
       
            panels.forEach((panel)=>{
                if(panel.classList.contains('electo'))
                panel.classList.add('visible') 
           })
       }
        if (panel_ele.classList.contains('cryo')){
       
            panels.forEach((panel)=>{
                if(panel.classList.contains('cryo'))
                panel.classList.add('visible') 
           })
       }
       if (panel_ele.classList.contains('anemo')){
       
        panels.forEach((panel)=>{
            if(panel.classList.contains('anemo'))
            panel.classList.add('visible') 
       })
      }
        if (panel_ele.classList.contains('geo')){
       
             panels.forEach((panel)=>{
                 if(panel.classList.contains('geo'))
                 panel.classList.add('visible') 
            })
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

