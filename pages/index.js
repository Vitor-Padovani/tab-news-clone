const page = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vitor Azevedo Padovani - Ciência da Computação</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 40px 0;
        }
        .resume-container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            box-shadow: 0 10px 50px rgba(0,0,0,0.2);
            border-radius: 15px;
            overflow: hidden;
        }
        .header-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 40px;
            text-align: center;
        }
        .header-section h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        .header-section .subtitle {
            font-size: 1.3rem;
            opacity: 0.9;
            margin-bottom: 20px;
        }
        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 25px;
            margin-top: 20px;
        }
        .contact-info a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
        }
        .contact-info a:hover {
            opacity: 0.7;
        }
        .section {
            padding: 50px 40px;
        }
        .section-title {
            font-size: 2rem;
            font-weight: 700;
            color: #667eea;
            margin-bottom: 30px;
            border-bottom: 3px solid #667eea;
            padding-bottom: 10px;
        }
        .experience-item, .project-item {
            margin-bottom: 40px;
            padding-left: 20px;
            border-left: 3px solid #764ba2;
        }
        .experience-title {
            font-size: 1.4rem;
            font-weight: 600;
            color: #333;
            margin-bottom: 5px;
        }
        .experience-meta {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 15px;
        }
        .experience-meta i {
            margin-right: 5px;
            color: #764ba2;
        }
        .skill-badge {
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            margin: 5px;
            font-size: 0.9rem;
        }
        .award-badge {
            background: #ffd700;
            color: #333;
            padding: 10px 20px;
            border-radius: 25px;
            display: inline-block;
            margin: 10px 10px 10px 0;
            font-weight: 600;
        }
        .lang-item {
            margin-bottom: 15px;
        }
        .lang-name {
            font-weight: 600;
            color: #333;
        }
        .lang-level {
            color: #666;
            font-style: italic;
        }
        @media (max-width: 768px) {
            .header-section h1 {
                font-size: 2rem;
            }
            .section {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="resume-container">
        <!-- Header -->
        <div class="header-section">
            <h1>Vitor Padovani</h1>
            <div class="subtitle">Pesquisador | Desenvolvedor</div>
            <div class="contact-info">
                <a href="mailto:vitor.azpadovani@gmail.com"><i class="fas fa-envelope"></i> vitor.azpadovani@gmail.com</a>
                <a href="http://linkedin.com/in/vitor-azevedo-padovani-55461122b"><i class="fab fa-linkedin"></i> LinkedIn</a>
                <a href="https://github.com/Vitor-Padovani"><i class="fab fa-github"></i> GitHub</a>
            </div>
        </div>

        <!-- About -->
        <div class="section" style="background-color: #f8f9fa;">
            <h2 class="section-title"><i class="fas fa-user"></i> Sobre Mim</h2>
            <p style="font-size: 1.1rem; line-height: 1.8; color: #555;">
                Sou estudante de último ano de Ciência da Computação na Universidade Estadual de Maringá, com paixão por pesquisa aplicada, desenvolvimento de software e tecnologias de imagem médica. Minha experiência abrange desde sistemas de coordenação multi-robôs e visão computacional até streaming de dados em tempo real para simulações neurocirúrgicas. Contribuí para digitalização na área da saúde, venci hackathons e conduzi pesquisa internacional no Canadá. Combino fortes habilidades técnicas em C++, Python e engenharia de dados com excelentes capacidades de comunicação e compromisso em criar soluções tecnológicas significativas.
            </p>
        </div>

        <!-- Experience -->
        <div class="section">
            <h2 class="section-title"><i class="fas fa-briefcase"></i> Experiência</h2>
            
            <div class="experience-item">
                <div class="experience-title">Estagiário de Pesquisa - Captura de Movimento em Tempo Real</div>
                <div class="experience-meta">
                    <i class="fas fa-building"></i> Montreal Neurological Institute-Hospital
                    <span class="mx-2">|</span>
                    <i class="fas fa-calendar"></i> Maio 2025 - Julho 2025
                    <span class="mx-2">|</span>
                    <i class="fas fa-map-marker-alt"></i> Montreal, QC
                </div>
                <p>Desenvolvi uma camada de comunicação personalizada em C++ substituindo o PLUS Toolkit, possibilitando troca de dados entre o software Motive da OptiTrack e o 3D Slicer via OpenIGTLink. A solução sustentou mais de 300 pacotes por segundo para rastreamento de movimento de baixa latência em simulações neurocirúrgicas. Integrei câmeras OptiTrack Flex 13 em um ambiente de treinamento de cirurgia cortical. Financiado por uma Bolsa de Pesquisa Mitacs do Governo do Canadá.</p>
            </div>

            <div class="experience-item">
                <div class="experience-title">Estagiário - Transformação Digital e Análise de Dados</div>
                <div class="experience-meta">
                    <i class="fas fa-building"></i> Hospital Universitário Regional de Maringá (HUM)
                    <span class="mx-2">|</span>
                    <i class="fas fa-calendar"></i> Outubro 2024 - Abril 2025
                    <span class="mx-2">|</span>
                    <i class="fas fa-map-marker-alt"></i> Maringá, PR
                </div>
                <p>Integrei uma equipe interdisciplinar para impulsionar a transformação digital na gestão hospitalar. Automatizei respostas de e-mail do Núcleo de Segurança do Paciente, reduzindo o tempo de resposta em 30%. Implementei sistemas de visualização de dados em tempo real para indicadores de segurança do paciente. Fortaleço habilidades em engenharia de dados, automação de processos, análise estatística e desenvolvi soft skills essenciais através da colaboração com profissionais de saúde.</p>
            </div>

            <div class="experience-item">
                <div class="experience-title">Pesquisador de Iniciação Científica - Coordenação Multi-Robôs</div>
                <div class="experience-meta">
                    <i class="fas fa-building"></i> Universidade Estadual de Maringá
                    <span class="mx-2">|</span>
                    <i class="fas fa-calendar"></i> Maio 2023 - Abril 2024
                    <span class="mx-2">|</span>
                    <i class="fas fa-map-marker-alt"></i> Maringá, PR
                </div>
                <p>Desenvolvi o Manna Bot-Eye, um sistema de coordenação centralizada de múltiplos robôs móveis usando visão computacional e comunicação sem fio via Bluetooth. Apliquei técnicas de processamento de imagem no espaço de cores HSV com OpenCV para identificação e estimativa de pose de robôs em tempo real. Implementei o pipeline completo de percepção, decisão e controle com módulos ESP32. Financiado pela Fundação Araucária.</p>
            </div>
        </div>

        <!-- Projects -->
        <div class="section" style="background-color: #f8f9fa;">
            <h2 class="section-title"><i class="fas fa-code"></i> Projetos em Destaque</h2>
            
            <div class="project-item">
                <div class="experience-title">Streaming de Nuvem de Pontos em Tempo Real para 3D Slicer</div>
                <div class="experience-meta">
                    <i class="fas fa-calendar"></i> 43ª Semana de Projeto NA-MIC, Junho 2025
                    <span class="mx-2">|</span>
                    <i class="fas fa-map-marker-alt"></i> Montreal, QC
                </div>
                <p>Desenvolvi um sistema de streaming de nuvem de pontos 3D em tempo real usando OpenIGTLink e OpenIGTLinkIO durante um hackathon de uma semana de imagem médica. Manipulei com sucesso visualização de nuvens de 900 pontos a ~30 FPS e datasets de até 100.000 pontos a ~60 FPS. Implementei e comparei múltiplas abordagens de streaming, demonstrando expertise em C++, bibliotecas VTK/ITK e visualização de alta performance.</p>
            </div>

            <div class="project-item">
                <div class="experience-title">Downloader e Gerenciador de Cursos Padre Paulo Ricardo</div>
                <div class="experience-meta">
                    <i class="fas fa-tag"></i> Projeto Pessoal - Engenharia de Dados e Automação Web
                </div>
                <p>Criei um pipeline robusto de aquisição automática de dados usando Python, Selenium WebDriver e BeautifulSoup4 para fazer scraping de conteúdo educacional de plataformas web dinâmicas. Projetei e implementei um workflow ETL local ingerindo dados em um banco SQLite estruturado. Desenvolvi uma CLI com capacidades de busca full-text FTS5 e algoritmos personalizados de ranqueamento para buscas de palavras-chave em milissegundos. Demonstrei expertise em engenharia de dados, automação web, design de banco de dados e indexação de busca.</p>
            </div>
        </div>

        <!-- Education -->
        <div class="section">
            <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Educação</h2>
            <div class="experience-item">
                <div class="experience-title">Bacharelado em Ciência da Computação</div>
                <div class="experience-meta">
                    <i class="fas fa-university"></i> Universidade Estadual de Maringá
                    <span class="mx-2">|</span>
                    <i class="fas fa-calendar"></i> Fevereiro 2022 - Presente
                    <span class="mx-2">|</span>
                    <i class="fas fa-map-marker-alt"></i> Maringá, PR
                </div>
                <p>Currículo abrangente cobrindo algoritmos, estruturas de dados, arquitetura de computadores, engenharia de software, bancos de dados, IA, aprendizado de máquina, sistemas distribuídos e IHC. Disciplinas avançadas em teoria computacional, computação gráfica, processamento digital de imagens, programação concorrente e otimização.</p>
            </div>
        </div>

        <!-- Skills -->
        <div class="section" style="background-color: #f8f9fa;">
            <h2 class="section-title"><i class="fas fa-tools"></i> Habilidades</h2>
            
            <h5 class="mb-3" style="color: #764ba2;">Proficiente</h5>
            <div class="mb-4">
                <span class="skill-badge">C++</span>
                <span class="skill-badge">Python</span>
                <span class="skill-badge">Git</span>
                <span class="skill-badge">Arduino</span>
                <span class="skill-badge">Linux</span>
                <span class="skill-badge">CMake</span>
                <span class="skill-badge">NumPy</span>
                <span class="skill-badge">SQL</span>
                <span class="skill-badge">Algorithms</span>
                <span class="skill-badge">Data Structures</span>
            </div>

            <h5 class="mb-3" style="color: #764ba2;">Familiarizado</h5>
            <div class="mb-4">
                <span class="skill-badge" style="background: #9f7aea;">JavaScript</span>
                <span class="skill-badge" style="background: #9f7aea;">Java</span>
                <span class="skill-badge" style="background: #9f7aea;">VTK</span>
                <span class="skill-badge" style="background: #9f7aea;">Processamento de Imagem</span>
                <span class="skill-badge" style="background: #9f7aea;">HTML</span>
                <span class="skill-badge" style="background: #9f7aea;">Pandas</span>
                <span class="skill-badge" style="background: #9f7aea;">OpenIGTLink</span>
                <span class="skill-badge" style="background: #9f7aea;">Docker</span>
            </div>

            <h5 class="mb-3" style="color: #764ba2;">Soft Skills</h5>
            <div>
                <span class="skill-badge" style="background: #48bb78;">Iniciativa</span>
                <span class="skill-badge" style="background: #48bb78;">Oratória</span>
                <span class="skill-badge" style="background: #48bb78;">Comunicação Bilíngue</span>
                <span class="skill-badge" style="background: #48bb78;">Adaptabilidade</span>
                <span class="skill-badge" style="background: #48bb78;">Perseverança</span>
                <span class="skill-badge" style="background: #48bb78;">Colaboração</span>
            </div>
        </div>

        <!-- Awards -->
        <div class="section">
            <h2 class="section-title"><i class="fas fa-trophy"></i> Prêmios e Certificações</h2>
            
            <h5 class="mb-3" style="color: #764ba2;">Vitórias em Hackathons</h5>
            <div class="mb-4">
                <span class="award-badge"><i class="fas fa-medal"></i> 1º Lugar - Hackathon Elotech (IA e Gestão Pública)</span>
                <span class="award-badge"><i class="fas fa-medal"></i> 1º Lugar - Hackathon Bitzen (Estimativa de Software)</span>
            </div>

            <h5 class="mb-3" style="color: #764ba2;">Certificações</h5>
            <div>
                <div class="mb-2"><i class="fas fa-certificate" style="color: #667eea;"></i> <strong>Google Cloud Foundations</strong> - Conceitos de computação em nuvem e serviços Google Cloud</div>
                <div><i class="fas fa-certificate" style="color: #667eea;"></i> <strong>CS50x: Introduction to Computer Science (Harvard University)</strong> - Fundamentos abrangentes de ciência da computação</div>
            </div>
        </div>

        <!-- Languages -->
        <div class="section" style="background-color: #f8f9fa;">
            <h2 class="section-title"><i class="fas fa-language"></i> Idiomas</h2>
            <div class="row">
                <div class="col-md-4">
                    <div class="lang-item">
                        <span class="lang-name">Portuguese</span><br>
                        <span class="lang-level">Nativo</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="lang-item">
                        <span class="lang-name">Inglês</span><br>
                        <span class="lang-level">Fluente</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="lang-item">
                        <span class="lang-name">Mandarim</span><br>
                        <span class="lang-level">Básico</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="section text-center" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px;">
            <p class="mb-0">© 2025 Vitor Azevedo Padovani | Construído com paixão por tecnologia e inovação</p>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;

function Hello() {
  return <div dangerouslySetInnerHTML={{ __html: page }} />;
}

export default Hello;
