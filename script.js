// Função para adicionar/remover a classe 'active' ao clicar nos links
const sections = document.querySelectorAll('section');  // Agora usa 'section' para pegar todas as seções
const navLinks = document.querySelectorAll('nav ul li a');

function setActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Verifica se a seção está visível na tela
        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Adiciona o ouvinte de evento para o scroll
window.addEventListener('scroll', setActiveLink);

// Adiciona a navegação por clique
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 80, // Para garantir que o conteúdo não fique atrás do cabeçalho
            behavior: 'smooth'
        });
    });
});

// Dados das categorias e habilidades
const categorias = [
    {
        titulo: "Front-End",
        habilidades: [
            { nome: "HTML", porcentagem: 90 },
            { nome: "CSS", porcentagem: 85 },
            { nome: "JavaScript", porcentagem: 75 },
            { nome: "React", porcentagem: 60 },
        ],
    },
    {
        titulo: "Back-End",
        habilidades: [
            { nome: "C#", porcentagem: 80 },
            { nome: "Python", porcentagem: 70 },
            { nome: "SQL Server", porcentagem: 85 },
        ],
    },
    {
        titulo: "DevOps",
        habilidades: [
            { nome: "Ferramentas", porcentagem: 50 },
    
        ],
    },
    {
        titulo: "Gestão de Acessos",
        habilidades: [
            { nome: "Gestão", porcentagem: 90 },
    
        ],
    },
];

function animarBarras() {
    categorias.forEach((categoria, categoriaIndex) => {
        const elementosCategoria = document.querySelectorAll('.categoria')[categoriaIndex];
        const habilidadesElementos = elementosCategoria.querySelectorAll('.habilidade');
        
        categoria.habilidades.forEach((habilidade, habilidadeIndex) => {
            const barra = habilidadesElementos[habilidadeIndex].querySelector('.barra');
            const porcentagemSpan = habilidadesElementos[habilidadeIndex].querySelector('.porcentagem');

            barra.style.width = `${habilidade.porcentagem}%`;
            porcentagemSpan.textContent = `${habilidade.porcentagem}%`;
        });
    });
}

window.addEventListener('DOMContentLoaded', animarBarras);
;

