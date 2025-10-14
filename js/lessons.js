// Conteúdo das lições
const lessons = [
    {
        id: 1,
        title: "O que é o BMad?",
        content: `
            <h2>O que é o BMad Method?</h2>
            <p>BMad Method é um framework universal de agentes de IA que permite qualquer pessoa criar soluções complexas sem precisar ser programador.</p>

            <h3>Conceitos Principais:</h3>
            <ul>
                <li><strong>Agentes:</strong> Especialistas virtuais que executam tarefas (desenvolvedor, designer, gerente, etc.)</li>
                <li><strong>Comandos:</strong> Instruções simples que você dá aos agentes</li>
                <li><strong>Projetos:</strong> Soluções completas criadas pela combinação de agentes</li>
            </ul>

            <h3>Por que usar BMad?</h3>
            <p>Imagine ter uma equipe completa de especialistas trabalhando para você instantaneamente:</p>
            <ul>
                <li>Desenvolvedores para criar código</li>
                <li>Designers para criar interfaces</li>
                <li>Gerentes de projeto para organizar tudo</li>
                <li>E muito mais!</li>
            </ul>

            <p><strong>Tudo isso através de comandos simples no terminal.</strong></p>
        `
    },
    {
        id: 2,
        title: "Instalando o BMad",
        content: `
            <h2>Como Instalar o BMad</h2>
            <p>A instalação do BMad é muito simples e requer apenas o Node.js instalado.</p>

            <h3>Passo 1: Verificar Node.js</h3>
            <p>Abra seu terminal e digite:</p>
            <code>node --version</code>
            <p>Se aparecer uma versão (ex: v18.0.0), você já tem Node.js instalado.</p>

            <h3>Passo 2: Executar o BMad</h3>
            <p>Digite no terminal:</p>
            <code>npx bmad-method status</code>
            <p>Este comando verifica se o BMad está instalado e mostra a versão.</p>

            <h3>Passo 3: Instalar no seu projeto</h3>
            <p>Navegue até a pasta do seu projeto e execute:</p>
            <code>npx bmad-method install</code>
            <p>Siga as instruções na tela para selecionar os agentes que deseja instalar.</p>

            <h3>Pronto!</h3>
            <p>Agora você já tem o BMad instalado e pronto para usar.</p>
        `
    },
    {
        id: 3,
        title: "Conhecendo os Agentes",
        content: `
            <h2>Agentes Principais do BMad</h2>
            <p>O BMad oferece diversos agentes especializados. Aqui estão os principais:</p>

            <h3>🚀 dev (Desenvolvedor Full Stack)</h3>
            <p>Use para: Criar código, corrigir bugs, implementar funcionalidades</p>
            <code>As dev, crie uma função que calcule juros compostos</code>

            <h3>🎨 ux-expert (Designer UX/UI)</h3>
            <p>Use para: Criar interfaces, wireframes, melhorar experiência do usuário</p>
            <code>As ux-expert, desenhe uma tela de login moderna</code>

            <h3>📋 pm (Gerente de Produto)</h3>
            <p>Use para: Criar PRDs, definir estratégias, planejar features</p>
            <code>As pm, crie um PRD para um app de delivery</code>

            <h3>🏗️ architect (Arquiteto de Software)</h3>
            <p>Use para: Design de sistema, escolha de tecnologias, arquitetura</p>
            <code>As architect, defina a arquitetura de um e-commerce</code>

            <h3>🔍 analyst (Analista de Negócios)</h3>
            <p>Use para: Pesquisa de mercado, análise competitiva, brainstorming</p>
            <code>As analyst, faça uma análise de mercado para meu produto</code>

            <p><strong>Dica:</strong> Para ver todos os agentes disponíveis, use: <code>npx bmad-method list:agents</code></p>
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
        title: "Seu Primeiro Projeto",
        content: `
            <h2>Criando Seu Primeiro Projeto com BMad</h2>
            <p>Vamos criar um projeto simples passo a passo:</p>

            <h3>Exemplo: Sistema de Agendamento</h3>
            <p>Vamos criar um sistema básico de agendamento para consultórios.</p>

            <h3>Passo 1: Planejar</h3>
            <code>As analyst, ajude-me a definir os requisitos de um sistema de agendamento médico</code>

            <h3>Passo 2: Criar PRD</h3>
            <code>As pm, crie um PRD baseado nos requisitos que o analyst definiu</code>

            <h3>Passo 3: Definir Arquitetura</h3>
            <code>As architect, defina a arquitetura técnica deste sistema</code>

            <h3>Passo 4: Criar Interface</h3>
            <code>As ux-expert, crie wireframes das principais telas</code>

            <h3>Passo 5: Implementar</h3>
            <code>As dev, implemente a funcionalidade de agendamento seguindo a arquitetura</code>

            <h3>Dicas:</h3>
            <ul>
                <li>Trabalhe por etapas, não tente fazer tudo de uma vez</li>
                <li>Use o agente certo para cada tarefa</li>
                <li>Peça revisões: "As qa, revise este código"</li>
                <li>Documente: "As dev, adicione comentários ao código"</li>
            </ul>

            <p><strong>Parabéns!</strong> Você agora sabe como criar projetos completos com BMad!</p>
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
    }
];
