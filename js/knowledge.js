// Base de conhecimento do BMad
const knowledgeBase = {
    // Informações gerais
    about: {
        keywords: ['o que é', 'que é', 'definição', 'sobre', 'bmad', 'explicar'],
        answer: `O BMad Method é um framework universal de agentes de IA que permite qualquer pessoa criar soluções complexas sem precisar ser programador. É como ter uma equipe completa de especialistas (desenvolvedores, designers, gerentes) trabalhando para você através de comandos simples.`
    },

    // Instalação
    install: {
        keywords: ['instalar', 'instalação', 'como instalar', 'setup', 'começar'],
        answer: `Para instalar o BMad:

1. Verifique se tem Node.js: node --version
2. Execute: npx bmad-method status
3. Instale no projeto: npx bmad-method install
4. Siga as instruções para selecionar os agentes

O instalador é interativo e deve ser executado manualmente no terminal.`
    },

    // Comandos
    commands: {
        keywords: ['comandos', 'comando', 'como usar', 'usage', 'sintaxe'],
        answer: `Comandos principais do BMad:

• npx bmad-method status - Ver instalação
• npx bmad-method list:agents - Listar agentes
• npx bmad-method list:expansions - Ver pacotes
• npx bmad-method update - Atualizar
• npx bmad-method help - Ajuda

Para usar agentes na IDE:
"As dev, implemente uma função de login"
"As ux-expert, crie um mockup de dashboard"`
    },

    // Agentes principais
    agents: {
        keywords: ['agentes', 'agente', 'quais agentes', 'especialistas', 'roles'],
        answer: `Agentes principais do BMad:

🚀 dev - Desenvolvedor Full Stack
Usar para: criar código, corrigir bugs, implementar features

🎨 ux-expert - Designer UX/UI
Usar para: interfaces, wireframes, experiência do usuário

📋 pm - Gerente de Produto
Usar para: PRDs, estratégia, planejamento de features

🏗️ architect - Arquiteto de Software
Usar para: design de sistema, arquitetura, escolha de tech

🔍 analyst - Analista de Negócios
Usar para: pesquisa, análise competitiva, brainstorming

🧪 qa - Especialista em Testes
Usar para: testes, qualidade, revisão de código`
    },

    // Agente específico - dev
    agent_dev: {
        keywords: ['dev', 'desenvolvedor', 'programar', 'código'],
        answer: `Agente DEV (Desenvolvedor Full Stack)

Nome: dev
Quando usar: Implementação de código, debugging, refatoração, desenvolvimento

Exemplos de uso:
• "As dev, crie uma função que calcule juros compostos"
• "As dev, corrija o bug na autenticação"
• "As dev, refatore este código para melhor performance"
• "As dev, adicione validação de formulário"`
    },

    // Agente específico - ux-expert
    agent_ux: {
        keywords: ['ux', 'designer', 'interface', 'ui', 'design'],
        answer: `Agente UX-EXPERT (Designer UX/UI)

Nome: Sally (ux-expert)
Quando usar: Design de interfaces, wireframes, protótipos, experiência do usuário

Exemplos de uso:
• "As ux-expert, desenhe uma tela de login moderna"
• "As ux-expert, crie wireframes para dashboard"
• "As ux-expert, melhore a UX do checkout"
• "As ux-expert, sugira melhorias de acessibilidade"`
    },

    // Agente específico - pm
    agent_pm: {
        keywords: ['pm', 'product manager', 'gerente', 'prd'],
        answer: `Agente PM (Gerente de Produto)

Nome: pm
Quando usar: Criação de PRDs, estratégia de produto, priorização, planejamento

Exemplos de uso:
• "As pm, crie um PRD para um app de delivery"
• "As pm, defina a estratégia para o próximo trimestre"
• "As pm, priorize estas features"
• "As pm, crie critérios de aceitação para esta história"`
    },

    // Primeiro projeto
    first_project: {
        keywords: ['primeiro projeto', 'começar projeto', 'criar projeto', 'exemplo prático'],
        answer: `Para criar seu primeiro projeto com BMad:

1. Planejar: "As analyst, defina requisitos de um sistema de agendamento"
2. PRD: "As pm, crie um PRD baseado nos requisitos"
3. Arquitetura: "As architect, defina a arquitetura técnica"
4. Design: "As ux-expert, crie wireframes das telas"
5. Implementar: "As dev, implemente a funcionalidade"

Dica: Trabalhe por etapas, use o agente certo para cada tarefa!`
    },

    // Casos de uso
    use_cases: {
        keywords: ['casos de uso', 'exemplos', 'usar para', 'aplicações', 'profissão'],
        answer: `Casos de uso por profissão:

👨‍⚖️ Advogados:
• Sistema de gestão de processos
• Análise automática de contratos
• Calculadora de honorários

👨‍⚕️ Médicos:
• Prontuário eletrônico
• Agendamento de consultas
• Portal do paciente

👨‍🏫 Professores:
• Plataforma de exercícios
• Sistema de correção automática
• Gerador de provas

💼 Empreendedores:
• Landing pages
• CRM simples
• Dashboard de métricas`
    },

    // Expansões
    expansions: {
        keywords: ['expansões', 'pacotes', 'expansion', 'extensões'],
        answer: `Pacotes de Expansão disponíveis:

📦 bmad-2d-phaser-game-dev
Desenvolvimento de jogos 2D com Phaser

📦 bmad-infrastructure-devops
DevOps e Infraestrutura

📦 bmad-creative-writing
Escrita criativa e storytelling

📦 bmad-godot-game-dev
Desenvolvimento com Godot

Para ver todos: npx bmad-method list:expansions`
    },

    // Versão
    version: {
        keywords: ['versão', 'version', 'atualizar', 'update'],
        answer: `A versão atual do BMad mostrada nesta academy é 4.44.1.

Para verificar sua versão:
npx bmad-method status

Para atualizar:
npx bmad-method update

Para verificar se há atualizações:
npx bmad-method update-check`
    },

    // Ajuda geral
    help: {
        keywords: ['ajuda', 'help', 'socorro', 'não sei', 'dúvida'],
        answer: `Como posso te ajudar?

Você pode perguntar sobre:
• O que é o BMad
• Como instalar
• Quais são os agentes
• Como criar um projeto
• Comandos disponíveis
• Casos de uso práticos
• Pacotes de expansão

Ou navegue pelo tutorial para aprender passo a passo!`
    },

    // IDEs suportadas
    ides: {
        keywords: ['ide', 'editor', 'cursor', 'vscode', 'code', 'copilot'],
        answer: `IDEs suportadas pelo BMad:

• Claude Code (VS Code + Claude) - Sintaxe: /agente
• Cursor - Sintaxe: @agente
• VS Code + Copilot - Sintaxe: @agente
• Windsurf (Codeium) - Sintaxe: @agente
• Gemini (Google AI Studio)
• OpenCode (via opencode.jsonc)
• Codex CLI (Terminal)
• Codex Web (GitHub Web via AGENTS.md)

A sintaxe varia por IDE:
- / (slash) → Claude Code
- @ (arroba) → Cursor, VS Code, Windsurf
- "As agente," → Linguagem natural (funciona em todas)

O BMad se integra com estas IDEs através de arquivos de configuração na pasta .bmad-core do seu projeto.`
    },

    // QA Avançado (Test Architect)
    qa_advanced: {
        keywords: ['qa avançado', 'test architect', 'quality gate', 'risk', '*risk', '*design', 'test strategy'],
        answer: `QA Test Architect - Comandos Avançados:

O agente QA do BMad é um Test Architect profissional, não apenas um revisor de código.

COMANDOS PRINCIPAIS:
• *risk      - Análise de riscos (antes de desenvolver)
• *design    - Criar estratégia de testes
• *trace     - Verificar cobertura de requisitos
• *nfr       - Validar NFRs (Security, Performance, etc)
• *review    - Revisão completa + refactoring
• *gate      - Quality Gate decision (PASS/FAIL/CONCERNS)

QUANDO USAR:
- *risk e *design → ANTES de codificar (planning)
- *trace e *nfr → DURANTE desenvolvimento (checkpoints)
- *review e *gate → DEPOIS de implementar (review)

SINTAXE:
@qa *risk docs/stories/epic1.story1-login.md
@qa *design docs/stories/epic1.story1-login.md
@qa *review docs/stories/epic1.story1-login.md

QUALITY GATES:
- PASS: Tudo ok, pode continuar
- CONCERNS: Issues não-críticos, revisar
- FAIL: Issues críticos, corrigir antes
- WAIVED: Aceito com justificativa`
    },

    // Workflow completo
    workflow: {
        keywords: ['workflow', 'fluxo', 'processo', 'como funciona', 'ordem certa'],
        answer: `Workflow Completo do BMad Method:

FASE 1: PLANNING (Web UI recomendado)
1. @analyst - Research e requisitos
2. @pm - Criar PRD (Product Requirements Document)
3. @architect - Definir arquitetura técnica
4. @ux-expert - (Opcional) Front-end spec
5. @po - Validar documentos

FASE 2: SHARDING (IDE)
6. @po shard PRD - Dividir em épicos/stories
7. @po shard Architecture - Dividir arquitetura

FASE 3: DEVELOPMENT (IDE)
8. @sm - Draftar próxima story do épico
9. @qa *risk - Avaliar riscos da story
10. @qa *design - Criar estratégia de testes
11. @dev *develop-story - Implementar
12. @qa *review - Revisar e criar quality gate
13. Commit código
14. Repetir 8-13 até completar épico

PROJETOS PEQUENOS:
pm → dev → qa (simplificado)

PROJETOS MÉDIOS:
analyst → pm → architect → ux-expert → dev → qa

PROJETOS GRANDES:
Workflow completo com SM, PO e QA gates`
    },

    // Sharding
    sharding: {
        keywords: ['sharding', 'shard', 'dividir', 'epics', 'stories', 'epic', 'story'],
        answer: `Sharding no BMad Method:

O QUE É:
Sharding = dividir documentos grandes em pedaços menores

POR QUÊ:
- PRD e Architecture são muito grandes
- Dev precisa de pedaços pequenos (stories)
- Cada story = 1 tarefa implementável

COMO FUNCIONA:
1. PM cria PRD completo (docs/prd.md)
2. Architect cria Architecture (docs/architecture.md)
3. PO shard PRD → docs/epics/*.md
4. PO shard Architecture → docs/architecture/*.md
5. SM pega 1 épico → cria stories (docs/stories/*.md)
6. Dev implementa 1 story por vez

COMANDO:
@po shard o PRD em épicos e stories
@po shard a arquitetura por módulos

ESTRUTURA GERADA:
docs/
  ├── prd.md (original)
  ├── architecture.md (original)
  ├── epics/
  │   ├── epic1-authentication.md
  │   └── epic2-user-management.md
  └── stories/
      ├── epic1.story1-login.md
      └── epic1.story2-register.md`
    },

    // SM e PO
    sm_po: {
        keywords: ['sm', 'scrum master', 'po', 'product owner', 'stories', 'sprint'],
        answer: `SM (Scrum Master) e PO (Product Owner):

SCRUM MASTER (SM):
• Gerencia stories e sprints
• Pega épicos e cria stories detalhadas
• Divide stories em tasks
• Organiza desenvolvimento iterativo

Quando usar:
@sm crie stories para o próximo sprint baseado neste épico
@sm draft a próxima story do épico de autenticação

PRODUCT OWNER (PO):
• Valida documentos (PRD vs Architecture)
• Faz sharding (divide docs grandes)
• Garante alinhamento entre planejamento e implementação

Quando usar:
@po valide o PRD contra a arquitetura
@po shard o PRD em épicos e stories
@po shard a arquitetura por módulos

WORKFLOW:
Planning → PO valida → PO shard → SM cria stories → Dev implementa`
    },

    // Quality Gates
    quality_gates: {
        keywords: ['quality gate', 'gate', 'pass', 'fail', 'concerns', 'waived'],
        answer: `Quality Gates no BMad:

O QUE SÃO:
Decisões de qualidade que o QA faz após revisar código

STATUS POSSÍVEIS:
• PASS - Tudo ok, pode prosseguir
• CONCERNS - Issues não-críticos encontrados
• FAIL - Issues críticos, precisa corrigir
• WAIVED - Issues aceitos com justificativa

QUANDO É CRIADO:
Após @qa *review da story implementada

ONDE FICA:
docs/qa/gates/{epic}.{story}-{slug}.yml

EXEMPLO:
Status: PASS
Risk Level: LOW
Test Coverage: 95%
P0 Tests: 8/8 passing

COMO USAR:
1. Dev marca story "Ready for Review"
2. @qa *review {story} - QA analisa tudo
3. QA cria quality gate com decisão
4. Se FAIL → Dev corrige → @qa *gate atualiza
5. Se PASS → Story done → próxima story`
    }
};

// Função para buscar resposta na base de conhecimento
function findAnswer(question) {
    const questionLower = question.toLowerCase().trim();

    // Buscar correspondência nas keywords
    for (const [key, data] of Object.entries(knowledgeBase)) {
        for (const keyword of data.keywords) {
            if (questionLower.includes(keyword)) {
                return data.answer;
            }
        }
    }

    // Resposta padrão se não encontrar
    return `Desculpe, não encontrei uma resposta específica para isso.

Tente perguntar sobre:
• O que é o BMad
• Como instalar
• Quais agentes existem
• Como criar um projeto
• Comandos disponíveis

Ou explore o Tutorial para aprender mais!`;
}
