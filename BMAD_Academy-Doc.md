# 📚 INEMA BMad Academy - Documentação Completa

## 🎯 Visão Geral

Plataforma educacional interativa em português para ensinar o **BMad Method** - framework de agentes de IA que permite criar soluções sem ser programador.

**URL do Repositório:** https://github.com/inematds/BMAD-Academy

---

## 🏠 Página Inicial (Home)

### Hero Section
- Explicação do que é BMad Method
- Tagline: "Crie soluções com IA sem ser programador"
- Descrição: Framework que permite criar soluções usando agentes de IA, mesmo sem conhecimento técnico

### 3 Cards Interativos (Clicáveis)

1. **🤖 Agentes Inteligentes**
   - Descrição: Use especialistas virtuais (desenvolvedores, designers, gerentes de projeto)
   - Ação: Clique leva para Lição 3 (Conhecendo os Agentes)

2. **⚡ Rápido e Fácil**
   - Descrição: Crie projetos complexos em minutos, não semanas
   - Ação: Clique leva para Lição 4 (Comandos Básicos)

3. **🎯 Para Você**
   - Descrição: Advogados, médicos, professores - qualquer profissão
   - Ação: Clique leva para Lição 6 (Casos de Uso Práticos)

---

## 📖 Tutorial - 9 Lições Completas

### Lição 1: O que é o BMad?

**Conteúdo:**
- Definição do BMad Method
- Conceitos principais:
  - **Agentes**: Especialistas virtuais que executam tarefas
  - **Comandos**: Instruções simples dadas aos agentes
  - **Projetos**: Soluções completas criadas pela combinação de agentes

**Por que usar BMad:**
- Ter uma equipe completa de especialistas instantaneamente
- Desenvolvedores para criar código
- Designers para criar interfaces
- Gerentes de projeto para organizar tudo
- Tudo através de comandos simples no terminal

---

### Lição 2: Instalando o BMad

**Passo a Passo:**

1. **Verificar Node.js**
   ```bash
   node --version
   ```
   Se aparecer uma versão (ex: v18.0.0), você já tem Node.js instalado

2. **Executar o BMad**
   ```bash
   npx bmad-method status
   ```
   Verifica se o BMad está instalado e mostra a versão

3. **Instalar no projeto**
   ```bash
   npx bmad-method install
   ```
   Seguir as instruções na tela para selecionar os agentes

---

### Lição 3: Conhecendo os Agentes

**Agentes Principais:**

#### 🚀 dev (Desenvolvedor Full Stack)
- **Usar para:** Criar código, corrigir bugs, implementar funcionalidades
- **Exemplo:** `As dev, crie uma função que calcule juros compostos`

#### 🎨 ux-expert (Designer UX/UI)
- **Nome:** Sally
- **Usar para:** Criar interfaces, wireframes, melhorar experiência do usuário
- **Exemplo:** `As ux-expert, desenhe uma tela de login moderna`

#### 📋 pm (Gerente de Produto)
- **Usar para:** Criar PRDs, definir estratégias, planejar features
- **Exemplo:** `As pm, crie um PRD para um app de delivery`

#### 🏗️ architect (Arquiteto de Software)
- **Usar para:** Design de sistema, escolha de tecnologias, arquitetura
- **Exemplo:** `As architect, defina a arquitetura de um e-commerce`

#### 🔍 analyst (Analista de Negócios)
- **Usar para:** Pesquisa de mercado, análise competitiva, brainstorming
- **Exemplo:** `As analyst, faça uma análise de mercado para meu produto`

#### 🧪 qa (Especialista em Testes)
- **Usar para:** Criar testes, garantir qualidade, revisar código
- **Exemplo:** `As qa, crie testes unitários para esta função`

**Dica:** Para ver todos os agentes disponíveis: `npx bmad-method list:agents`

---

### Lição 4: Comandos Básicos

**Comandos Essenciais:**

#### Ver Status da Instalação
```bash
npx bmad-method status
```
Mostra versão, agentes instalados e configurações

#### Listar Agentes Disponíveis
```bash
npx bmad-method list:agents
```
Lista todos os agentes e suas especialidades

