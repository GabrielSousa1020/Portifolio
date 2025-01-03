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
        titulo: "Suporte Tecnico",
        habilidades: [
            { nome: "Windows", porcentagem: 80 },
            { nome: "Linux", porcentagem: 40 },
            { nome: "Redes", porcentagem: 60 },
            { nome: "Hardware", porcentagem: 80 },
            { nome: "Software", porcentagem: 100 },
            { nome: "Análise", porcentagem: 90 },
            { nome: "Comunicação", porcentagem: 100 },
        ],
    },
    {
        titulo: "Pacote Office",
        habilidades: [
            { nome: "Microsoft Word", porcentagem: 60 },
            { nome: "Microsoft Excel", porcentagem: 70 },
            { nome: "Microsoft PowerPoint", porcentagem: 50 },
            { nome: "Microsoft Outlook", porcentagem: 80 },
            { nome: "Microsoft Access", porcentagem: 50 },
            { nome: "Microsoft OneNote", porcentagem: 40 },
            { nome: "Microsoft Teams", porcentagem: 100 },
    
    
        ],
    },
    {
        titulo: "Front-End",
        habilidades: [
            { nome: "HTML", porcentagem: 80 },
            { nome: "CSS", porcentagem: 60 },
            { nome: "JavaScript", porcentagem: 70 },
            { nome: "React", porcentagem: 50 },
        ],
    },
    {
        titulo: "Back-End",
        habilidades: [
            { nome: "C#", porcentagem: 75 },
            { nome: "Python", porcentagem: 50 },
            { nome: "SQL Server", porcentagem: 85 },
        ],
    },
    {
        titulo: "Gestão de Acessos",
        habilidades: [
            { nome: "Gestão", porcentagem: 90 },
            { nome: "LGPD", porcentagem: 70 },
            { nome: "ISO270001", porcentagem: 60 },
    
        ],
    },
    {
        titulo: "DevOps",
        habilidades: [
            { nome: "Ferramentas", porcentagem: 40 },
    
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

document.getElementById("telefone").addEventListener("input", function(event) {
    // Substitui tudo que não for número por vazio
    event.target.value = event.target.value.replace(/\D/g, '');
});

// Obtenha o formulário e a mensagem de sucesso
const formContato = document.getElementById('form-contato');
const sucessoMessage = document.getElementById('sucessoMessage');

// Adiciona o evento de envio no formulário
formContato.addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário para que possamos redirecionar

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const descricao = document.getElementById('descricao').value;
    
    // Substitua "seunumerowhatsapp" pelo seu número no WhatsApp (com o código do país)
    const whatsappLink = `https://api.whatsapp.com/send?phone=5561994573298?text=Nome:%20${encodeURIComponent(nome)}%0AE-mail:%20${encodeURIComponent(email)}%0ATelefone:%20${encodeURIComponent(telefone)}%0ADescrição:%20${encodeURIComponent(descricao)}`;

    // Exibe a mensagem de sucesso
    sucessoMessage.style.display = 'block';

    // Limpa os campos do formulário
    formContato.reset();

    // Opcional: Ocultar a mensagem de sucesso após 3 segundos
    setTimeout(function() {
        sucessoMessage.style.display = 'none';
    }, 3000);

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
});

function animarBarras() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                categorias.forEach((categoria, categoriaIndex) => {
                    const elementosCategoria = document.querySelectorAll('.categoria')[categoriaIndex];
                    const habilidadesElementos = elementosCategoria.querySelectorAll('.habilidade');

                    categoria.habilidades.forEach((habilidade, habilidadeIndex) => {
                        const barra = habilidadesElementos[habilidadeIndex].querySelector('.barra');
                        const porcentagemSpan = habilidadesElementos[habilidadeIndex].querySelector('.porcentagem');

                        let progressoAtual = 0; // Começa em 0
                        const progressoFinal = habilidade.porcentagem; // Define o valor final
                        const intervalo = 20; // Intervalo de tempo entre cada incremento (em ms)
                        const incremento = progressoFinal / (2000 / intervalo); // Incremento proporcional ao tempo total (2 segundos)

                        // Reseta a barra e o texto
                        barra.style.width = "0%";
                        porcentagemSpan.textContent = "0%";

                        // Animação da barra e porcentagem
                        const progresso = setInterval(() => {
                            progressoAtual += incremento;

                            if (progressoAtual >= progressoFinal) {
                                progressoAtual = progressoFinal; // Garante que não ultrapasse o limite
                                clearInterval(progresso); // Finaliza o intervalo
                            }

                            barra.style.width = `${progressoAtual}%`; // Atualiza a largura da barra
                            porcentagemSpan.textContent = `${Math.round(progressoAtual)}%`; // Atualiza o texto da porcentagem
                        }, intervalo);
                    });
                });

                observer.disconnect(); // Desconecta o observer para evitar animações repetidas
            }
        });
    });

    const habilidadesSection = document.querySelector("#habilidades");
    observer.observe(habilidadesSection);
}

function trocarImagem(elemento) {
    const img = elemento.querySelector('img');
    const versoSrc = img.src.replace('-frente', '-verso'); // Substitui "frente" por "verso"
    img.src = versoSrc; // Troca a imagem para verso
  }
  
  function restaurarImagem(elemento) {
    const img = elemento.querySelector('img');
    const frenteSrc = img.src.replace('-verso', '-frente'); // Substitui "verso" por "frente"
    img.src = frenteSrc; // Restaura a imagem para frente
  }
  
