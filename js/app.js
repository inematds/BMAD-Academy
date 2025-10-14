// Estado da aplicação
let currentLesson = 0;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLessons();
    initTerminal();
});

// Navegação entre seções
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            // Atualizar botões
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Atualizar seções
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
        });
    });
}

// Inicializar lições
function initLessons() {
    const lessonList = document.getElementById('lesson-list');

    lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('button');
        lessonItem.className = 'lesson-item';
        lessonItem.textContent = `${index + 1}. ${lesson.title}`;
        lessonItem.onclick = () => loadLesson(index);
        lessonList.appendChild(lessonItem);
    });

    // Carregar primeira lição
    if (lessons.length > 0) {
        loadLesson(0);
    }
}

// Carregar lição
function loadLesson(index) {
    if (index < 0 || index >= lessons.length) return;

    currentLesson = index;
    const lesson = lessons[index];

    // Atualizar conteúdo
    document.getElementById('lesson-content').innerHTML = lesson.content;

    // Atualizar lista de lições
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Atualizar botões de navegação
    updateLessonNavigation();
}

// Atualizar botões de navegação das lições
function updateLessonNavigation() {
    const prevBtn = document.getElementById('prev-lesson');
    const nextBtn = document.getElementById('next-lesson');

    prevBtn.disabled = currentLesson === 0;
    nextBtn.disabled = currentLesson === lessons.length - 1;
}

// Navegar para próxima lição
function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        loadLesson(currentLesson + 1);
    }
}

// Navegar para lição anterior
function previousLesson() {
    if (currentLesson > 0) {
        loadLesson(currentLesson - 1);
    }
}

// Começar tutorial
function startTutorial() {
    // Mudar para aba de tutorial
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-section="tutorial"]').classList.add('active');

    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById('tutorial').classList.add('active');

    // Carregar primeira lição
    loadLesson(0);
}

// Ir para uma lição específica
function goToLesson(lessonIndex) {
    // Mudar para aba de tutorial
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-section="tutorial"]').classList.add('active');

    document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
    document.getElementById('tutorial').classList.add('active');

    // Carregar lição específica
    loadLesson(lessonIndex);
}

// Terminal interativo
function initTerminal() {
    const terminalInput = document.getElementById('terminal-input');

    terminalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim();
            if (command) {
                executeCommand(command);
                terminalInput.value = '';
            }
        }
    });
}

// Executar comando no terminal
function executeCommand(command) {
    const output = document.getElementById('terminal-output');

    // Adicionar comando ao output
    addTerminalLine(`$ ${command}`, 'command');

    // Simular resposta baseada no comando
    setTimeout(() => {
        let response = simulateCommand(command);
        addTerminalLine(response);
    }, 500);
}

// Simular resposta de comandos
function simulateCommand(command) {
    const cmd = command.toLowerCase();

    if (cmd.includes('status')) {
        return `BMad Installation Status:
  Version:        4.44.1
  Type:           full
  IDE Setup:      cursor, claude-code
  Total Files:    74
  Status:         ✓ Instalado e funcionando
  Config:         .bmad-core/bmad-config.json`;
    }
    else if (cmd.includes('list:agents')) {
        return `Agentes Disponíveis:
  🚀 dev - Desenvolvedor Full Stack
  🎨 ux-expert (Sally) - Designer UX/UI
  📋 pm - Gerente de Produto
  🏗️ architect - Arquiteto de Software
  🔍 analyst - Analista de Negócios
  🧪 qa - Especialista em Testes
  ✍️ writer - Escritor Técnico
  📊 data-scientist - Cientista de Dados

  Total: 8 agentes instalados
  Use: npx bmad-method list:agents --detailed`;
    }
    else if (cmd.includes('list:expansions')) {
        return `Pacotes de Expansão:
  📦 bmad-2d-phaser-game-dev - Desenvolvimento de jogos 2D com Phaser
  📦 bmad-infrastructure-devops - DevOps e Infraestrutura
  📦 bmad-creative-writing - Escrita criativa e storytelling
  📦 bmad-godot-game-dev - Desenvolvimento com Godot
  📦 bmad-mobile-dev - Desenvolvimento Mobile

  Para instalar: npx bmad-method add:expansion <nome-do-pacote>`;
    }
    else if (cmd.includes('list:config') || cmd.includes('config')) {
        return `Arquivos de Configuração:
  .bmad-core/
    ├── bmad-config.json          - Configuração principal
    ├── bmad-registry.json        - Registro de agentes
    └── agents/                   - Diretório de agentes

  .cursor/, .claude/, .gemini/    - Configurações IDE

  Use: npx bmad-method show:config (para ver conteúdo)`;
    }
    else if (cmd.includes('update-check')) {
        return `Verificando atualizações...
  ✓ Versão atual: 4.44.1
  ✓ Última versão: 4.44.1

  Você está usando a versão mais recente!`;
    }
    else if (cmd.includes('install')) {
        return `Iniciando instalação do BMad...

  Este comando deve ser executado manualmente no terminal real.
  O instalador é interativo e permite você escolher:
  - Agentes a serem instalados
  - IDEs a serem configuradas
  - Pacotes de expansão

  Execute: npx bmad-method install`;
    }
    else if (cmd.includes('update')) {
        return `Atualizando BMad...
  ✓ Baixando versão mais recente
  ✓ Atualizando arquivos de configuração
  ✓ Verificando integridade

  BMad atualizado com sucesso!`;
    }
    else if (cmd.includes('help')) {
        return `Comandos BMad Method:

  BÁSICOS:
    install              - Instalar BMad no projeto
    status               - Ver status da instalação
    update               - Atualizar BMad
    update-check         - Verificar atualizações
    help                 - Mostrar esta ajuda

  LISTAGEM:
    list:agents          - Listar agentes disponíveis
    list:expansions      - Listar pacotes de expansão
    list:config          - Listar arquivos de configuração

  GERENCIAMENTO:
    add:expansion <nome> - Adicionar pacote de expansão
    remove:agent <nome>  - Remover agente
    show:config          - Mostrar configuração

  Digite qualquer comando para testar!`;
    }
    else {
        return `Comando não reconhecido: "${command}"

Comandos disponíveis:
  • help - Ver todos os comandos
  • status - Ver status da instalação
  • list:agents - Listar agentes
  • list:config - Ver arquivos de configuração

Digite 'help' para ver a lista completa.`;
    }
}

// Adicionar linha ao terminal
function addTerminalLine(text, type = 'output') {
    const output = document.getElementById('terminal-output');
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.textContent = text;
    output.appendChild(line);

    // Auto-scroll para o final
    output.scrollTop = output.scrollHeight;
}

// Executar exemplos
function runExample(type) {
    const commands = {
        'status': 'npx bmad-method status',
        'list': 'npx bmad-method list:agents',
        'help': 'npx bmad-method help',
        'config': 'npx bmad-method list:config',
        'expansions': 'npx bmad-method list:expansions',
        'update-check': 'npx bmad-method update-check'
    };

    const command = commands[type];
    if (command) {
        document.getElementById('terminal-input').value = command;
        executeCommand(command);
    }
}