#### Listar Pacotes de Expansão
```bash
npx bmad-method list:expansions
```
Mostra pacotes especializados (Game Dev, DevOps, etc.)

#### Atualizar BMad
```bash
npx bmad-method update
```
Atualiza para a versão mais recente

#### Ver Ajuda
```bash
npx bmad-method help
```
Mostra todos os comandos disponíveis

**Usando Agentes:**

Os agentes funcionam dentro de IDEs compatíveis (VS Code com Claude Code, Cursor, etc.):

```
As dev, implemente uma função de login
As ux-expert, crie um mockup de dashboard
```

---

### Lição 5: Seu Primeiro Projeto

**Exemplo: Sistema de Agendamento Médico**

#### Passo 1: Planejar
```
As analyst, ajude-me a definir os requisitos de um sistema de agendamento médico
```

#### Passo 2: Criar PRD
```
As pm, crie um PRD baseado nos requisitos que o analyst definiu
```

#### Passo 3: Definir Arquitetura
```
As architect, defina a arquitetura técnica deste sistema
```

#### Passo 4: Criar Interface
```
As ux-expert, crie wireframes das principais telas
```

#### Passo 5: Implementar
```
As dev, implemente a funcionalidade de agendamento seguindo a arquitetura
```

**Dicas:**
- Trabalhe por etapas, não tente fazer tudo de uma vez
- Use o agente certo para cada tarefa
- Peça revisões: `As qa, revise este código`
- Documente: `As dev, adicione comentários ao código`

---

### Lição 6: Casos de Uso Práticos

**Por Profissão:**

#### 👨‍⚖️ Advogados
- Criar sistema de gestão de processos
- Automatizar análise de contratos
- Desenvolver calculadora de honorários
- Sistema de agendamento com clientes

**Exemplo:**
```
As dev, crie um analisador de contratos que identifique cláusulas importantes
```

#### 👨‍⚕️ Médicos
- Sistema de prontuário eletrônico
- Agendamento de consultas online
- Calculadoras médicas (IMC, doses, etc.)
- Portal do paciente

**Exemplo:**
```
As dev, implemente um sistema de agendamento de consultas com lembretes
```

#### 👨‍🏫 Professores
- Plataforma de exercícios online
- Sistema de correção automática
- Gerador de provas
- Portal de notas e frequência

**Exemplo:**
```
As dev, crie um gerador de questões de múltipla escolha
```

#### 💼 Empreendedores
- Landing pages para produtos
- Sistema de CRM simples
- Automação de marketing
- Dashboard de métricas

**Exemplo:**
```
As ux-expert, crie uma landing page para meu produto
```

**O limite é sua criatividade!** Qualquer ideia pode virar realidade com os agentes certos.

---

### Lição 7: Arquivos de Configuração ⭐

**Estrutura do BMad:**

```
.bmad-core/
├── bmad-config.json          - Configuração principal
├── bmad-registry.json        - Registro de agentes
└── agents/                   - Diretório de agentes

.cursor/                      - Configurações Cursor IDE
.claude/                      - Configurações Claude Code
.gemini/                      - Configurações Gemini
.github/                      - Configurações GitHub Copilot
```

#### ⚙️ bmad-config.json

**Função:** Configuração principal do BMad

**Contém:**
- Versão instalada
- Tipo de instalação (full, minimal)
- IDEs configuradas
- Preferências do usuário

**Exemplo:**
```json
{
  "version": "4.44.1",
  "installationType": "full",
  "ideSetup": ["cursor", "claude-code"],
  "language": "pt-BR"
}
```

#### 📋 bmad-registry.json

**Função:** Registro de todos os agentes instalados

**Contém:**
- Lista de agentes ativos
- Caminho de cada agente
- Metadata dos agentes

#### 🤖 agents/

**Função:** Diretório com os arquivos dos agentes

Cada agente tem seu próprio arquivo de configuração com:
- Nome e descrição
- Habilidades e especialidades
- Instruções de comportamento

#### 📝 Dicas Importantes

