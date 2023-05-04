const theme =document.querySelector('.theme-toggler')
// const theme1 =document.querySelector('.theme-toggler')

theme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variable');
    theme.querySelector('span:nth-child(1)').classList.toggle('active');
    // theme1.querySelector('span:nth-child(2)').classList.toggle('active');
})

// ====================Student info popup start===================
const view= document.querySelector('.stbtn')
const close1= document.querySelector('.last')
const previewsection=document.querySelector('.info-form')
view.addEventListener('click', ()=>{
  previewsection.style.display='flex'
})
close1.addEventListener('click', ()=>{
  previewsection.style.display='none'
  console.log("clicked")
})
// ====================login popup end===================

const scrollSpy = new info-form.ScrollSpy(document.body, {
    target: 'form'
  })