/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.title', {delay: 300})

/*SCROLL HOME*/
sr.reveal('.text-1', {delay: 300})
sr.reveal('.text-2', {delay: 300})
sr.reveal('.text-3', {delay: 300})

/*SCROLL ABOUT*/

sr.reveal('.about_srollanimation', {delay: 500})
sr.reveal('p', {origin:'left', delay: 500})

/*SCROLL SKILLS*/
sr.reveal('.fas', {delay: 500})



/*SCROLL CONTACT*/
sr.reveal('.skills_lang_srollanimation', {interval: 200})
sr.reveal('.skills_persen_scrollanimation', {origin:'left', interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*contact section start*/
sr.reveal('.head', {interval: 200})
sr.reveal('.sub-title', {origin:'left', interval: 200})

