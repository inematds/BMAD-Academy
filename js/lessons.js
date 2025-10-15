// Conteúdo das lições
const lessons = [
    {
        id: 1,
        title: "O que é o BMad?",
        content: `
            <h2>BMad: Crie Soluções com IA em 3 Passos</h2>

            <h3>O que é?</h3>
            <p>BMad é um sistema que conecta você a <strong>especialistas de IA</strong>. Você fala o que quer, eles fazem.</p>

            <h3>Como funciona na prática?</h3>

            <p><strong>1. Você instala o BMad</strong> (via terminal)</p>
            <code>npx bmad-method install</code>

            <p><strong>2. Você pede o que precisa</strong> (via IDE como Claude Code, Cursor)</p>
            <code>As dev, crie um formulário de contato</code>

            <p><strong>3. O agente cria para você</strong> (código, design, documentação)</p>
            <p>✅ Em segundos você tem o resultado pronto.</p>

            <h3>Quem são os Agentes?</h3>
            <p>São especialistas virtuais. Cada um faz uma coisa:</p>
            <ul>
                <li><strong>dev</strong> → Escreve código</li>
                <li><strong>pm</strong> → Planeja o projeto</li>
                <li><strong>ux-expert</strong> → Desenha interfaces</li>
                <li><strong>architect</strong> → Define arquitetura técnica</li>
                <li><strong>qa</strong> → Cria testes</li>
            </ul>

            <h3>O que você pode criar?</h3>
            <p><strong>Qualquer sistema digital:</strong></p>
            <ul>
                <li>📝 Advogados: Gestão de processos</li>
                <li>🏥 Médicos: Prontuário eletrônico</li>
                <li>🎓 Professores: Plataforma de ensino</li>
                <li>💼 Empresas: CRM, Dashboard, Automações</li>
            </ul>

            <h3>O diferencial?</h3>
            <p><strong>Você não precisa saber programar.</strong></p>
            <p>Você descreve o que quer em português, os agentes executam.</p>

            <p><strong>Próxima lição:</strong> Vamos instalar e testar!</p>
        `
    },
    {
        id: 2,
        title: "Instalando o BMad",
        content: `
            <h2>Instalação: 3 Passos Rápidos</h2>

            <h3>Pré-requisito: Node.js</h3>
            <p><strong>Verifique se tem Node.js instalado:</strong></p>
            <code>node --version</code>
            <p>Se aparecer algo como <code>v18.0.0</code> ou superior, pode continuar.<br>
            Se não, baixe em: <strong>nodejs.org</strong></p>

            <h3>Passo 1: Instalar o BMad</h3>
            <code>npx bmad-method install</code>
            <p>✅ O instalador é interativo. Ele pergunta:</p>
            <ul>
                <li>Qual IDE você usa? (Cursor, Claude Code, VS Code)</li>
                <li>Quais agentes quer instalar? (dev, pm, ux-expert, etc.)</li>
                <li>Instalação full ou minimal?</li>
            </ul>
            <p><strong>Dica:</strong> Iniciante? Escolha instalação <strong>full</strong>.</p>

            <h3>Passo 2: Verificar se Funcionou</h3>
            <code>npx bmad-method status</code>
            <p><strong>O que você deve ver:</strong></p>
            <code>
✅ BMad Method v4.44.1
✅ Installation Type: full
✅ IDEs configured: cursor, claude-code
✅ Agents installed: 8
            </code>
            <p>Se apareceu isso, instalou corretamente!</p>

            <h3>Passo 3: Listar Seus Agentes</h3>
            <code>npx bmad-method list:agents</code>
            <p>Mostra todos os agentes disponíveis para você usar.</p>

            <h3>⚠️ BMad NÃO é um app que "abre"</h3>
            <p><strong>Importante:</strong> BMad não tem janela nem interface gráfica.</p>
            <p>Ele funciona assim:</p>
            <ul>
                <li>❌ <strong>NÃO</strong> clique em ícone para abrir</li>
                <li>✅ <strong>SIM</strong> execute comandos no terminal</li>
                <li>✅ <strong>SIM</strong> use agentes dentro da sua IDE (Claude Code, Cursor)</li>
            </ul>

            <h3>4. Como Iniciar o BMad Após Instalação</h3>

            <p><strong>Você NÃO precisa "iniciar" o BMad.</strong> Ele já está instalado e pronto.</p>

            <p><strong>Para usar o BMad, você faz comandos:</strong></p>

            <h4>Comandos no Terminal:</h4>
            <code>npx bmad-method status</code>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:expansions</code>

            <h4>Comandos na IDE (Claude Code, Cursor):</h4>
            <code>As dev, crie um formulário de contato</code>
            <code>As pm, crie um PRD para app de delivery</code>
            <code>As ux-expert, desenhe uma tela de login</code>

            <h3>5. O Que Fazer Depois de Instalar</h3>

            <p><strong>Teste 1: Verifique a instalação</strong></p>
            <code>npx bmad-method status</code>
            <p>Deve mostrar versão, tipo de instalação e agentes.</p>

            <p><strong>Teste 2: Liste os agentes</strong></p>
            <code>npx bmad-method list:agents</code>
            <p>Você verá: dev, pm, ux-expert, architect, analyst, qa, etc.</p>

            <p><strong>Teste 3: Veja pacotes de expansão</strong></p>
            <code>npx bmad-method list:expansions</code>
            <p>Mostra pacotes extras: jogos 2D, DevOps, mobile, etc.</p>

            <p><strong>Teste 4: Use seu primeiro agente!</strong></p>
            <p>Abra sua IDE (Claude Code ou Cursor) e digite:</p>
            <code>As dev, liste os arquivos da pasta atual</code>
            <p>✅ Se o agente responder, tudo funcionou!</p>

            <h3>🔗 Integração com IDEs</h3>

            <p><strong>BMad funciona com essas IDEs:</strong></p>
            <ul>
                <li><strong>Claude Code</strong> (VS Code + Claude)</li>
                <li><strong>Cursor</strong> (IDE com IA integrada)</li>
                <li><strong>VS Code</strong> (com extensões de IA)</li>
                <li><strong>Gemini</strong> (Google AI Studio)</li>
            </ul>

            <p><strong>Como funciona:</strong></p>
            <p>1. Você digita comando na IDE (chat lateral ou terminal)</p>
            <p>2. IDE envia para o BMad</p>
            <p>3. BMad ativa o agente certo</p>
            <p>4. Agente executa e retorna resultado</p>

            <p><strong>Exemplo prático no Claude Code:</strong></p>
            <code>
// No terminal integrado:
npx bmad-method status

// No chat lateral do Claude:
As dev, crie uma função que valida email
            </code>

            <h3>✅ Pronto para Começar!</h3>
            <p>Agora você sabe:</p>
            <ul>
                <li>✅ Como instalar o BMad</li>
                <li>✅ Como testar se funcionou</li>
                <li>✅ Que BMad NÃO abre como app</li>
                <li>✅ Como rodar comandos via terminal</li>
                <li>✅ Como usar agentes na IDE</li>
            </ul>

            <p><strong>Próxima lição:</strong> Conhecer todos os agentes disponíveis!</p>
        `
    },
    {
        id: 3,
        title: "Conhecendo os Agentes",
        content: `
            <h2>Os 6 Agentes Principais (Na Ordem Certa!)</h2>

            <p><strong>Por que ordem importa?</strong></p>
            <p>Um projeto segue um fluxo lógico: <strong>Planejamento → Execução → Validação</strong></p>
            <p>Use os agentes nesta sequência para melhores resultados:</p>

            <h3>1. 🔍 analyst (Analista de Negócios)</h3>
            <p><strong>Quando usar:</strong> Início do projeto, antes de tudo</p>
            <p><strong>O que faz:</strong> Pesquisa de mercado, análise competitiva, requisitos</p>
            <code>As analyst, pesquise apps de delivery e liste as principais features</code>
            <p><em>✅ Resultado: Relatório de pesquisa, requisitos iniciais</em></p>

            <h3>2. 📋 pm (Gerente de Produto)</h3>
            <p><strong>Quando usar:</strong> Depois do analyst</p>
            <p><strong>O que faz:</strong> Cria PRD (Product Requirements Document), define estratégia</p>
            <code>As pm, crie um PRD para app de delivery baseado na pesquisa</code>
            <p><em>✅ Resultado: Documento PRD completo com user stories</em></p>

            <h3>3. 🏗️ architect (Arquiteto de Software)</h3>
            <p><strong>Quando usar:</strong> Depois do PM, antes de programar</p>
            <p><strong>O que faz:</strong> Define arquitetura técnica, escolhe tecnologias</p>
            <code>As architect, defina arquitetura para o app de delivery</code>
            <p><em>✅ Resultado: Diagrama de arquitetura, stack tecnológico</em></p>

            <h3>4. 🎨 ux-expert (Designer UX/UI)</h3>
            <p><strong>Quando usar:</strong> Junto com architect, antes do dev</p>
            <p><strong>O que faz:</strong> Cria wireframes, interfaces, design de telas</p>
            <code>As ux-expert, crie wireframes das telas principais do app</code>
            <p><em>✅ Resultado: Wireframes, mockups, guia de estilo</em></p>

            <h3>5. 🚀 dev (Desenvolvedor Full Stack)</h3>
            <p><strong>Quando usar:</strong> Depois de ter PRD, arquitetura e design</p>
            <p><strong>O que faz:</strong> Escreve código, implementa funcionalidades</p>
            <code>As dev, implemente o sistema de pedidos do app</code>
            <p><em>✅ Resultado: Código funcional, features implementadas</em></p>

            <h3>6. ✅ qa (Quality Assurance)</h3>
            <p><strong>Quando usar:</strong> Depois do dev implementar</p>
            <p><strong>O que faz:</strong> Cria testes, valida qualidade, encontra bugs</p>
            <code>As qa, crie testes para o sistema de pedidos</code>
            <p><em>✅ Resultado: Suite de testes, relatório de bugs</em></p>

            <h3>📊 Tabela de Referência Rápida</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">Agente</th>
                        <th style="padding: 12px; text-align: left;">Função</th>
                        <th style="padding: 12px; text-align: left;">Tipo de Tarefa</th>
                        <th style="padding: 12px; text-align: left;">Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>analyst</strong></td>
                        <td style="padding: 12px;">Pesquisa</td>
                        <td style="padding: 12px;">Análise de mercado, requisitos</td>
                        <td style="padding: 12px;"><code>pesquise concorrentes</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>pm</strong></td>
                        <td style="padding: 12px;">Planejamento</td>
                        <td style="padding: 12px;">PRD, roadmap, estratégia</td>
                        <td style="padding: 12px;"><code>crie PRD completo</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>architect</strong></td>
                        <td style="padding: 12px;">Arquitetura</td>
                        <td style="padding: 12px;">Design técnico, stack</td>
                        <td style="padding: 12px;"><code>defina arquitetura</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>ux-expert</strong></td>
                        <td style="padding: 12px;">Design</td>
                        <td style="padding: 12px;">Wireframes, UI, protótipos</td>
                        <td style="padding: 12px;"><code>crie wireframes</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>dev</strong></td>
                        <td style="padding: 12px;">Código</td>
                        <td style="padding: 12px;">Implementação, features</td>
                        <td style="padding: 12px;"><code>implemente login</code></td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>qa</strong></td>
                        <td style="padding: 12px;">Testes</td>
                        <td style="padding: 12px;">Validação, testes, bugs</td>
                        <td style="padding: 12px;"><code>crie testes unitários</code></td>
                    </tr>
                </tbody>
            </table>

            <h3>💡 Fluxo Ideal de Um Projeto</h3>

            <p><strong>Projeto pequeno (CRUD simples):</strong></p>
            <p>pm → dev → qa</p>

            <p><strong>Projeto médio (App completo):</strong></p>
            <p>analyst → pm → architect → ux-expert → dev → qa</p>

            <p><strong>Projeto grande (SaaS complexo):</strong></p>
            <p>analyst → pm → architect → ux-expert → dev → qa → dev (ajustes) → qa (revalidação)</p>

            <h3>🎯 Regra de Ouro</h3>

            <p><strong>Não pule etapas!</strong> Especialmente:</p>
            <ul>
                <li>❌ <strong>NÃO</strong> peça pro dev sem ter PRD (pm)</li>
                <li>❌ <strong>NÃO</strong> pule arquitetura em projetos complexos</li>
                <li>❌ <strong>NÃO</strong> esqueça de testar (qa) depois de implementar</li>
            </ul>

            <p><strong>Ver todos os agentes:</strong></p>
            <code>npx bmad-method list:agents</code>

            <p><strong>Próxima lição:</strong> Comandos essenciais do BMad!</p>
        `
    },
    {
        id: 4,
        title: "Comandos Básicos",
        content: `
            <h2>Comandos Essenciais do BMad</h2>
            <p>Aqui estão os comandos que você mais vai usar:</p>

            <h3>Ver Status da Instalação</h3>
            <code>npx bmad-method status</code>
            <p>Mostra versão, agentes instalados e configurações.</p>

            <h3>Listar Agentes Disponíveis</h3>
            <code>npx bmad-method list:agents</code>
            <p>Lista todos os agentes e suas especialidades.</p>

            <h3>Listar Pacotes de Expansão</h3>
            <code>npx bmad-method list:expansions</code>
            <p>Mostra pacotes especializados (Game Dev, DevOps, etc.).</p>

            <h3>Atualizar BMad</h3>
            <code>npx bmad-method update</code>
            <p>Atualiza para a versão mais recente.</p>

            <h3>Ver Ajuda</h3>
            <code>npx bmad-method help</code>
            <p>Mostra todos os comandos disponíveis.</p>

            <h3>Usando Agentes</h3>
            <p>Para usar um agente, basta mencionar seu nome na sua IDE:</p>
            <code>As dev, implemente uma função de login</code>
            <code>As ux-expert, crie um mockup de dashboard</code>

            <p><strong>Importante:</strong> Os agentes funcionam dentro de IDEs compatíveis como VS Code com Claude Code, Cursor, etc.</p>
        `
    },
    {
        id: 5,
        title: "Entendendo o Comando 'As'",
        content: `
            <h2>O Comando "As": Chamando Seus Especialistas</h2>

            <h3>O Que Significa "As"?</h3>
            <p><strong>"As" = "Atue como"</strong></p>
            <p>É como você chama um especialista da sua equipe virtual.</p>

            <p><strong>Analogia:</strong></p>
            <p>Imagine uma empresa com vários departamentos. Quando você precisa de algo:</p>
            <ul>
                <li>Você vai até a sala do desenvolvedor e diz: "Como desenvolvedor, crie esta função"</li>
                <li>Você vai até o designer e diz: "Como designer, crie esta tela"</li>
            </ul>
            <p>No BMad, você faz a mesma coisa digitalmente: <code>As dev</code> = Atue como desenvolvedor</p>

            <h3>Como o BMad Interpreta o Comando</h3>

            <p><strong>Quando você digita:</strong></p>
            <code>As dev, crie um formulário de login</code>

            <p><strong>O BMad faz internamente:</strong></p>
            <ol>
                <li>Identifica o agente: <code>dev</code></li>
                <li>Carrega o perfil do agente dev (habilidades, contexto, instruções)</li>
                <li>Passa a tarefa: <code>crie um formulário de login</code></li>
                <li>O agente dev executa usando seu conhecimento especializado</li>
                <li>Retorna o resultado (código do formulário)</li>
            </ol>

            <h3>📋 Sintaxe Correta</h3>

            <p><strong>Estrutura básica:</strong></p>
            <code>As [nome do agente], [o que você quer]</code>

            <p><strong>Exemplos corretos:</strong></p>
            <ul>
                <li>✅ <code>As dev, crie uma função de validação</code></li>
                <li>✅ <code>As pm, crie um PRD para este projeto</code></li>
                <li>✅ <code>As qa, teste esta funcionalidade</code></li>
            </ul>

            <p><strong>Exemplos incorretos:</strong></p>
            <ul>
                <li>❌ <code>dev crie uma função</code> (falta "As")</li>
                <li>❌ <code>Como dev, crie função</code> (use "As", não "Como")</li>
                <li>❌ <code>As desenvolvedor, crie função</code> (use "dev", não "desenvolvedor")</li>
            </ul>

            <h3>🎯 Exemplos Práticos para Cada Agente</h3>

            <h4>As analyst</h4>
            <p><strong>Quando usar:</strong> Pesquisas, análises de mercado, levantamento de requisitos</p>
            <code>As analyst, faça uma análise competitiva de apps de delivery</code>
            <code>As analyst, liste os principais requisitos para um sistema de gestão</code>
            <p><em>✅ Resultado: Relatório de análise, lista de requisitos</em></p>

            <h4>As pm</h4>
            <p><strong>Quando usar:</strong> Planejamento, documentação, estratégia de produto</p>
            <code>As pm, crie um PRD para um app de finanças pessoais</code>
            <code>As pm, defina o roadmap do projeto</code>
            <p><em>✅ Resultado: Documento PRD, roadmap, user stories</em></p>

            <h4>As architect</h4>
            <p><strong>Quando usar:</strong> Decisões técnicas, escolha de tecnologias, arquitetura</p>
            <code>As architect, defina a arquitetura de um sistema de e-commerce</code>
            <code>As architect, escolha o melhor banco de dados para este projeto</code>
            <p><em>✅ Resultado: Diagrama de arquitetura, stack tecnológico definido</em></p>

            <h4>As ux-expert</h4>
            <p><strong>Quando usar:</strong> Design de interfaces, wireframes, experiência do usuário</p>
            <code>As ux-expert, crie wireframes de uma tela de cadastro</code>
            <code>As ux-expert, melhore a usabilidade deste formulário</code>
            <p><em>✅ Resultado: Wireframes, mockups, sugestões de UX</em></p>

            <h4>As dev</h4>
            <p><strong>Quando usar:</strong> Escrever código, implementar funcionalidades, corrigir bugs</p>
            <code>As dev, implemente um sistema de autenticação com JWT</code>
            <code>As dev, corrija o bug no formulário de login</code>
            <p><em>✅ Resultado: Código funcional, bug corrigido</em></p>

            <h4>As qa</h4>
            <p><strong>Quando usar:</strong> Criar testes, validar qualidade, encontrar bugs</p>
            <code>As qa, crie testes unitários para esta função</code>
            <code>As qa, teste todos os fluxos do sistema de checkout</code>
            <p><em>✅ Resultado: Suite de testes, relatório de bugs</em></p>

            <h3>💡 Dicas Importantes</h3>

            <p><strong>1. Use vírgula após o nome do agente:</strong></p>
            <ul>
                <li>✅ <code>As dev, crie função</code></li>
                <li>❌ <code>As dev crie função</code> (sem vírgula)</li>
            </ul>

            <p><strong>2. Seja específico na tarefa:</strong></p>
            <ul>
                <li>✅ <code>As dev, crie uma função de validação de email usando regex</code></li>
                <li>❌ <code>As dev, faça validação</code> (muito vago)</li>
            </ul>

            <p><strong>3. Um comando, um agente:</strong></p>
            <ul>
                <li>✅ <code>As dev, crie o código</code> (depois) <code>As qa, teste o código</code></li>
                <li>❌ <code>As dev e qa, criem e testem</code> (não funciona)</li>
            </ul>

            <h3>🎯 Exemplo Prático Completo: Sistema de Agendamento</h3>

            <p>Veja como usar o comando "As" em um projeto real:</p>

            <h4>Passo 1: Análise</h4>
            <code>As analyst, liste os requisitos essenciais de um sistema de agendamento médico</code>
            <p><em>O analyst retorna: gestão de pacientes, calendário de horários, lembretes, etc.</em></p>

            <h4>Passo 2: Planejamento</h4>
            <code>As pm, crie um PRD baseado nos requisitos do analyst</code>
            <p><em>O PM retorna: documento PRD completo com user stories</em></p>

            <h4>Passo 3: Arquitetura</h4>
            <code>As architect, defina a arquitetura técnica deste sistema</code>
            <p><em>O Architect retorna: frontend React, backend Node.js, database PostgreSQL</em></p>

            <h4>Passo 4: Design</h4>
            <code>As ux-expert, crie wireframes das telas principais</code>
            <p><em>O UX-Expert retorna: wireframes de login, dashboard, calendário</em></p>

            <h4>Passo 5: Implementação</h4>
            <code>As dev, implemente o módulo de agendamento seguindo a arquitetura</code>
            <p><em>O Dev retorna: código funcional do sistema</em></p>

            <h4>Passo 6: Testes</h4>
            <code>As qa, crie testes para o fluxo de agendamento</code>
            <p><em>O QA retorna: suite de testes completa</em></p>

            <h3>✅ Resumo</h3>

            <p><strong>O comando "As" é sua ferramenta principal no BMad.</strong></p>

            <ul>
                <li>✅ <strong>Significado:</strong> "Atue como"</li>
                <li>✅ <strong>Sintaxe:</strong> <code>As [agente], [tarefa]</code></li>
                <li>✅ <strong>Função:</strong> Chama o especialista certo para cada tarefa</li>
                <li>✅ <strong>Analogia:</strong> Como pedir ajuda a um colega de equipe específico</li>
            </ul>

            <p><strong>Próxima lição:</strong> Casos de uso práticos por profissão!</p>
        `
    },
    {
        id: 6,
        title: "Casos de Uso Práticos",
        content: `
            <h2>Casos de Uso por Profissão</h2>
            <p>Veja como diferentes profissionais podem usar o BMad:</p>

            <h3>👨‍⚖️ Advogados</h3>
            <ul>
                <li>Criar sistema de gestão de processos</li>
                <li>Automatizar análise de contratos</li>
                <li>Desenvolver calculadora de honorários</li>
                <li>Sistema de agendamento com clientes</li>
            </ul>
            <code>As dev, crie um analisador de contratos que identifique cláusulas importantes</code>

            <h3>👨‍⚕️ Médicos</h3>
            <ul>
                <li>Sistema de prontuário eletrônico</li>
                <li>Agendamento de consultas online</li>
                <li>Calculadoras médicas (IMC, doses, etc.)</li>
                <li>Portal do paciente</li>
            </ul>
            <code>As dev, implemente um sistema de agendamento de consultas com lembretes</code>

            <h3>👨‍🏫 Professores</h3>
            <ul>
                <li>Plataforma de exercícios online</li>
                <li>Sistema de correção automática</li>
                <li>Gerador de provas</li>
                <li>Portal de notas e frequência</li>
            </ul>
            <code>As dev, crie um gerador de questões de múltipla escolha</code>

            <h3>💼 Empreendedores</h3>
            <ul>
                <li>Landing pages para produtos</li>
                <li>Sistema de CRM simples</li>
                <li>Automação de marketing</li>
                <li>Dashboard de métricas</li>
            </ul>
            <code>As ux-expert, crie uma landing page para meu produto</code>

            <p><strong>O limite é sua criatividade!</strong> Qualquer ideia pode virar realidade com os agentes certos.</p>
        `
    },
    {
        id: 7,
        title: "Arquivos de Configuração",
        content: `
            <h2>Entendendo os Arquivos de Configuração</h2>
            <p>O BMad cria uma estrutura de arquivos no seu projeto. Veja o que cada arquivo faz:</p>

            <h3>📁 Estrutura Principal</h3>
            <code>.bmad-core/</code>
            <p>Pasta principal com todas as configurações do BMad.</p>

            <h3>⚙️ bmad-config.json</h3>
            <p><strong>Função:</strong> Configuração principal do BMad</p>
            <p><strong>Contém:</strong></p>
            <ul>
                <li>Versão instalada</li>
                <li>Tipo de instalação (full, minimal)</li>
                <li>IDEs configuradas</li>
                <li>Preferências do usuário</li>
            </ul>
            <code>
{
  "version": "4.44.1",
  "installationType": "full",
  "ideSetup": ["cursor", "claude-code"],
  "language": "pt-BR"
}
            </code>

            <h3>📋 bmad-registry.json</h3>
            <p><strong>Função:</strong> Registro de todos os agentes instalados</p>
            <p><strong>Contém:</strong></p>
            <ul>
                <li>Lista de agentes ativos</li>
                <li>Caminho de cada agente</li>
                <li>Metadata dos agentes</li>
            </ul>

            <h3>🤖 agents/</h3>
            <p><strong>Função:</strong> Diretório com os arquivos dos agentes</p>
            <p>Cada agente tem seu próprio arquivo de configuração com:</p>
            <ul>
                <li>Nome e descrição</li>
                <li>Habilidades e especialidades</li>
                <li>Instruções de comportamento</li>
            </ul>

            <h3>🔧 Configurações de IDE</h3>
            <p>Pastas específicas para cada IDE:</p>
            <ul>
                <li><code>.cursor/</code> - Configurações para Cursor IDE</li>
                <li><code>.claude/</code> - Configurações para Claude Code</li>
                <li><code>.gemini/</code> - Configurações para Gemini</li>
                <li><code>.github/</code> - Configurações para GitHub Copilot</li>
            </ul>

            <h3>📝 Dicas Importantes</h3>
            <ul>
                <li><strong>Não modifique</strong> manualmente os arquivos, use os comandos BMad</li>
                <li><strong>Faça backup</strong> da pasta .bmad-core/ antes de atualizações</li>
                <li><strong>Adicione ao .gitignore</strong> se necessário (opcional)</li>
                <li>Use <code>npx bmad-method list:config</code> para ver todos os arquivos</li>
            </ul>

            <p><strong>Próximo passo:</strong> Aprenda todos os comandos disponíveis!</p>
        `
    },
    {
        id: 8,
        title: "Referência de Comandos",
        content: `
            <h2>Referência Completa de Comandos</h2>
            <p>Lista completa de todos os comandos BMad com exemplos práticos:</p>

            <h3>🚀 Comandos Básicos</h3>

            <h4>npx bmad-method install</h4>
            <p>Instala o BMad no seu projeto pela primeira vez.</p>
            <code>cd meu-projeto && npx bmad-method install</code>
            <p><em>O instalador é interativo e guia você passo a passo.</em></p>

            <h4>npx bmad-method status</h4>
            <p>Mostra o status da instalação atual.</p>
            <code>npx bmad-method status</code>
            <p><em>Retorna: versão, tipo, IDEs configuradas, total de arquivos.</em></p>

            <h4>npx bmad-method update</h4>
            <p>Atualiza o BMad para a versão mais recente.</p>
            <code>npx bmad-method update</code>

            <h4>npx bmad-method update-check</h4>
            <p>Verifica se há atualizações disponíveis sem instalar.</p>
            <code>npx bmad-method update-check</code>

            <h3>📋 Comandos de Listagem</h3>

            <h4>npx bmad-method list:agents</h4>
            <p>Lista todos os agentes instalados no projeto.</p>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:agents --detailed</code>
            <p><em>Use --detailed para ver informações completas de cada agente.</em></p>

            <h4>npx bmad-method list:expansions</h4>
            <p>Lista pacotes de expansão disponíveis.</p>
            <code>npx bmad-method list:expansions</code>

            <h4>npx bmad-method list:config</h4>
            <p>Lista todos os arquivos de configuração do BMad.</p>
            <code>npx bmad-method list:config</code>

            <h3>🔧 Comandos de Gerenciamento</h3>

            <h4>npx bmad-method add:expansion [nome]</h4>
            <p>Adiciona um pacote de expansão ao projeto.</p>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>

            <h4>npx bmad-method remove:agent [nome]</h4>
            <p>Remove um agente específico do projeto.</p>
            <code>npx bmad-method remove:agent writer</code>

            <h4>npx bmad-method show:config</h4>
            <p>Exibe o conteúdo do arquivo de configuração principal.</p>
            <code>npx bmad-method show:config</code>

            <h3>💡 Usando Agentes na IDE</h3>
            <p>Depois de instalado, use os agentes diretamente na sua IDE:</p>

            <code>As dev, crie uma função que valida emails</code>
            <code>As ux-expert, desenhe uma tela de cadastro moderna</code>
            <code>As pm, crie um PRD para um sistema de chat</code>
            <code>As architect, defina a arquitetura de um microserviço</code>
            <code>As analyst, faça análise competitiva do mercado</code>
            <code>As qa, crie testes unitários para esta função</code>

            <h3>🎯 Dicas de Uso</h3>
            <ul>
                <li>Sempre use <code>npx bmad-method</code> antes dos comandos</li>
                <li>Execute os comandos na raiz do seu projeto</li>
                <li>Use <code>help</code> para relembrar comandos: <code>npx bmad-method help</code></li>
                <li>Teste os comandos no <strong>Playground</strong> desta academy!</li>
            </ul>

            <p><strong>Parabéns!</strong> Você agora domina todos os comandos do BMad Method! 🎉</p>
        `
    },
    {
        id: 9,
        title: "Criando Projetos com Agentes",
        content: `
            <h2>Criando Projetos: Do Manual ao Automático</h2>
            <p>O BMad oferece diferentes níveis de automação para criar projetos. Escolha o que melhor se adapta ao seu estilo!</p>

            <h3>📊 Níveis de Automação - Resumo Prático</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">Nível de Automação</th>
                        <th style="padding: 12px; text-align: left;">Como Ativar</th>
                        <th style="padding: 12px; text-align: left;">O que Ele Faz</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>Manual (Padrão)</strong></td>
                        <td style="padding: 12px;"><code>/pm</code> <code>/architect</code> <code>/dev</code> <code>/qa</code></td>
                        <td style="padding: 12px;">Você chama os agentes conforme precisar, controle total</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;"><strong>Semi-automático</strong><br><em style="color: var(--success);">(Recomendado)</em></td>
                        <td style="padding: 12px;"><code>/bmad-master</code></td>
                        <td style="padding: 12px;">Cria tudo em sequência, mas pede confirmação entre etapas</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;"><strong>Totalmente Automático</strong></td>
                        <td style="padding: 12px;"><code>/bmad-master auto</code></td>
                        <td style="padding: 12px;">Cria todo o projeto sozinho, sem pausas</td>
                    </tr>
                </tbody>
            </table>

            <h3>🔧 Modo Manual - Controle Total</h3>
            <p>Ideal para: Aprender, experimentar, projetos simples</p>
            <p><strong>Como funciona:</strong> Você invoca cada agente individualmente</p>

            <code>As pm, crie um PRD para um e-commerce de roupas</code>
            <p><em>Aguarda PM criar o documento...</em></p>

            <code>As architect, defina a arquitetura baseada neste PRD</code>
            <p><em>Aguarda Architect criar a arquitetura...</em></p>

            <code>As dev, implemente a tela de produtos</code>
            <p><em>Aguarda Dev implementar...</em></p>

            <code>As qa, crie testes para esta tela</code>
            <p><em>Aguarda QA criar testes...</em></p>

            <p><strong>Vantagens:</strong> Controle total, aprende o processo<br>
            <strong>Desvantagens:</strong> Mais demorado, requer conhecimento da sequência</p>

            <h3>⚡ Modo Semi-Automático - Recomendado</h3>
            <p>Ideal para: Projetos médios, revisão entre etapas, aprendizado guiado</p>
            <p><strong>Como funciona:</strong> O BMad Master orquestra todos os agentes, mas pede sua aprovação</p>

            <code>/bmad-master Crie um sistema de gestão de clientes</code>

            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>1️⃣ <strong>PM cria o PRD</strong> → Mostra e aguarda sua confirmação</li>
                <li>2️⃣ <strong>Architect define arquitetura</strong> → Mostra e aguarda confirmação</li>
                <li>3️⃣ <strong>UX-Expert cria wireframes</strong> → Mostra e aguarda confirmação</li>
                <li>4️⃣ <strong>Dev implementa código</strong> → Mostra e aguarda confirmação</li>
                <li>5️⃣ <strong>QA cria testes</strong> → Mostra resultado final</li>
            </ul>

            <p><strong>Vantagens:</strong> Rápido, mantém controle, aprende o fluxo<br>
            <strong>Desvantagens:</strong> Requer aprovações manuais</p>

            <h3>🚀 Modo Totalmente Automático - Máxima Velocidade</h3>
            <p>Ideal para: Protótipos rápidos, MVPs, projetos urgentes</p>
            <p><strong>Como funciona:</strong> Tudo é criado automaticamente do início ao fim</p>

            <code>/bmad-master auto Crie um blog completo com sistema de posts</code>

            <p><strong>O que acontece:</strong></p>
            <ul>
                <li>✅ PM → Analyst → Architect → UX-Expert → Dev → QA</li>
                <li>✅ Todo o fluxo executado sem interrupções</li>
                <li>✅ Projeto completo entregue no final</li>
            </ul>

            <p><strong>Vantagens:</strong> Extremamente rápido, zero intervenção<br>
            <strong>Desvantagens:</strong> Menos controle sobre cada etapa</p>

            <h3>💡 Qual Escolher?</h3>
            <ul>
                <li><strong>Iniciante?</strong> Use <code>Manual</code> para aprender</li>
                <li><strong>Experiente?</strong> Use <code>Semi-automático</code> para produtividade</li>
                <li><strong>Urgente?</strong> Use <code>Automático</code> para velocidade máxima</li>
                <li><strong>Projeto complexo?</strong> Use <code>Semi-automático</code> para revisar cada etapa</li>
            </ul>

            <h3>🎯 Exemplo Prático Completo</h3>

            <h4>Cenário: Sistema de Delivery</h4>

            <p><strong>Opção 1 - Manual:</strong></p>
            <code>As analyst, faça pesquisa de mercado de apps de delivery</code>
            <code>As pm, crie PRD para app de delivery baseado na pesquisa</code>
            <code>As architect, defina arquitetura do sistema</code>
            <code>As ux-expert, crie wireframes das telas principais</code>
            <code>As dev, implemente o sistema de pedidos</code>
            <code>As qa, crie suite de testes completa</code>

            <p><strong>Opção 2 - Semi-automático (Recomendado):</strong></p>
            <code>/bmad-master Crie um app de delivery de comida completo</code>
            <p><em>Revise e aprove cada etapa quando solicitado</em></p>

            <p><strong>Opção 3 - Automático:</strong></p>
            <code>/bmad-master auto Crie um app de delivery de comida completo</code>
            <p><em>Aguarde o projeto ser criado completamente</em></p>

            <p><strong>Dica Final:</strong> Comece com manual para aprender, depois migre para semi-automático quando estiver confortável!</p>

            <h3>📝 Exemplo de Fluxo Prático: Criando um Curso Online</h3>

            <p>Veja como criar um curso online completo usando o fluxo manual passo a passo:</p>

            <h4>Passo 1: Planejamento</h4>
            <code>/pm → "Crie o plano geral do curso de JavaScript para iniciantes"</code>
            <p><em>✅ PM cria documento com objetivos, público-alvo, estrutura macro</em></p>

            <h4>Passo 2: Arquitetura</h4>
            <code>/architect → "Crie a estrutura detalhada do curso baseada no PRD"</code>
            <p><em>✅ Architect define tecnologias, organização de conteúdo, recursos necessários</em></p>

            <h4>Passo 3: Organização (Orquestração)</h4>
            <code>/bmad-master → "Divida o curso em módulos e tarefas específicas"</code>
            <p><em>✅ BMad Master cria breakdown completo: módulos, aulas, exercícios, cronograma</em></p>

            <h4>Passo 4: Desenvolvimento de Conteúdo</h4>
            <code>/dev → "Implemente o conteúdo do módulo 1: Fundamentos"</code>
            <p><em>✅ Dev cria código de exemplo, exercícios práticos, desafios</em></p>

            <h4>Passo 5: Qualidade e Didática</h4>
            <code>/qa → "Revise e otimize a didática do módulo 1"</code>
            <p><em>✅ QA verifica clareza, corrige erros, melhora explicações, testa exercícios</em></p>

            <h4>Repetir Passos 4 e 5 para outros módulos</h4>
            <code>/dev → "Implemente o conteúdo do módulo 2: DOM e Eventos"</code>
            <code>/qa → "Revise e otimize a didática do módulo 2"</code>

            <p><strong>Resultado:</strong> Curso completo, bem estruturado, com conteúdo didático e testado!</p>

            <h3>⚡ Mesmo Projeto em Modo Semi-Automático</h3>
            <p>Quer criar o mesmo curso mais rápido? Use o modo semi-automático:</p>

            <code>/bmad-master Crie um curso completo de JavaScript para iniciantes com 5 módulos</code>

            <p><strong>O BMad fará:</strong></p>
            <ul>
                <li>✅ PM planeja → <em>aguarda sua aprovação</em></li>
                <li>✅ Architect estrutura → <em>aguarda sua aprovação</em></li>
                <li>✅ Writer cria conteúdo → <em>aguarda sua aprovação</em></li>
                <li>✅ Dev cria exercícios → <em>aguarda sua aprovação</em></li>
                <li>✅ QA revisa tudo → <em>apresenta resultado final</em></li>
            </ul>

            <p><strong>Economia de tempo:</strong> 80% mais rápido que fazer manualmente!</p>
        `
    },
    {
        id: 10,
        title: "Atualização e Expansões",
        content: `
            <h2>Mantendo o BMad Atualizado</h2>
            <p>Aprenda a manter seu BMad sempre na versão mais recente e como expandir suas funcionalidades.</p>

            <h3>🔄 Verificando Atualizações</h3>

            <h4>Verificar sem instalar</h4>
            <code>npx bmad-method update-check</code>
            <p><em>Mostra se há versão mais recente disponível, sem fazer alterações</em></p>

            <h4>Ver versão atual</h4>
            <code>npx bmad-method status</code>
            <p>A primeira linha mostra a versão instalada: <code>Version: 4.44.1</code></p>

            <h3>⬆️ Atualizando o BMad</h3>

            <h4>Passo 1: Fazer Backup</h4>
            <p><strong>Muito importante!</strong> Sempre faça backup antes de atualizar:</p>
            <ul>
                <li>Copie a pasta <code>.bmad-core/</code> para local seguro</li>
                <li>Ou faça commit no Git: <code>git add . && git commit -m "Backup antes de atualizar BMad"</code></li>
            </ul>

            <h4>Passo 2: Executar Atualização</h4>
            <code>npx bmad-method update</code>
            <p><em>O comando baixa e instala a versão mais recente automaticamente</em></p>

            <h4>Passo 3: Verificar Atualização</h4>
            <code>npx bmad-method status</code>
            <p>Confirme que a versão foi atualizada corretamente</p>

            <h3>📦 Pacotes de Expansão</h3>

            <p>Expanda as capacidades do BMad com pacotes especializados:</p>

            <h4>Ver Pacotes Disponíveis</h4>
            <code>npx bmad-method list:expansions</code>

            <p><strong>Pacotes Principais:</strong></p>
            <ul>
                <li><strong>bmad-2d-phaser-game-dev</strong> - Desenvolvimento de jogos 2D</li>
                <li><strong>bmad-infrastructure-devops</strong> - DevOps e infraestrutura</li>
                <li><strong>bmad-creative-writing</strong> - Escrita criativa</li>
                <li><strong>bmad-godot-game-dev</strong> - Desenvolvimento com Godot</li>
                <li><strong>bmad-mobile-dev</strong> - Desenvolvimento mobile</li>
            </ul>

            <h4>Adicionar Expansão</h4>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>
            <p><em>Adiciona agentes especializados em jogos 2D</em></p>

            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>
            <p><em>Adiciona agentes DevOps, Docker, Kubernetes, etc.</em></p>

            <h4>Verificar Expansões Instaladas</h4>
            <code>npx bmad-method list:agents</code>
            <p>Os agentes das expansões aparecem na lista com suas especialidades</p>

            <h3>🗑️ Removendo Agentes</h3>

            <p>Se precisar remover um agente que não usa mais:</p>
            <code>npx bmad-method remove:agent writer</code>
            <p><em>Remove o agente writer do projeto</em></p>

            <p><strong>⚠️ Atenção:</strong> Não remova agentes essenciais como dev, pm ou architect</p>

            <h3>🔍 Visualizar Configuração</h3>

            <code>npx bmad-method show:config</code>
            <p>Exibe todo o conteúdo do arquivo <code>bmad-config.json</code></p>

            <h3>💡 Boas Práticas de Atualização</h3>

            <ul>
                <li>📅 <strong>Frequência:</strong> Verifique atualizações semanalmente</li>
                <li>💾 <strong>Backup:</strong> Sempre antes de atualizar</li>
                <li>📝 <strong>Changelog:</strong> Leia as notas de versão</li>
                <li>🧪 <strong>Teste:</strong> Teste em projeto de teste primeiro</li>
                <li>🔒 <strong>Produção:</strong> Só atualize em produção após testar</li>
            </ul>

            <h3>🎯 Quando Usar Expansões?</h3>

            <p><strong>Use expansões quando:</strong></p>
            <ul>
                <li>Precisa de agentes especializados para sua área</li>
                <li>Vai desenvolver projetos específicos (jogos, DevOps, etc.)</li>
                <li>Quer acelerar trabalho em nicho específico</li>
            </ul>

            <p><strong>Não use expansões se:</strong></p>
            <ul>
                <li>É iniciante (comece com agentes básicos)</li>
                <li>Não precisa de funcionalidades especializadas</li>
                <li>Quer manter instalação leve e rápida</li>
            </ul>

            <p><strong>Próxima lição:</strong> Aprenda a migrar projetos entre versões do BMad!</p>
        `
    },
    {
        id: 11,
        title: "Migração de Projetos",
        content: `
            <h2>Migrando Projetos Entre Versões</h2>
            <p>Como migrar projetos antigos para novas versões do BMad sem perder trabalho.</p>

            <h3>🔍 Detectando Versões Antigas</h3>

            <p>Abra um projeto antigo e execute:</p>
            <code>npx bmad-method status</code>

            <p><strong>Sinais de versão desatualizada:</strong></p>
            <ul>
                <li>❌ Versão diferente da mais recente</li>
                <li>⚠️ Warnings sobre arquivos obsoletos</li>
                <li>🔴 Erros ao executar comandos</li>
                <li>📝 Estrutura de pastas diferente</li>
            </ul>

            <h3>📋 Checklist de Migração</h3>

            <h4>1. Backup Completo</h4>
            <p>Antes de qualquer coisa:</p>
            <code>cp -r .bmad-core .bmad-core.backup</code>
            <p>Ou faça commit no Git:</p>
            <code>git add . && git commit -m "Backup antes de migrar BMad"</code>

            <h4>2. Anotar Configurações Atuais</h4>
            <code>npx bmad-method show:config</code>
            <p>Salve a saída em um arquivo para referência:</p>
            <code>npx bmad-method show:config > config-backup.txt</code>

            <h4>3. Listar Agentes Instalados</h4>
            <code>npx bmad-method list:agents > agents-backup.txt</code>
            <p>Anote quais agentes você tem instalados</p>

            <h3>🔄 Processo de Migração</h3>

            <h4>Método 1: Atualização In-Place (Recomendado)</h4>

            <p><strong>Passo 1:</strong> Atualizar BMad</p>
            <code>npx bmad-method update</code>

            <p><strong>Passo 2:</strong> Verificar compatibilidade</p>
            <code>npx bmad-method status</code>

            <p><strong>Passo 3:</strong> Testar comandos básicos</p>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method list:config</code>

            <p><strong>Passo 4:</strong> Testar com agente</p>
            <code>As dev, liste os arquivos do projeto</code>
            <p><em>Se funcionar, migração bem-sucedida!</em></p>

            <h4>Método 2: Reinstalação Limpa</h4>

            <p>Use se a atualização in-place falhar:</p>

            <p><strong>Passo 1:</strong> Remover instalação antiga</p>
            <code>rm -rf .bmad-core</code>

            <p><strong>Passo 2:</strong> Reinstalar BMad</p>
            <code>npx bmad-method install</code>

            <p><strong>Passo 3:</strong> Reinstalar agentes e expansões</p>
            <p>Use os arquivos de backup para saber quais reinstalar:</p>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>

            <h3>⚙️ Adaptando Configurações</h3>

            <h4>Verificar Mudanças de Schema</h4>

            <p>Compare o novo <code>bmad-config.json</code> com o backup:</p>
            <ul>
                <li>Novos campos adicionados?</li>
                <li>Campos removidos ou renomeados?</li>
                <li>Novos valores padrão?</li>
            </ul>

            <h4>Ajustar Manualmente (se necessário)</h4>

            <p>Edite <code>.bmad-core/bmad-config.json</code> cuidadosamente:</p>
            <code>
{
  "version": "4.50.0",  ← Versão nova
  "installationType": "full",
  "ideSetup": ["cursor", "claude-code"],
  "language": "pt-BR",
  "newField": "default-value"  ← Campo novo
}
            </code>

            <h3>🧪 Testando Após Migração</h3>

            <h4>Teste 1: Comandos Básicos</h4>
            <code>npx bmad-method status</code>
            <code>npx bmad-method list:agents</code>
            <code>npx bmad-method help</code>

            <h4>Teste 2: Agentes Individuais</h4>
            <code>As dev, liste os arquivos TypeScript do projeto</code>
            <code>As pm, resuma o README.md</code>

            <h4>Teste 3: Projeto Real</h4>
            <p>Tente criar um pequeno projeto com o fluxo completo:</p>
            <code>/bmad-master Crie um componente React de contador</code>

            <h3>🆘 Problemas Comuns e Soluções</h3>

            <h4>Problema: "Agente não encontrado"</h4>
            <p><strong>Solução:</strong> Reinstale o agente</p>
            <code>npx bmad-method install</code>
            <p>Selecione o agente faltante na lista</p>

            <h4>Problema: "Versão incompatível"</h4>
            <p><strong>Solução:</strong> Reinstalação limpa (Método 2)</p>

            <h4>Problema: "Arquivo de configuração corrompido"</h4>
            <p><strong>Solução:</strong> Restaurar backup</p>
            <code>cp .bmad-core.backup/bmad-config.json .bmad-core/</code>

            <h3>📊 Checklist Final</h3>

            <p>✅ Todos os comandos funcionam?</p>
            <p>✅ Todos os agentes estão disponíveis?</p>
            <p>✅ Expansões reinstaladas?</p>
            <p>✅ Projeto de teste funciona?</p>
            <p>✅ Configurações preservadas?</p>

            <h3>💡 Dicas de Manutenção Contínua</h3>

            <ul>
                <li>🔄 Atualize regularmente (não deixe acumular versões)</li>
                <li>💾 Sempre tenha backup antes de atualizar</li>
                <li>📝 Documente suas expansões instaladas</li>
                <li>🧪 Mantenha um projeto de teste para validações</li>
                <li>📚 Leia changelog antes de atualizar</li>
            </ul>

            <p><strong>Próxima lição:</strong> Solução de problemas comuns no dia a dia!</p>
        `
    },
    {
        id: 12,
        title: "Solução de Problemas",
        content: `
            <h2>Solucionando Problemas Comuns</h2>
            <p>Guia prático para resolver os erros mais frequentes do BMad.</p>

            <h3>🔍 Diagnóstico Inicial</h3>

            <p>Sempre comece com estes comandos para diagnosticar:</p>

            <code>npx bmad-method status</code>
            <p><em>Verifica estado geral da instalação</em></p>

            <code>npx bmad-method list:agents</code>
            <p><em>Confirma quais agentes estão disponíveis</em></p>

            <code>npx bmad-method list:config</code>
            <p><em>Verifica arquivos de configuração</em></p>

            <h3>❌ Erro: "Comando não reconhecido"</h3>

            <h4>Sintoma:</h4>
            <code>npx: command not found: bmad-method</code>

            <h4>Causa:</h4>
            <p>Node.js ou NPX não instalado ou fora do PATH</p>

            <h4>Solução:</h4>
            <ol>
                <li>Verificar Node.js: <code>node --version</code></li>
                <li>Se não retornar versão, instale Node.js</li>
                <li>Reinicie o terminal</li>
                <li>Tente novamente</li>
            </ol>

            <h3>❌ Erro: "Agente não encontrado"</h3>

            <h4>Sintoma:</h4>
            <code>Error: Agent 'dev' not found in registry</code>

            <h4>Causa:</h4>
            <p>Agente não foi instalado ou registro corrompido</p>

            <h4>Solução Rápida:</h4>
            <code>npx bmad-method install</code>
            <p>Selecione o agente faltante e instale</p>

            <h4>Solução Completa:</h4>
            <p>Se reinstalação não funcionar:</p>
            <ol>
                <li>Backup: <code>cp -r .bmad-core .bmad-core.backup</code></li>
                <li>Remover: <code>rm -rf .bmad-core</code></li>
                <li>Reinstalar: <code>npx bmad-method install</code></li>
                <li>Configurar novamente</li>
            </ol>

            <h3>❌ Erro: "Arquivo JSON inválido"</h3>

            <h4>Sintoma:</h4>
            <code>SyntaxError: Unexpected token in JSON at position 45</code>

            <h4>Causa:</h4>
            <p>Arquivo <code>bmad-config.json</code> ou <code>bmad-registry.json</code> corrompido</p>

            <h4>Solução:</h4>
            <ol>
                <li>Identificar arquivo com problema (veja mensagem de erro)</li>
                <li>Abrir arquivo em editor</li>
                <li>Validar JSON online: https://jsonlint.com/</li>
                <li>Corrigir vírgulas, chaves, aspas faltando</li>
                <li>Salvar e testar</li>
            </ol>

            <h4>Se não conseguir corrigir:</h4>
            <p>Restaure backup ou reinstale:</p>
            <code>npx bmad-method install</code>

            <h3>❌ Erro: "Versão incompatível"</h3>

            <h4>Sintoma:</h4>
            <code>Warning: BMad version mismatch. Expected 4.50.0, found 4.44.1</code>

            <h4>Causa:</h4>
            <p>Versão do BMad desatualizada</p>

            <h4>Solução:</h4>
            <code>npx bmad-method update</code>
            <p>Se falhar, veja Lição 11 sobre migração</p>

            <h3>❌ Erro: "Permissão negada"</h3>

            <h4>Sintoma:</h4>
            <code>EACCES: permission denied, mkdir '.bmad-core'</code>

            <h4>Causa:</h4>
            <p>Sem permissão para criar arquivos no diretório</p>

            <h4>Solução:</h4>
            <ol>
                <li>Verifique permissões do diretório</li>
                <li>No Linux/Mac: <code>chmod 755 .</code></li>
                <li>No Windows: Execute terminal como Administrador</li>
                <li>Ou mude para diretório com permissões corretas</li>
            </ol>

            <h3>❌ Erro: "API Key inválida"</h3>

            <h4>Sintoma:</h4>
            <code>Error: Invalid API key for Claude/Gemini</code>

            <h4>Causa:</h4>
            <p>Chave de API não configurada ou expirada</p>

            <h4>Solução:</h4>
            <ol>
                <li>Verificar arquivo de configuração da IDE</li>
                <li>Obter nova API key no site do provedor</li>
                <li>Atualizar configuração</li>
                <li>Reiniciar IDE</li>
            </ol>

            <h3>❌ Agente não responde</h3>

            <h4>Sintoma:</h4>
            <p>Comando enviado mas agente não executa nada</p>

            <h4>Causas Possíveis:</h4>
            <ul>
                <li>Sintaxe incorreta do comando</li>
                <li>IDE não configurada corretamente</li>
                <li>Agente não suporta a tarefa solicitada</li>
            </ul>

            <h4>Solução:</h4>
            <ol>
                <li>Verifique sintaxe: <code>As dev, [tarefa]</code></li>
                <li>Use agente correto para a tarefa</li>
                <li>Reinicie a IDE</li>
                <li>Tente tarefa mais simples para testar</li>
            </ol>

            <h3>🛠️ Ferramentas de Diagnóstico</h3>

            <h4>Ver Logs Detalhados</h4>
            <code>npx bmad-method status --verbose</code>

            <h4>Validar Configuração</h4>
            <code>npx bmad-method show:config</code>

            <h4>Testar Conectividade</h4>
            <p>Teste um agente com tarefa simples:</p>
            <code>As dev, liste os arquivos da pasta atual</code>

            <h3>💡 Dicas de Prevenção</h3>

            <ul>
                <li>✅ Mantenha backups regulares de <code>.bmad-core/</code></li>
                <li>✅ Use Git para versionar configurações</li>
                <li>✅ Teste em projeto separado antes de produção</li>
                <li>✅ Documente suas configurações personalizadas</li>
                <li>✅ Leia changelog antes de atualizar</li>
                <li>✅ Não edite arquivos JSON manualmente</li>
            </ul>

            <h3>🆘 Quando Pedir Ajuda</h3>

            <p>Se nenhuma solução funcionou:</p>
            <ol>
                <li>Reúna informações:
                    <ul>
                        <li>Saída de <code>npx bmad-method status</code></li>
                        <li>Mensagem de erro completa</li>
                        <li>Versão do Node.js</li>
                        <li>Sistema operacional</li>
                    </ul>
                </li>
                <li>Abra issue no GitHub: https://github.com/inematds/BMAD-Academy/issues</li>
                <li>Ou pergunte no chatbot desta academy!</li>
            </ol>

            <p><strong>Próxima lição:</strong> Boas práticas para maximizar produtividade!</p>
        `
    },
    {
        id: 13,
        title: "Boas Práticas",
        content: `
            <h2>Boas Práticas e Otimização</h2>
            <p>Maximize sua produtividade com BMad seguindo estas práticas recomendadas.</p>

            <h3>📋 Organização de Projetos</h3>

            <h4>Estrutura de Diretórios Recomendada</h4>
            <code>
meu-projeto/
├── .bmad-core/              ← Configurações BMad
├── docs/                    ← Documentação gerada
│   ├── prd.md              ← PRD do PM
│   ├── architecture.md     ← Arquitetura do Architect
│   └── wireframes/         ← Designs do UX-Expert
├── src/                     ← Código do Dev
├── tests/                   ← Testes do QA
└── README.md
            </code>

            <h4>Convenções de Nomenclatura</h4>
            <ul>
                <li><code>docs/</code> - Documentação gerada pelos agentes</li>
                <li><code>src/</code> - Código-fonte implementado</li>
                <li><code>tests/</code> - Testes e validações</li>
                <li><code>.bmad-core/</code> - NUNCA editar manualmente</li>
            </ul>

            <h3>🎯 Escolhendo o Agente Certo</h3>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border);">
                        <th style="padding: 12px; text-align: left;">Tarefa</th>
                        <th style="padding: 12px; text-align: left;">Agente Ideal</th>
                        <th style="padding: 12px; text-align: left;">Agente Alternativo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Planejar produto</td>
                        <td style="padding: 12px;"><strong>pm</strong></td>
                        <td style="padding: 12px;">analyst</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Escrever código</td>
                        <td style="padding: 12px;"><strong>dev</strong></td>
                        <td style="padding: 12px;">-</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Criar interface</td>
                        <td style="padding: 12px;"><strong>ux-expert</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Definir arquitetura</td>
                        <td style="padding: 12px;"><strong>architect</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border);">
                        <td style="padding: 12px;">Pesquisar mercado</td>
                        <td style="padding: 12px;"><strong>analyst</strong></td>
                        <td style="padding: 12px;">pm</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border); background: var(--bg-card);">
                        <td style="padding: 12px;">Criar testes</td>
                        <td style="padding: 12px;"><strong>qa</strong></td>
                        <td style="padding: 12px;">dev</td>
                    </tr>
                </tbody>
            </table>

            <h3>⚡ Otimizando Comandos</h3>

            <h4>❌ Comandos Vagos (Evite)</h4>
            <code>As dev, crie um site</code>
            <p><em>Muito vago, pode gerar resultado inesperado</em></p>

            <h4>✅ Comandos Específicos (Use)</h4>
            <code>As dev, crie uma landing page HTML com header, hero section e footer responsivo usando Tailwind CSS</code>
            <p><em>Específico, claro, com tecnologias definidas</em></p>

            <h4>💡 Template de Comando Eficaz</h4>
            <code>As [agente], [ação] [o quê] [como] [com quais tecnologias/restrições]</code>

            <p><strong>Exemplos:</strong></p>
            <code>As dev, implemente um formulário de login com validação de email e senha usando React e Formik</code>
            <code>As ux-expert, crie wireframes de baixa fidelidade para um dashboard de vendas com gráficos e tabelas</code>
            <code>As pm, crie um PRD para app mobile de delivery incluindo user stories e critérios de aceitação</code>

            <h3>🔄 Fluxo de Trabalho Ideal</h3>

            <h4>Para Projetos Novos:</h4>
            <ol>
                <li><strong>Analyst</strong>: Pesquisa e análise de requisitos</li>
                <li><strong>PM</strong>: Criação do PRD</li>
                <li><strong>Architect</strong>: Design da arquitetura</li>
                <li><strong>UX-Expert</strong>: Wireframes e design</li>
                <li><strong>Dev</strong>: Implementação</li>
                <li><strong>QA</strong>: Testes e validação</li>
                <li><strong>Dev</strong>: Correções baseadas no QA</li>
            </ol>

            <h4>Para Features Existentes:</h4>
            <ol>
                <li><strong>PM</strong>: Especificação da feature</li>
                <li><strong>Architect</strong>: Design técnico (se complexo)</li>
                <li><strong>Dev</strong>: Implementação</li>
                <li><strong>QA</strong>: Testes</li>
            </ol>

            <h4>Para Bugs:</h4>
            <ol>
                <li><strong>QA</strong>: Reproduzir e documentar bug</li>
                <li><strong>Dev</strong>: Corrigir problema</li>
                <li><strong>QA</strong>: Validar correção</li>
            </ol>

            <h3>💾 Versionamento e Backup</h3>

            <h4>O que versionar no Git:</h4>
            <ul>
                <li>✅ Código-fonte (<code>src/</code>)</li>
                <li>✅ Testes (<code>tests/</code>)</li>
                <li>✅ Documentação (<code>docs/</code>)</li>
                <li>✅ Configurações de projeto</li>
            </ul>

            <h4>O que NÃO versionar:</h4>
            <ul>
                <li>❌ <code>.bmad-core/</code> (opcional, depende do time)</li>
                <li>❌ <code>node_modules/</code></li>
                <li>❌ Arquivos temporários</li>
                <li>❌ API keys e secrets</li>
            </ul>

            <h4>Exemplo .gitignore:</h4>
            <code>
# Dependencies
node_modules/

# BMad (opcional)
.bmad-core/

# Secrets
.env
*.key

# Temporários
*.log
.DS_Store
            </code>

            <h3>📊 Medindo Produtividade</h3>

            <h4>Métricas para Acompanhar:</h4>
            <ul>
                <li>⏱️ <strong>Tempo de projeto:</strong> Manual vs Semi-automático vs Automático</li>
                <li>🎯 <strong>Taxa de sucesso:</strong> % de comandos que geram resultado útil</li>
                <li>🔄 <strong>Iterações:</strong> Quantas vezes precisa refinar comando</li>
                <li>✅ <strong>Qualidade:</strong> Quantos bugs encontrados depois</li>
            </ul>

            <h4>Meta de Eficiência:</h4>
            <p>Com prática, você deve atingir:</p>
            <ul>
                <li>80% dos comandos geram resultado útil na primeira tentativa</li>
                <li>Projetos simples em modo semi-automático: < 30 minutos</li>
                <li>Projetos médios: 1-2 horas (vs 1-2 dias manual)</li>
            </ul>

            <h3>🎓 Aprendizado Contínuo</h3>

            <h4>Técnicas de Melhoria:</h4>
            <ul>
                <li>📝 Documente comandos que funcionaram bem</li>
                <li>🔄 Crie templates de comandos para tarefas recorrentes</li>
                <li>🧪 Experimente diferentes agentes para mesma tarefa</li>
                <li>📊 Compare resultados de modos diferentes</li>
                <li>🤝 Compartilhe aprendizados com a comunidade</li>
            </ul>

            <h3>⚠️ Erros Comuns a Evitar</h3>

            <ul>
                <li>❌ Usar modo automático sem conhecer os agentes</li>
                <li>❌ Pular etapas importantes (arquitetura, testes)</li>
                <li>❌ Comandos vagos esperando resultado perfeito</li>
                <li>❌ Não revisar código gerado</li>
                <li>❌ Editar <code>.bmad-core/</code> manualmente</li>
                <li>❌ Não fazer backup antes de atualizar</li>
            </ul>

            <p><strong>Próxima lição:</strong> Projetos avançados e desafios práticos!</p>
        `
    },
    {
        id: 14,
        title: "Projetos Avançados",
        content: `
            <h2>Projetos Avançados e Desafios</h2>
            <p>Coloque em prática tudo que aprendeu com projetos reais e complexos!</p>

            <h3>🎯 Projeto 1: E-commerce Completo</h3>

            <h4>Objetivo:</h4>
            <p>Criar uma plataforma de e-commerce funcional do zero</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>Catálogo de produtos com busca e filtros</li>
                <li>Carrinho de compras</li>
                <li>Sistema de checkout</li>
                <li>Painel administrativo</li>
                <li>Integração com pagamento (simulado)</li>
            </ul>

            <h4>Fluxo Sugerido:</h4>
            <code>As analyst, pesquise as melhores práticas de e-commerce e principais features</code>
            <code>As pm, crie PRD completo para e-commerce baseado na pesquisa</code>
            <code>As architect, defina arquitetura full-stack (frontend, backend, database)</code>
            <code>As ux-expert, crie wireframes de todas as telas principais</code>
            <code>As dev, implemente o frontend com React e backend com Node.js</code>
            <code>As qa, crie suite de testes E2E e unitários</code>

            <h4>Tecnologias Sugeridas:</h4>
            <ul>
                <li>Frontend: React + TypeScript + Tailwind CSS</li>
                <li>Backend: Node.js + Express + PostgreSQL</li>
                <li>Pagamento: Stripe (test mode)</li>
                <li>Deploy: Vercel + Railway</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Manual: 2-3 semanas | Semi-automático: 3-5 dias | Automático: 1-2 dias</p>

            <h3>🎯 Projeto 2: Sistema de Gestão Médica (SaaS)</h3>

            <h4>Objetivo:</h4>
            <p>Plataforma multi-tenant para consultórios médicos</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>Cadastro de pacientes e médicos</li>
                <li>Agendamento de consultas</li>
                <li>Prontuário eletrônico</li>
                <li>Sistema de notificações (email/SMS)</li>
                <li>Relatórios e dashboards</li>
                <li>Multi-tenancy (um sistema, vários consultórios)</li>
            </ul>

            <h4>Modo Recomendado:</h4>
            <p>Semi-automático com revisões em cada etapa</p>

            <code>/bmad-master Crie sistema de gestão médica SaaS com prontuário, agendamento e multi-tenancy</code>
            <p><em>Revise e aprove cada etapa antes de continuar</em></p>

            <h4>Desafios Técnicos:</h4>
            <ul>
                <li>Segurança (LGPD/HIPAA compliance)</li>
                <li>Performance com muitos usuários simultâneos</li>
                <li>Isolamento de dados entre tenants</li>
                <li>Backup automático de prontuários</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automático: 1-2 semanas | Automático: 3-5 dias</p>

            <h3>🎯 Projeto 3: Plataforma de Cursos Online</h3>

            <h4>Objetivo:</h4>
            <p>Sistema completo de ensino à distância (tipo Udemy)</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>Criação e gestão de cursos</li>
                <li>Player de vídeo com progresso</li>
                <li>Quizzes e exercícios</li>
                <li>Certificados de conclusão</li>
                <li>Sistema de pagamento</li>
                <li>Área do instrutor e do aluno</li>
            </ul>

            <h4>Fluxo Completo:</h4>
            <code>As analyst, analise principais plataformas de curso e liste features essenciais</code>
            <code>As pm, crie PRD com user stories para alunos e instrutores</code>
            <code>As architect, defina arquitetura escalável com CDN para vídeos</code>
            <code>As ux-expert, crie protótipo navegável das jornadas principais</code>
            <code>/bmad-master Implemente a plataforma seguindo PRD e arquitetura</code>
            <code>As qa, crie testes para jornadas críticas (compra, assistir aula, certificado)</code>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automático: 2-3 semanas</p>

            <h3>🎯 Projeto 4: App Mobile de Produtividade</h3>

            <h4>Objetivo:</h4>
            <p>Aplicativo de gestão de tarefas e produtividade (tipo Todoist)</p>

            <h4>Requisitos:</h4>
            <ul>
                <li>Criação e organização de tarefas</li>
                <li>Projetos e sub-tarefas</li>
                <li>Prioridades e datas</li>
                <li>Notificações push</li>
                <li>Sincronização entre dispositivos</li>
                <li>Modo offline</li>
            </ul>

            <h4>Expansão Necessária:</h4>
            <code>npx bmad-method add:expansion bmad-mobile-dev</code>

            <h4>Tecnologias:</h4>
            <ul>
                <li>React Native + TypeScript</li>
                <li>Firebase (auth, database, notifications)</li>
                <li>Redux para state management</li>
                <li>Expo para desenvolvimento rápido</li>
            </ul>

            <h4>Tempo Estimado:</h4>
            <p>Semi-automático: 1-2 semanas</p>

            <h3>🎯 Projeto 5: Jogo 2D com Phaser</h3>

            <h4>Objetivo:</h4>
            <p>Jogo 2D estilo plataforma com níveis e power-ups</p>

            <h4>Expansão Necessária:</h4>
            <code>npx bmad-method add:expansion bmad-2d-phaser-game-dev</code>

            <h4>Requisitos:</h4>
            <ul>
                <li>Movimento de personagem (pular, correr)</li>
                <li>3 níveis com dificuldade crescente</li>
                <li>Inimigos com IA básica</li>
                <li>Sistema de pontuação</li>
                <li>Power-ups e coletáveis</li>
                <li>Menu e tela de game over</li>
            </ul>

            <h4>Comando Sugerido:</h4>
            <code>/bmad-master Crie jogo de plataforma 2D com Phaser.js, 3 níveis, inimigos e power-ups</code>

            <h4>Tempo Estimado:</h4>
            <p>Automático: 2-3 dias</p>

            <h3>🏆 Desafios Extras</h3>

            <h4>🔥 Desafio Speed Run</h4>
            <p>Crie um CRUD completo em menos de 30 minutos usando modo automático:</p>
            <code>/bmad-master auto Crie CRUD de produtos com React, Node.js e PostgreSQL</code>

            <h4>🔥 Desafio Quality</h4>
            <p>Crie projeto com 100% de cobertura de testes:</p>
            <code>As qa, garanta que todos os componentes e endpoints tenham testes unitários e de integração</code>

            <h4>🔥 Desafio Microservices</h4>
            <p>Arquitetura de microserviços com 3+ serviços:</p>
            <code>npx bmad-method add:expansion bmad-infrastructure-devops</code>
            <code>As architect, crie arquitetura de microserviços com API Gateway, Auth Service, Product Service e Order Service</code>

            <h3>📊 Critérios de Avaliação</h3>

            <p>Para cada projeto, avalie:</p>
            <ul>
                <li>✅ Funcionalidades implementadas vs requisitos</li>
                <li>✅ Qualidade do código (linting, patterns)</li>
                <li>✅ Cobertura de testes</li>
                <li>✅ Documentação gerada</li>
                <li>✅ Performance e otimização</li>
                <li>✅ UX e design</li>
            </ul>

            <h3>💡 Dicas para Projetos Avançados</h3>

            <ul>
                <li>📝 Sempre comece com PRD detalhado</li>
                <li>🏗️ Não pule arquitetura em projetos complexos</li>
                <li>🧪 Teste continuamente, não só no final</li>
                <li>📦 Use expansões para projetos especializados</li>
                <li>🔄 Itere: Versão 1 simples, depois melhorias</li>
                <li>💾 Versione tudo no Git</li>
            </ul>

            <p><strong>Parabéns!</strong> Você está pronto para projetos profissionais complexos! 🎉</p>
        `
    },
    {
        id: 15,
        title: "Próximos Passos",
        content: `
            <h2>Próximos Passos e Comunidade</h2>
            <p>Você completou o curso! Veja o que fazer agora e como continuar evoluindo.</p>

            <h3>🎓 O Que Você Aprendeu</h3>

            <p>Parabéns! Você agora domina:</p>

            <ul>
                <li>✅ Fundamentos do BMad Method</li>
                <li>✅ Instalação e configuração completa</li>
                <li>✅ Todos os agentes e suas especialidades</li>
                <li>✅ Comandos básicos e avançados</li>
                <li>✅ Arquivos de configuração</li>
                <li>✅ Criação de projetos (manual, semi-automático, automático)</li>
                <li>✅ Atualização e migração</li>
                <li>✅ Solução de problemas comuns</li>
                <li>✅ Boas práticas de produtividade</li>
                <li>✅ Projetos avançados e complexos</li>
            </ul>

            <h3>🎯 Próximos Passos Práticos</h3>

            <h4>1. Crie Seu Primeiro Projeto Real</h4>
            <p>Escolha um problema real da sua profissão e crie uma solução:</p>
            <ul>
                <li>Advogados: Sistema de gestão de processos</li>
                <li>Médicos: Prontuário eletrônico</li>
                <li>Professores: Plataforma de exercícios</li>
                <li>Empreendedores: MVP do seu produto</li>
            </ul>

            <h4>2. Explore Expansões Especializadas</h4>
            <code>npx bmad-method list:expansions</code>
            <p>Instale expansões relevantes para sua área:</p>
            <ul>
                <li>Game Dev → <code>bmad-2d-phaser-game-dev</code></li>
                <li>DevOps → <code>bmad-infrastructure-devops</code></li>
                <li>Mobile → <code>bmad-mobile-dev</code></li>
                <li>Escrita → <code>bmad-creative-writing</code></li>
            </ul>

            <h4>3. Contribua com a Comunidade</h4>
            <p>Compartilhe seus projetos e aprendizados:</p>
            <ul>
                <li>GitHub: Faça fork de projetos BMad</li>
                <li>Issues: Reporte bugs e sugira melhorias</li>
                <li>Discussions: Tire dúvidas e ajude outros</li>
                <li>Pull Requests: Contribua com código</li>
            </ul>

            <h3>🔗 Links Importantes</h3>

            <h4>Repositórios Oficiais:</h4>
            <ul>
                <li>🏫 <strong>INEMA BMad Academy:</strong><br>
                    <code>https://github.com/inematds/BMAD-Academy</code><br>
                    <em>Este projeto (academy)</em>
                </li>
                <li>🚀 <strong>BMad Method (oficial):</strong><br>
                    <code>https://github.com/bmad-method/bmad-method</code><br>
                    <em>Framework principal</em>
                </li>
            </ul>

            <h4>Documentação:</h4>
            <ul>
                <li>📚 Docs oficiais do BMad</li>
                <li>📖 Exemplos e templates</li>
                <li>🎥 Vídeos tutoriais (em breve)</li>
            </ul>

            <h3>💬 Comunidade e Suporte</h3>

            <h4>Onde Pedir Ajuda:</h4>
            <ul>
                <li>💬 <strong>Chatbot desta Academy</strong> - Perguntas rápidas</li>
                <li>🐛 <strong>GitHub Issues</strong> - Bugs e problemas técnicos</li>
                <li>💡 <strong>GitHub Discussions</strong> - Ideias e dúvidas gerais</li>
                <li>📧 <strong>Email:</strong> inematds@gmail.com</li>
            </ul>

            <h4>Como Contribuir:</h4>

            <p><strong>1. Melhorias nesta Academy:</strong></p>
            <ol>
                <li>Fork: <code>https://github.com/inematds/BMAD-Academy</code></li>
                <li>Crie branch: <code>git checkout -b feature/minha-melhoria</code></li>
                <li>Faça mudanças</li>
                <li>Commit: <code>git commit -m "feat: adiciona nova lição"</code></li>
                <li>Push: <code>git push origin feature/minha-melhoria</code></li>
                <li>Abra Pull Request</li>
            </ol>

            <p><strong>2. Sugestões de Contribuição:</strong></p>
            <ul>
                <li>📝 Novas lições ou conteúdo</li>
                <li>🎮 Mais desafios no Playground</li>
                <li>🌐 Tradução para outros idiomas</li>
                <li>🐛 Correção de bugs</li>
                <li>🎨 Melhorias de design</li>
                <li>📚 Exemplos de projetos</li>
            </ul>

            <h3>🎨 Personalize Sua Experiência</h3>

            <h4>Crie Seus Próprios Agentes:</h4>
            <p>Agentes customizados para necessidades específicas da sua profissão</p>

            <h4>Templates de Comandos:</h4>
            <p>Crie biblioteca de comandos que funcionam bem para você</p>

            <h4>Workflows Personalizados:</h4>
            <p>Adapte fluxos de trabalho para sua rotina</p>

            <h3>📈 Continue Evoluindo</h3>

            <h4>Metas de Curto Prazo (1-2 semanas):</h4>
            <ul>
                <li>✅ Completar 1 projeto pequeno</li>
                <li>✅ Experimentar modo semi-automático</li>
                <li>✅ Instalar 1 expansão</li>
            </ul>

            <h4>Metas de Médio Prazo (1-2 meses):</h4>
            <ul>
                <li>✅ Completar 3 projetos médios</li>
                <li>✅ Dominar modo automático</li>
                <li>✅ Contribuir com 1 issue/PR</li>
            </ul>

            <h4>Metas de Longo Prazo (3-6 meses):</h4>
            <ul>
                <li>✅ Completar 1 projeto profissional complexo</li>
                <li>✅ Criar agentes customizados</li>
                <li>✅ Ajudar outros na comunidade</li>
            </ul>

            <h3>🏆 Certificado de Conclusão</h3>

            <p>Você completou todas as 15 lições da <strong>INEMA BMad Academy</strong>!</p>

            <p>Parabéns por dominar o BMad Method. Você agora pode:</p>
            <ul>
                <li>🚀 Criar projetos complexos sem ser programador</li>
                <li>⚡ Automatizar tarefas com agentes de IA</li>
                <li>🎯 Resolver problemas reais da sua profissão</li>
                <li>🤝 Contribuir com a comunidade BMad</li>
            </ul>

            <p><strong>Compartilhe sua conquista:</strong></p>
            <p>#BMadMethod #INEMABMadAcademy #IAGenerativa #AutomacaoInteligente</p>

            <h3>💡 Mensagem Final</h3>

            <p>O BMad Method é uma ferramenta poderosa que democratiza a criação de soluções tecnológicas. Você não precisa ser programador para criar sistemas incríveis - você só precisa ter boas ideias e saber comunicá-las aos agentes.</p>

            <p><strong>Lembre-se:</strong></p>
            <ul>
                <li>🎯 Comece pequeno, pense grande</li>
                <li>🔄 Pratique regularmente</li>
                <li>📚 Continue aprendendo</li>
                <li>🤝 Ajude outros a aprender</li>
                <li>🚀 Transforme suas ideias em realidade</li>
            </ul>

            <p style="text-align: center; font-size: 1.5rem; margin: 40px 0;">
                <strong>Boa sorte na sua jornada com BMad! 🎉</strong>
            </p>

            <p style="text-align: center;">
                <em>Desenvolvido com 🤖 por INEMA usando BMad Method e Claude Code</em>
            </p>

            <hr style="margin: 40px 0; border-color: var(--border);">

            <p style="text-align: center;">
                <strong>Gostou da academy? Dê uma ⭐ no GitHub!</strong><br>
                <code>https://github.com/inematds/BMAD-Academy</code>
            </p>
        `
    }
];
