let scrollContainer = document.querySelector(".gallery")
let next = document.getElementById('next')
let back = document.getElementById('back')

scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault()
    scrollContainer.scrollLeft += evt.deltaY
    scrollContainer.style.scrollBehavior = 'auto'
})

next.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 900
})

back.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 900
})