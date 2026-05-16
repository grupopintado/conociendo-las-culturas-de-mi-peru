const culturesData = {
    chavin: {
        title: "Chavín",
        desc: "La cultura Chavín fue una de las primeras grandes civilizaciones del Perú antiguo. Se desarrolló en los Andes y destacó por su religión y arquitectura ceremonial.",
        objects: [
            "Cabezas clavas",
            "Lanzón monolítico",
            "Cerámica ceremonial",
            "Pututos de concha"
        ],
        context: "Su principal centro fue Chavín de Huántar. Influyó en muchas culturas posteriores del Perú.",
        img: "img/chavin.png"
    },
    paracas: {
        title: "Paracas",
        desc: "La cultura Paracas destacó por sus avanzados textiles y conocimientos médicos.",
        objects: [
            "Mantos Paracas",
            "Cráneos trepanados",
            "Cerámica funeraria",
            "Instrumentos médicos antiguos"
        ],
        context: "Se desarrolló en la costa sur del Perú y es reconocida por sus técnicas funerarias.",
        img: "img/paracas.png"
    },
    nazca: {
        title: "Nazca",
        desc: "La cultura Nazca es conocida mundialmente por las Líneas de Nazca y su cerámica colorida.",
        objects: [
            "Cerámica policromada",
            "Textiles",
            "Instrumentos agrícolas",
            "Figuras de las Líneas de Nazca"
        ],
        context: "Habitaron la costa sur y desarrollaron importantes sistemas hidráulicos.",
        img: "img/nazca.png"
    },
    moche: {
        title: "Moche",
        desc: "La cultura Moche destacó por su metalurgia, cerámica y arquitectura monumental.",
        objects: [
            "Huacos retrato",
            "Máscaras de oro",
            "Cerámica escultórica",
            "Joyas ceremoniales"
        ],
        context: "Construyeron templos como la Huaca del Sol y la Huaca de la Luna.",
        img: "img/moche.png"
    },
    tiahuanaco: {
        title: "Tiahuanaco",
        desc: "La cultura Tiahuanaco se desarrolló cerca del lago Titicaca y tuvo gran influencia religiosa.",
        objects: [
            "Puerta del Sol",
            "Monolitos",
            "Cerámica ritual",
            "Esculturas de piedra"
        ],
        context: "Fue uno de los principales centros ceremoniales de los Andes.",
        img: "img/tiahuanaco.png"
    },
    wari: {
        title: "Wari",
        desc: "La cultura Wari organizó uno de los primeros grandes estados andinos.",
        objects: [
            "Textiles geométricos",
            "Cerámica decorada",
            "Herramientas agrícolas",
            "Arquitectura urbana"
        ],
        context: "Expandieron su influencia por gran parte del territorio peruano.",
        img: "img/wari.png"
    },
    chimu: {
        title: "Chimú",
        desc: "La cultura Chimú destacó por su arquitectura de barro y trabajos en metal.",
        objects: [
            "Objetos de oro y plata",
            "Cerámica negra",
            "Adornos ceremoniales",
            "Maquetas de Chan Chan"
        ],
        context: "Su capital fue Chan Chan, una de las ciudades de barro más grandes del mundo.",
        img: "img/chimu.png"
    },
    inca: {
        title: "Inca",
        desc: "La civilización Inca fue el imperio más grande de América del Sur.",
        objects: [
            "Quipus",
            "Cerámica inca",
            "Herramientas agrícolas",
            "Objetos de oro"
        ],
        context: "Su capital fue Cusco y desarrollaron una extensa red de caminos.",
        img: "img/inca.png"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Generate particles
    const particlesContainer = document.getElementById('particles-bg');
    for(let i=0; i<30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 50 + 10;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particlesContainer.appendChild(particle);
    }

    const cards = document.querySelectorAll('.culture-card');
    const mainMenu = document.getElementById('main-menu');
    const cultureDetail = document.getElementById('culture-detail');
    const transitionOverlay = document.getElementById('transition-overlay');
    const backBtn = document.getElementById('back-btn');

    // Detail elements
    const detailTitle = document.getElementById('detail-title');
    const detailDesc = document.getElementById('detail-desc');
    const detailContext = document.getElementById('detail-context');
    const detailObjects = document.getElementById('detail-objects');
    const detailMainImg = document.getElementById('detail-main-img');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const cultureKey = card.getAttribute('data-culture');
            const data = culturesData[cultureKey];

            // Fill data
            detailTitle.textContent = data.title;
            detailDesc.textContent = data.desc;
            detailContext.textContent = data.context;
            detailMainImg.src = data.img;
            
            detailObjects.innerHTML = '';
            data.objects.forEach(obj => {
                const li = document.createElement('li');
                li.textContent = obj;
                detailObjects.appendChild(li);
            });

            // Cinematic transition
            transitionOverlay.classList.add('active');
            
            setTimeout(() => {
                mainMenu.classList.add('hidden');
                mainMenu.classList.remove('active');
                
                cultureDetail.classList.remove('hidden');
                
                // Allow display to register before fading in
                setTimeout(() => {
                    cultureDetail.classList.add('active');
                    transitionOverlay.classList.remove('active');
                }, 100);
                
            }, 800); // Wait for overlay to fade in
        });
    });

    backBtn.addEventListener('click', () => {
        transitionOverlay.classList.add('active');
        
        setTimeout(() => {
            cultureDetail.classList.remove('active');
            
            setTimeout(() => {
                cultureDetail.classList.add('hidden');
                mainMenu.classList.remove('hidden');
                
                setTimeout(() => {
                    mainMenu.classList.add('active');
                    transitionOverlay.classList.remove('active');
                }, 100);
            }, 800);
        }, 800);
    });
});
