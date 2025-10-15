// Estado da aplicação
let currentLesson = 0;
let currentChallenge = null;
let completedChallenges = [];
let currentModule = null;
let completedModules = [];
let currentFilter = 'all';

// Desafios do Playground
const challenges = [
    {
        id: 1,
        title: "Verificar Instalação",
        description: "Execute o comando que mostra o status da instalação do BMad",
        difficulty: "easy",
        solution: "status",
        hint: "Use o comando 'status' para ver informações da instalação"
    },
    {
        id: 2,
        title: "Listar Agentes",
        description: "Execute o comando que lista todos os agentes disponíveis",
        difficulty: "easy",
        solution: "list:agents",
        hint: "O comando começa com 'list:' seguido do que você quer listar"
    },
    {
        id: 3,
        title: "Explorar Expansões",
        description: "Descubra quais pacotes de expansão estão disponíveis",
        difficulty: "medium",
        solution: "list:expansions",
        hint: "Similar ao comando de listar agentes, mas para expansions"
    },
    {
        id: 4,
        title: "Ver Configurações",
        description: "Liste os arquivos de configuração do BMad",
        difficulty: "medium",
        solution: "list:config",
        hint: "Use list:config para ver arquivos de configuração"
    }
];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initLessons();
    initTerminal();
    initChallenges();
    initModules();
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

    // Verificar se resolveu o desafio atual
    if (currentChallenge) {
        checkChallengeSolution(command);
    }

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

// Inicializar desafios
function initChallenges() {
    const challengeList = document.getElementById('challenge-list');
    if (!challengeList) return;

    challenges.forEach(challenge => {
        const isCompleted = completedChallenges.includes(challenge.id);
        const item = document.createElement('div');
        item.className = 'challenge-item';
        item.innerHTML = `
            <div class="challenge-header">
                <div class="challenge-title">
                    ${isCompleted ? '✅' : '🎯'} ${challenge.title}
                </div>
                <span class="challenge-difficulty ${challenge.difficulty}">${challenge.difficulty === 'easy' ? 'Fácil' : 'Médio'}</span>
            </div>
            <div class="challenge-desc">${challenge.description}</div>
        `;
        item.onclick = () => selectChallenge(challenge);
        challengeList.appendChild(item);
    });
}

// Selecionar desafio
function selectChallenge(challenge) {
    // Não permite selecionar desafio já completo
    if (completedChallenges.includes(challenge.id)) {
        addTerminalLine('✅ Você já completou este desafio!', 'success');
        return;
    }

    currentChallenge = challenge;

    // Atualizar UI dos desafios
    const items = document.querySelectorAll('.challenge-item');
    items.forEach((item, idx) => {
        item.classList.toggle('active', challenges[idx].id === challenge.id);
    });

    // Mostrar botão de dica
    const hintBtn = document.querySelector('.challenge-hint-btn');
    if (hintBtn) {
        hintBtn.style.display = 'block';
    }

    // Adicionar mensagem no terminal
    addTerminalLine(`\n🎯 Desafio selecionado: ${challenge.title}`, 'challenge');
    addTerminalLine(`📝 ${challenge.description}`, 'info');
    addTerminalLine('💡 Clique em "Ver Dica" se precisar de ajuda\n', 'info');
}

// Mostrar dica
function showHint() {
    if (currentChallenge) {
        addTerminalLine(`\n💡 DICA: ${currentChallenge.hint}\n`, 'hint');
    } else {
        addTerminalLine('\n⚠️ Selecione um desafio primeiro!\n', 'warning');
    }
}

// Verificar solução do desafio
function checkChallengeSolution(command) {
    if (!currentChallenge) return;

    const cmd = command.toLowerCase().trim();
    const solution = currentChallenge.solution.toLowerCase();

    // Verifica se o comando contém a solução
    if (cmd.includes(solution)) {
        // Desafio completado!
        setTimeout(() => {
            addTerminalLine('\n🎉 PARABÉNS! Você completou o desafio!', 'success');
            addTerminalLine(`✅ ${currentChallenge.title} - Concluído!\n`, 'success');

            // Adicionar aos completados
            if (!completedChallenges.includes(currentChallenge.id)) {
                completedChallenges.push(currentChallenge.id);
            }

            // Atualizar UI
            updateChallengeList();

            // Verificar se completou todos
            if (completedChallenges.length === challenges.length) {
                setTimeout(() => {
                    addTerminalLine('\n🏆 INCRÍVEL! Você completou TODOS os desafios!', 'success');
                    addTerminalLine('🎓 Você dominou os comandos básicos do BMad!\n', 'success');
                }, 1000);
            }

            // Limpar desafio atual
            currentChallenge = null;

            // Esconder botão de dica
            const hintBtn = document.querySelector('.challenge-hint-btn');
            if (hintBtn) {
                hintBtn.style.display = 'none';
            }
        }, 600);
    }
}