- ❌ **Não modifique** manualmente os arquivos, use os comandos BMad
- 💾 **Faça backup** da pasta `.bmad-core/` antes de atualizações
- 📝 **Adicione ao .gitignore** se necessário (opcional)
- 🔍 Use `npx bmad-method list:config` para ver todos os arquivos

---

### Lição 8: Referência de Comandos ⭐

**Comandos Completos do BMad:**

#### 🚀 Comandos Básicos

##### npx bmad-method install
Instala o BMad no seu projeto pela primeira vez
```bash
cd meu-projeto && npx bmad-method install
```
*O instalador é interativo e guia você passo a passo*

##### npx bmad-method status
Mostra o status da instalação atual
```bash
npx bmad-method status
```
*Retorna: versão, tipo, IDEs configuradas, total de arquivos*

##### npx bmad-method update
Atualiza o BMad para a versão mais recente
```bash
npx bmad-method update
```

##### npx bmad-method update-check
Verifica se há atualizações disponíveis sem instalar
```bash
npx bmad-method update-check
```

#### 📋 Comandos de Listagem

##### npx bmad-method list:agents
Lista todos os agentes instalados no projeto
```bash
npx bmad-method list:agents
npx bmad-method list:agents --detailed
```
*Use --detailed para ver informações completas de cada agente*

##### npx bmad-method list:expansions
Lista pacotes de expansão disponíveis
```bash
npx bmad-method list:expansions
```

##### npx bmad-method list:config
Lista todos os arquivos de configuração do BMad
```bash
npx bmad-method list:config
```

#### 🔧 Comandos de Gerenciamento

##### npx bmad-method add:expansion [nome]
Adiciona um pacote de expansão ao projeto
```bash
npx bmad-method add:expansion bmad-2d-phaser-game-dev
npx bmad-method add:expansion bmad-infrastructure-devops
```

##### npx bmad-method remove:agent [nome]
Remove um agente específico do projeto
```bash
npx bmad-method remove:agent writer
```

##### npx bmad-method show:config
Exibe o conteúdo do arquivo de configuração principal
```bash
npx bmad-method show:config
```

#### 💡 Usando Agentes na IDE

Depois de instalado, use os agentes diretamente na sua IDE:

```
As dev, crie uma função que valida emails
As ux-expert, desenhe uma tela de cadastro moderna
As pm, crie um PRD para um sistema de chat
As architect, defina a arquitetura de um microserviço
As analyst, faça análise competitiva do mercado
As qa, crie testes unitários para esta função
```

#### 🎯 Dicas de Uso

- Sempre use `npx bmad-method` antes dos comandos
- Execute os comandos na raiz do seu projeto
- Use `help` para relembrar comandos: `npx bmad-method help`
- Teste os comandos no **Playground** da academy!

---

### Lição 9: Criando Projetos com Agentes ⭐

**Níveis de Automação do BMad:**

| Nível de Automação | Como Ativar | O que Ele Faz |
|-------------------|-------------|---------------|
| **Manual (Padrão)** | `/pm` `/architect` `/dev` `/qa` | Você chama os agentes conforme precisar, controle total |
| **Semi-automático** *(Recomendado)* | `/bmad-master` | Cria tudo em sequência, mas pede confirmação entre etapas |
| **Totalmente Automático** | `/bmad-master auto` | Cria todo o projeto sozinho, sem pausas |

---

#### 🔧 Modo Manual - Controle Total

**Ideal para:** Aprender, experimentar, projetos simples

**Como funciona:** Você invoca cada agente individualmente

**Exemplo:**
```
As pm, crie um PRD para um e-commerce de roupas
```
*Aguarda PM criar o documento...*

```
As architect, defina a arquitetura baseada neste PRD
```
*Aguarda Architect criar a arquitetura...*

```
As dev, implemente a tela de produtos
```
*Aguarda Dev implementar...*

```
As qa, crie testes para esta tela
```
*Aguarda QA criar testes...*

**Vantagens:** Controle total, aprende o processo
**Desvantagens:** Mais demorado, requer conhecimento da sequência

---

#### ⚡ Modo Semi-Automático - Recomendado

**Ideal para:** Projetos médios, revisão entre etapas, aprendizado guiado

