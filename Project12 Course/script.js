const btnToggle = document.querySelectorAll('.faq-toggle')

btnToggle.forEach((faqtoggle)=>{
    faqtoggle.addEventListener('click',()=>{
        faqtoggle.parentNode.classList.toggle('active')
    })
})