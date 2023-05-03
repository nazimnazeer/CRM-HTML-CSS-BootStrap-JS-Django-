const theme =document.querySelector('.theme-toggler')
// const theme1 =document.querySelector('.theme-toggler')

theme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variable');
    theme.querySelector('span:nth-child(1)').classList.toggle('active');
    // theme1.querySelector('span:nth-child(2)').classList.toggle('active');
})

// ====================login popup start===================

// ====================login popup end===================

