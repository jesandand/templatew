/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*UTAMA*/
sr.reveal('.text', {delay: 200})
sr.reveal('.title', {delay: 300})


/*HOME SECTION*/
sr.reveal('.text-1', {origin:'left', delay: 300})
sr.reveal('.text-2', {origin:'left', delay: 300})
sr.reveal('.text-3', {origin:'left', delay: 300})


/*ABOUT SECTION*/
sr.reveal('.about_srollanimation', {delay: 500})
sr.reveal('p', {origin:'left', delay: 500})


/*SERVICE SECTION*/
sr.reveal('.fa-paint-brush', {delay: 200})
sr.reveal('.fa-chart-line', {delay: 200})
sr.reveal('.fa-code', {delay: 200})


/*SKILL SECTION*/
sr.reveal('.fas left', {delay: 500})


/*SCROLL CONTACT*/
sr.reveal('.skills_lang_srollanimation', {interval: 200})
sr.reveal('.skills_persen_scrollanimation', {origin:'left', interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*contact section start*/
sr.reveal('.head', {interval: 200})
sr.reveal('.sub-title', {origin:'left', interval: 200})