**Como funciona:** O BMad Master orquestra todos os agentes, mas pede sua aprovação

**Exemplo:**
```
/bmad-master Crie um sistema de gestão de clientes
```

**O que acontece:**
1. 1️⃣ **PM cria o PRD** → Mostra e aguarda sua confirmação
2. 2️⃣ **Architect define arquitetura** → Mostra e aguarda confirmação
3. 3️⃣ **UX-Expert cria wireframes** → Mostra e aguarda confirmação
4. 4️⃣ **Dev implementa código** → Mostra e aguarda confirmação
5. 5️⃣ **QA cria testes** → Mostra resultado final

**Vantagens:** Rápido, mantém controle, aprende o fluxo
**Desvantagens:** Requer aprovações manuais

---

#### 🚀 Modo Totalmente Automático - Máxima Velocidade

**Ideal para:** Protótipos rápidos, MVPs, projetos urgentes

**Como funciona:** Tudo é criado automaticamente do início ao fim

**Exemplo:**
```
/bmad-master auto Crie um blog completo com sistema de posts
```

**O que acontece:**
- ✅ PM → Analyst → Architect → UX-Expert → Dev → QA
- ✅ Todo o fluxo executado sem interrupções
- ✅ Projeto completo entregue no final

**Vantagens:** Extremamente rápido, zero intervenção
**Desvantagens:** Menos controle sobre cada etapa

---

#### 💡 Qual Escolher?

- **Iniciante?** Use `Manual` para aprender
- **Experiente?** Use `Semi-automático` para produtividade
- **Urgente?** Use `Automático` para velocidade máxima
- **Projeto complexo?** Use `Semi-automático` para revisar cada etapa

---

#### 🎯 Exemplo Prático Completo

**Cenário: Sistema de Delivery**

**Opção 1 - Manual:**
```
As analyst, faça pesquisa de mercado de apps de delivery
As pm, crie PRD para app de delivery baseado na pesquisa
As architect, defina arquitetura do sistema
As ux-expert, crie wireframes das telas principais
As dev, implemente o sistema de pedidos
As qa, crie suite de testes completa
```

**Opção 2 - Semi-automático (Recomendado):**
```
/bmad-master Crie um app de delivery de comida completo
```
*Revise e aprove cada etapa quando solicitado*

**Opção 3 - Automático:**
```
/bmad-master auto Crie um app de delivery de comida completo
```
*Aguarde o projeto ser criado completamente*

---

#### 📝 Exemplo de Fluxo Prático: Criando um Curso Online

**Fluxo Manual Passo a Passo:**

**Passo 1: Planejamento**
```
/pm → "Crie o plano geral do curso de JavaScript para iniciantes"
```
✅ PM cria documento com objetivos, público-alvo, estrutura macro

**Passo 2: Arquitetura**
```
/architect → "Crie a estrutura detalhada do curso baseada no PRD"
```
✅ Architect define tecnologias, organização de conteúdo, recursos necessários

**Passo 3: Organização (Orquestração)**
```
/bmad-master → "Divida o curso em módulos e tarefas específicas"
```
✅ BMad Master cria breakdown completo: módulos, aulas, exercícios, cronograma

**Passo 4: Desenvolvimento de Conteúdo**
```
/dev → "Implemente o conteúdo do módulo 1: Fundamentos"
```
✅ Dev cria código de exemplo, exercícios práticos, desafios

**Passo 5: Qualidade e Didática**
```
/qa → "Revise e otimize a didática do módulo 1"
```
✅ QA verifica clareza, corrige erros, melhora explicações, testa exercícios

**Repetir Passos 4 e 5 para outros módulos:**
```
/dev → "Implemente o conteúdo do módulo 2: DOM e Eventos"
/qa → "Revise e otimize a didática do módulo 2"
```

**Resultado:** Curso completo, bem estruturado, com conteúdo didático e testado!

---

**Mesmo Projeto em Modo Semi-Automático:**
```
/bmad-master Crie um curso completo de JavaScript para iniciantes com 5 módulos
```

