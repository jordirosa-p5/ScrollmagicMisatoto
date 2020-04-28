let controller = new ScrollMagic.Controller();

//Núvols
let animacio1 = new TimelineMax();
animacio1.fromTo("#cosaQueEsMou1", 1, {
        top: "40vh",
        left: "25%",
        scale: 0
    }, {
        top: 1500,
        left: "130%",
        scale: 2.2
    })
    .fromTo("#cosaQueEsMou2", 1, {
        top: "40vh",
        left: "28%",
        scale: 0
    }, {
        top: 2000,
        left: "230%",
        scale: 2.5
    }, 0)
    .fromTo("#cosaQueEsMou3", 1, {
        top: "40vh",
        left: "26%",
        scale: 0
    }, {
        top: 2500,
        left: "100%",
        scale: 1.78
    }, 0)
    .fromTo("#cosaQueEsMou4", 1, {
        top: "40vh",
        left: "18%",
        scale: 0
    }, {
        top: 2500,
        left: "-98%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou5", 1, {
        top: "40vh",
        left: "20%",
        scale: 0
    }, {
        top: 3214,
        left: "-110%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou6", 1, {
        top: "40vh",
        left: "18%",
        scale: 0
    }, {
        top: 1105,
        left: "-50%",
        scale: 2
    }, 0)
    .fromTo("#cosaQueEsMou7", 1, {
        top: "40vh",
        left: "25%",
        scale: 0
    }, {
        top: 2500,
        left: "-260%",
        scale: 3
    }, 0);

new ScrollMagic.Scene({
        triggerElement: "#contingut",
        triggerHook: 0,
        duration: 3000
    })
    .setTween(animacio1)
    //.addIndicators()
    .addTo(controller);



//
//Animacions Mapa .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
//

//Aquesta primera escena és només per fer el pin quan el section arribi adalt de tot
//La duració serà al menys de la suma de totes les següents
new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 5500
    })
    .setPin("#terra")
    //.addIndicators({name: "pineja terra"})
    .addTo(controller);



//Animació per fer que el mapa roti i puji
//Té el triggerhook=1 (avall) per què comenci a fer-la des què comença a aparèixer el div
let animRotaMapa = TweenMax.fromTo("#totesImg", 1, {
    top: "100%",
    rotationX: "180",
}, {
    top: "0%",
    rotationX: "0"
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 1,
        duration: 1000,
        ease: Power4.easeIn
    })
    .setTween(animRotaMapa)
    //    .addIndicators({name: "entra mapa"})
    .addTo(controller);



//Animació per apropar-nos on és el drac
//Comença quan el div del mapa s'acaba de mostrar sencer (trigerHook = 0) i dura 1000px
let animZoomInDrac = TweenMax.to("#totesImg", 1, {
    scale: 15,
    x: 200,
    y: 20
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 1000,
        ease: Power4.easeIn
    })
    .setTween(animZoomInDrac)
    //.addIndicators({name: "zoomDrac"})
    .addTo(controller);



//Animació infinita del moviment del drac. Aquesta no va vinculada a l'scroll,
// per això no es fica dins cap escena, i hem de fer play() per posar-la en marxa
let animacioCapDrac = new TimelineMax()
animacioCapDrac.fromTo("#capDrac", 2, {
    left: "44%"
}, {
    left: "48%",
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});
animacioCapDrac.play();



//Animació per mostrar el text del drac (d'abaix cap a adalt)
// Fem que comenci com l'anterior però sumant 1000 d'offset (el què durava l'anterior animació)
let animTextDracEntra = TweenMax.fromTo("#textDrac", 1, {
    top: "50%",
    opacity: 0
}, {
    top: "10%",
    opacity: 1
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 500,
        offset: 1000,
        ease: Power4.easeIn
    })
    .setTween(animTextDracEntra)
    //.addIndicators({name: "mostra text drac"})
    .addTo(controller);



//Animació per amagar el text del drac adalt de tot
//L'anterior animació començava al offset 1000 i durava 500 (=1500). Fem que aquesta comenci al 1700 per què tingui 200px de pausa
let animTextDracSurt = TweenMax.to("#textDrac", 1, {
    top: "-10%",
    opacity: 0
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 500,
        offset: 1700,
        ease: Power4.easeIn
    })
    .setTween(animTextDracSurt)
    //.addIndicators({name: "amaga text drac"})
    .addTo(controller);



//Animació per moure'ns fora del drac: scale més petit (de 20 a 3) i pujem una mica
//L'anterior començava a 1700px i durava 500px (2200px) => Aquesta comença a 2200.
let animZoomOutDrac = TweenMax.to("#totesImg", 1, {
    x: -400,
    y: 200,
    scale: 3
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 1000,
        offset: 2200,
        ease: Power4.easeIn
    })
    .setTween(animZoomOutDrac)
    //.addIndicators({name: "mov esq"})
    .addTo(controller);



//Animació per apropar-nos a les venedores
//En aquest cas no volem fer pausa respecte a l'escena anterior. Era 2200+1000 =>> comencem a 3200px
let animZoomInBotiga = TweenMax.to("#totesImg", 1, {
    scale: 16,
    x: -2500,
    y: 2000
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 1000,
        offset: 3200,
        ease: Power4.easeIn
    })
    .setTween(animZoomInBotiga)
    //.addIndicators({name: "zoom cap a la botiga"})
    .addTo(controller);



//Animació final per mostrar el mapa sencer abans de sortir d'aquesta secció
// Volem 300px de pausa respecte l'anterior escena. L'anterior començava a 3200px d'offset i durava 1000 => acabava a 4200px. 4200+300 de pausa => comencem a 4500
let animZoomOutBotiga = TweenMax.to("#totesImg", 1, {
    scale: 1,
    x: 0,
    y: 0
});

new ScrollMagic.Scene({
        triggerElement: "#terra",
        triggerHook: 0,
        duration: 1000,
        offset: 4500,
        ease: Power4.easeIn
    })
    .setTween(animZoomOutBotiga)
    //.addIndicators({name: "zoom enrera botiga"})
    .addTo(controller);

// Aquesta escena començava al punt 4500 d'offset respecte a l'inici d'estar el div adalt de tot, i dura 1000px. Llavors, el pinejat ha de ser com a mínim de 5500. 
