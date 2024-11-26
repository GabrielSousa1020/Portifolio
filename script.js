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

// Define o link ativo quando a página carrega
document.addEventListener('DOMContentLoaded', setActiveLink);

document.addEventListener("DOMContentLoaded", function () {
    // Defina as porcentagens para cada habilidade
    const habilidades = [
        { elemento: document.querySelector('.coluna:nth-child(1)'), porcentagem: 60 },
        { elemento: document.querySelector('.coluna:nth-child(2)'), porcentagem: 40 },
        { elemento: document.querySelector('.coluna:nth-child(3)'), porcentagem: 90 },
        { elemento: document.querySelector('.coluna:nth-child(4)'), porcentagem: 60 },
        { elemento: document.querySelector('.coluna:nth-child(5)'), porcentagem: 75 },
        { elemento: document.querySelector('.coluna:nth-child(6)'), porcentagem: 85 },
    ];

    // Definir as animações para cada barra
    habilidades.forEach(habilidade => {
        const { elemento, porcentagem } = habilidade;
        // Ajuste da altura da barra com base na porcentagem
        elemento.style.setProperty('--barra-altura', `${porcentagem}%`);
        
        // Exibe a porcentagem no topo da barra
        const span = elemento.querySelector('span');
        span.textContent = `${porcentagem}%`;

        // Adiciona a classe que inicia a animação de preenchimento
        setTimeout(() => {
            elemento.classList.add('animar');
        }, 100);
    });
});