**O BMad fará:**
- ✅ PM planeja → *aguarda sua aprovação*
- ✅ Architect estrutura → *aguarda sua aprovação*
- ✅ Writer cria conteúdo → *aguarda sua aprovação*
- ✅ Dev cria exercícios → *aguarda sua aprovação*
- ✅ QA revisa tudo → *apresenta resultado final*

**Economia de tempo:** 80% mais rápido que fazer manualmente!

**Dica Final:** Comece com manual para aprender, depois migre para semi-automático quando estiver confortável!

---

## 🎮 Playground Interativo

**Funcionalidades:**
- Terminal simulado do BMad
- Input de texto para digitar comandos
- Auto-scroll automático
- Delay realista nas respostas (500ms)

**6 Botões de Exemplo Rápido:**
1. `npx bmad-method status`
2. `npx bmad-method list:agents`
3. `npx bmad-method help`
4. `npx bmad-method list:config`
5. `npx bmad-method list:expansions`
6. `npx bmad-method update-check`

**Comandos Simulados Disponíveis:**
- `status` - Ver status da instalação
- `list:agents` - Listar agentes disponíveis
- `list:expansions` - Listar pacotes de expansão
- `list:config` / `config` - Listar arquivos de configuração
- `update-check` - Verificar atualizações
- `install` - Informações sobre instalação
- `update` - Simular atualização
- `help` - Ver todos os comandos
- Qualquer outro comando retorna mensagem de erro com sugestões

---

## 💬 Chatbot Assistente

**Base de Conhecimento (12 Tópicos):**

1. **about** - O que é BMad
2. **install** - Como instalar
3. **commands** - Lista de comandos
4. **agents** - Agentes principais
5. **agent_dev** - Detalhes do agente dev
6. **agent_ux** - Detalhes do agente ux-expert
7. **agent_pm** - Detalhes do agente pm
8. **first_project** - Como criar primeiro projeto
9. **use_cases** - Casos de uso por profissão
10. **expansions** - Pacotes de expansão
11. **version** - Informações de versão
12. **help** - Ajuda geral
13. **ides** - IDEs suportadas

**Funcionalidades:**
- Busca inteligente por palavras-chave
- Respostas contextuais automáticas
- Indicador de digitação animado (3 pontos pulsantes)
- Interface de chat flutuante (bottom-right)
- Botão de toggle com animação
- Auto-scroll de mensagens
- Mensagens iniciais de boas-vindas
- Sugestões de perguntas

**Perguntas Sugeridas:**
- "O que é o BMad?"
- "Como instalar o BMad?"
- "Quais são os agentes disponíveis?"
- "Como criar meu primeiro projeto?"
- "Me fale sobre o agente dev"
- "Quais IDEs são suportadas?"
- "Mostre casos de uso práticos"
- "O que são os pacotes de expansão?"

---

## 🎨 Design e UX

### Tema Visual
- **Estilo:** Dark mode moderno
- **Paleta de Cores:**
  - Primary: `#6366f1` (Indigo)
  - Primary Dark: `#4f46e5`
  - Secondary: `#8b5cf6` (Purple)
  - Success: `#10b981` (Green)
  - Background: `#0f172a` (Dark blue)
  - Background Light: `#1e293b`
  - Background Card: `#334155`
  - Text: `#f1f5f9`
  - Text Muted: `#94a3b8`
  - Border: `#475569`

### Tipografia
- **Font Family:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif
- **Line Height:** 1.6
- **Código:** 'Courier New', monospace

### Componentes Interativos

#### Feature Cards
- Hover: Levanta 5px, borda azul, sombra brilhante
- Cursor: Pointer
- CTA aparece no hover: "Clique para saber mais →"

#### Terminal
- Background escuro com borda
- Prompt verde: `$`
- Font monospace
- Auto-scroll
- Min-height: 300px, Max-height: 400px

#### Chat Widget
- Posição fixa: bottom-right
- Botão circular flutuante (60x60px)
- Janela: 380x500px
- Animação slideUp ao abrir
- Gradient no header

#### Navegação
- 3 tabs: Início, Tutorial, Playground
- Active state com background azul
- Transições suaves

### Animações

**fadeIn:**
```css
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
```