// Atualizar lista de desafios
function updateChallengeList() {
    const challengeList = document.getElementById('challenge-list');
    if (!challengeList) return;

    challengeList.innerHTML = '';

    challenges.forEach(challenge => {
        const isCompleted = completedChallenges.includes(challenge.id);
        const item = document.createElement('div');
        item.className = 'challenge-item' + (isCompleted ? ' completed' : '');
        item.innerHTML = `
            <div class="challenge-header">
                <div class="challenge-title">
                    ${isCompleted ? '✅' : '🎯'} ${challenge.title}
                </div>
                <span class="challenge-difficulty ${challenge.difficulty}">${challenge.difficulty === 'easy' ? 'Fácil' : 'Médio'}</span>
            </div>
            <div class="challenge-desc">${challenge.description}</div>
        `;

        if (!isCompleted) {
            item.onclick = () => selectChallenge(challenge);
        }

        challengeList.appendChild(item);
    });
}

// ====== MÓDULOS DO PLAYGROUND ======

// Inicializar módulos
function initModules() {
    const moduleList = document.getElementById('module-list');
    if (!moduleList) return;

    renderModules();
}

// Renderizar lista de módulos
function renderModules() {
    const moduleList = document.getElementById('module-list');
    if (!moduleList) return;

    moduleList.innerHTML = '';

    const filteredModules = currentFilter === 'all'
        ? playgroundModules
        : playgroundModules.filter(m => m.level === currentFilter);

    filteredModules.forEach(module => {
        const isCompleted = completedModules.includes(module.id);
        const item = document.createElement('button');
        item.className = 'module-item';
        if (currentModule && currentModule.id === module.id) {
            item.classList.add('active');
        }
        if (isCompleted) {
            item.classList.add('completed');
        }

        const levelBadges = {
            basico: '📗',
            intermediario: '📘',
            avancado: '📙',
            profissional: '📕'
        };

        item.innerHTML = `
            ${isCompleted ? '✅' : levelBadges[module.level]} <span>${module.id}. ${module.title}</span>
        `;
        item.onclick = () => loadModule(module);
        moduleList.appendChild(item);
    });
}

// Carregar módulo
function loadModule(module) {
    currentModule = module;

    // Atualizar lista visual
    renderModules();

    // Atualizar conteúdo
    const moduleContent = document.getElementById('module-content');
    if (!moduleContent) return;

    const isCompleted = completedModules.includes(module.id);
    const levelLabels = {
        basico: 'Básico',
        intermediario: 'Intermediário',
        avancado: 'Avançado',
        profissional: 'Profissional'
    };

    moduleContent.innerHTML = `
        <div class="module-header">
            <span class="module-level level-${module.level}">${levelLabels[module.level]}</span>
            <h3>Módulo ${module.id}: ${module.title}</h3>
            ${isCompleted ? '<span class="module-completed">✅ Completado</span>' : ''}
        </div>

        <div class="module-topics">
            <h4>📚 Tópicos (${module.topics.length})</h4>
            <ul>
                ${module.topics.map(topic => `
                    <li>
                        <strong>${topic.title}</strong>
                        <p>${topic.desc}</p>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="module-challenge">
            <h4>🏆 Desafio do Módulo</h4>
            <div class="module-challenge-card ${isCompleted ? 'completed' : ''}">
                <div class="challenge-title">${module.challenge.title}</div>
                <p>${module.challenge.desc}</p>
                ${!isCompleted ? `
                    <button class="challenge-start-btn" onclick="startModuleChallenge(${module.id})">
                        🎯 Começar Desafio
                    </button>
                ` : '<p class="challenge-completed">✅ Desafio Completado!</p>'}
            </div>
        </div>
    `;

    // Adicionar mensagem no terminal
    addTerminalLine(`\n📖 Módulo ${module.id} carregado: ${module.title}`, 'info');
    addTerminalLine(`   Nível: ${levelLabels[module.level]} | Tópicos: ${module.topics.length}\n`, 'info');
}

// Iniciar desafio do módulo
function startModuleChallenge(moduleId) {
    const module = playgroundModules.find(m => m.id === moduleId);
    if (!module) return;

    addTerminalLine(`\n🎯 DESAFIO DO MÓDULO ${moduleId}`, 'challenge');
    addTerminalLine(`📝 ${module.challenge.title}`, 'challenge');
    addTerminalLine(`   ${module.challenge.desc}`, 'info');
    addTerminalLine(`💡 Dica: ${module.challenge.hint}\n`, 'hint');

    // Definir como desafio atual
    currentChallenge = {
        id: `module-${moduleId}`,
        title: module.challenge.title,
        solution: module.challenge.solution,
        solutions: module.challenge.solutions,
        moduleId: moduleId
    };
}

// Filtrar módulos por nível
function filterModules(level) {
    currentFilter = level;

    // Atualizar botões de filtro
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if ((level === 'all' && btn.textContent.startsWith('Todos')) ||
            btn.textContent.toLowerCase().includes(level.substring(0, 5))) {
            btn.classList.add('active');
        }
    });

    renderModules();

    addTerminalLine(`\n🔍 Filtrando módulos: ${level === 'all' ? 'Todos' : level}`, 'info');
}

// Limpar terminal
function clearTerminal() {
    const output = document.getElementById('terminal-output');
    if (!output) return;

    output.innerHTML = '';
    addTerminalLine('$ Terminal limpo. Digite um comando para começar.', 'info');
}
