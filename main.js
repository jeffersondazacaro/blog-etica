// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarNav')
// const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// });

//-------- GSAP ANIMATIONS -------------

gsap.to('#ilustration', { 
    duration: 2,
    ease: "sine.out",
    y: -20,
    repeat:-1,
    yoyo:true,
    }
    );

console.log('hello')

const typed = new Typed('.typed', {
    strings: [
        '<i class="fw-bold text-light">Educación profesional a tu medida</i>',
        '<i class="fw-bold text-light">Alcanza tus objetivos profesionales</i>',
        '<i class="fw-bold text-light">Trabaja en el sector de TI</i>'],
    typeSpeed: 50, //volicidad en milisegundos para poner las letras
    startDealy: 300, //tiempo de retraso en iniciar la animacíon, aplica para cuando termina y vuelve a iniciar
    backSpeed: 65, // velocidad en milisegundos al borrar una letra
    backDelay: 900, // tiempo que la aplicación espera para que leas la palabra antes de borrarla
    loop: true, //reinicia el ciclo luego de terminarlo
    loopCount: false, // al ponerlo en false le estamos diciendo que se repita una cantidad onfinita de veces 
    contentType: 'html' // Es el formato en el que aparecera lo que se dijite si se pone null mostrara las etiquetas que se coloquen en htmls
});

ScrollReveal().reveal('.reveal', { reset: true, easing: 'ease-in'});