**slideUp:**
```css
from { opacity: 0; transform: translateY(20px); }
to { opacity: 1; transform: translateY(0); }
```

**messageIn:**
```css
from { opacity: 0; transform: translateY(10px); }
to { opacity: 1; transform: translateY(0); }
```

**typing (indicador):**
```css
0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
30% { transform: translateY(-10px); opacity: 1; }
```

### Responsividade

**Breakpoint: 768px**
- Header h1: 3rem → 2rem
- Tutorial: Grid de 2 colunas → 1 coluna
- Playground: Grid de 2 colunas → 1 coluna
- Features: Grid responsivo → 1 coluna
- Chat: 380px → calc(100vw - 40px)

---

## 📁 Estrutura de Arquivos

```
bmad-academy/
│
├── index.html              (158 linhas)
│   └── Estrutura principal HTML
│       ├── Header com título e tagline
│       ├── Navegação (3 tabs)
│       ├── Seções (Home, Tutorial, Playground)
│       └── Chat widget flutuante
│
├── css/
│   └── style.css           (642 linhas)
│       ├── Reset e variáveis CSS
│       ├── Layout (Grid, Flexbox)
│       ├── Componentes (Cards, Terminal, Chat)
│       ├── Animações
│       └── Media queries
│
├── js/
│   ├── app.js              (289 linhas)
│   │   ├── Navegação entre seções
│   │   ├── Sistema de lições
│   │   ├── Terminal interativo
│   │   └── Simulação de comandos
│   │
│   ├── chat.js             (146 linhas)
│   │   ├── Toggle do chat
│   │   ├── Envio de mensagens
│   │   ├── Indicador de digitação
│   │   └── Perguntas sugeridas
│   │
│   ├── knowledge.js        (240 linhas)
│   │   ├── Base de conhecimento (12 tópicos)
│   │   └── Função de busca por keywords
│   │
│   └── lessons.js          (515 linhas)
│       └── Conteúdo das 9 lições
│
├── assets/
│   └── images/
│       └── (vazio - reservado para imagens futuras)
│
├── .gitignore
│   └── Ignora node_modules, logs, IDE configs
│
└── BMAD_Academy-Doc.md     (este arquivo)
    └── Documentação completa do projeto
```

**Total de Código:**
- **HTML:** 158 linhas
- **CSS:** 642 linhas
- **JavaScript:** 1.190 linhas
- **TOTAL:** ~2.000 linhas de código

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5**
  - Estrutura semântica
  - Acessibilidade (ARIA)
  - SEO otimizado

- **CSS3**
  - CSS Variables (Custom Properties)
  - CSS Grid
  - Flexbox
  - Animations & Transitions
  - Media Queries
  - Pseudo-classes e Pseudo-elements

- **JavaScript Vanilla**
  - ES6+ (Arrow functions, Template literals, Destructuring)
  - DOM Manipulation
  - Event Listeners
  - LocalStorage (preparado para expansão)
  - Sem frameworks ou bibliotecas externas

### Controle de Versão
- **Git** - Controle de versão
- **GitHub** - Hospedagem do repositório

### Futuro (Possíveis Expansões)
- GitHub Pages - Hospedagem estática
- Service Worker - PWA
- Analytics - Tracking de uso

---

## ✨ Diferenciais e Destaques

### 1. 100% em Português (PT-BR)
- Primeira academy BMad totalmente em português
- Linguagem acessível para brasileiros
- Exemplos contextualizados para o Brasil

### 2. Totalmente Interativo
- Playground funcional com terminal simulado
- Chatbot assistente inteligente
- Cards clicáveis com navegação
- Feedback visual em tempo real

### 3. Conteúdo Progressivo
- 9 lições do básico ao avançado
- Curva de aprendizado suave
- Exemplos práticos em cada lição

### 4. Casos de Uso Reais
- Exemplos específicos por profissão
- 4 profissões documentadas
- Cenários do mundo real

### 5. Documentação Completa
- Todos os comandos documentados
- Arquivos de configuração explicados
- 3 níveis de automação detalhados

### 6. Design Moderno
- Interface dark mode profissional
- Animações suaves
- 100% responsivo

### 7. Open Source
- Código aberto no GitHub
- Contribuições bem-vindas
- MIT License (a definir)

### 8. Zero Dependencies
- Não requer instalação
- Funciona offline (após primeiro load)
- Não depende de CDNs externos

---

## 📊 Estatísticas do Projeto

### Conteúdo Educacional
- **9 Lições** completas e detalhadas
- **8 Agentes** principais documentados
- **15+ Comandos** do BMad explicados
- **12 Tópicos** na base de conhecimento
- **4 Profissões** com casos de uso específicos
- **3 Níveis** de automação de projetos

### Interatividade
- **6 Exemplos** rápidos no playground
- **8+ Perguntas** sugeridas no chatbot
- **3 Cards** interativos na home
- **Navegação** em 3 seções principais

### Código
- **~2.000 linhas** de código total
- **7 arquivos** principais
- **0 dependências** externas
- **100% JavaScript** vanilla

---

## 🎯 Público-Alvo

### Profissionais Não-Técnicos
- **Advogados** - Automatizar gestão de processos e contratos
- **Médicos** - Criar sistemas de prontuário e agendamento
- **Professores** - Desenvolver plataformas educacionais
- **Empreendedores** - Criar MVPs e protótipos rapidamente

### Características do Público
- Sem conhecimento de programação
- Deseja criar soluções tecnológicas
- Busca autonomia e rapidez
- Profissionais liberais e gestores

---

## 🔮 Roadmap Futuro

### Versão 1.1 (Próximas Melhorias)
- [ ] README.md em inglês
- [ ] GitHub Pages configurado
- [ ] Screenshot do projeto
- [ ] Vídeo demo no README
- [ ] Badge de licença

### Versão 2.0 (Expansões)
- [ ] Mais lições (10-15 lições)
- [ ] Playground com histórico de comandos
- [ ] Chat com IA real (integração API)
- [ ] Sistema de certificado ao completar
- [ ] Quiz interativo por lição
- [ ] Tema light mode

### Versão 3.0 (Avançado)
- [ ] Backend com Node.js
- [ ] Autenticação de usuários
- [ ] Progresso salvo por usuário
- [ ] Fórum de discussão
- [ ] Marketplace de templates BMad
- [ ] API de integração

---

## 🤝 Como Contribuir

### Para Desenvolvedores

1. **Fork o repositório**
   ```bash
   https://github.com/inematds/BMAD-Academy
   ```

2. **Clone seu fork**
   ```bash
   git clone https://github.com/SEU-USUARIO/BMAD-Academy.git
   ```

3. **Crie uma branch**
   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Faça suas alterações**
   - Mantenha o código limpo
   - Siga o padrão existente
   - Teste suas mudanças

5. **Commit suas mudanças**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade X"
   ```

6. **Push para o GitHub**
   ```bash
   git push origin feature/minha-feature
   ```

7. **Abra um Pull Request**

### Áreas para Contribuição
- 📝 Melhorias no conteúdo das lições
- 🐛 Correção de bugs
- 🎨 Melhorias de design
- 🌐 Traduções (inglês, espanhol)
- ✨ Novas funcionalidades
- 📚 Documentação adicional

---

## 📝 Licença

A definir (sugestão: MIT License)

---

## 👨‍💻 Autor

**INEMA**
- Email: inematds@gmail.com
- GitHub: [@inematds](https://github.com/inematds)

---

## 🙏 Agradecimentos

- **BMad Method** - Framework que inspirou este projeto
- **Claude Code** - Ferramenta que auxiliou no desenvolvimento
- **Comunidade Open Source** - Por todo o conhecimento compartilhado

---

## 📞 Suporte

Encontrou um bug? Tem uma sugestão?

- **Issues:** https://github.com/inematds/BMAD-Academy/issues
- **Email:** inematds@gmail.com

---

**Última atualização:** Outubro 2024
**Versão da Documentação:** 1.0
**Status do Projeto:** ✅ Ativo e em desenvolvimento

---

*Documentação gerada automaticamente com 🤖 [Claude Code](https://claude.com/claude-code)*
