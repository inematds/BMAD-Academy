// Módulos do Playground - Estrutura Completa
const playgroundModules = [
    {
        id: 1,
        title: "Introdução ao Playground",
        level: "basico",
        topics: [
            { title: "Como usar o terminal simulado", desc: "Aprenda a navegar no terminal" },
            { title: "Comandos reais vs simulados", desc: "Entenda a diferença" },
            { title: "Como reiniciar o ambiente", desc: "Limpar e recomeçar" },
            { title: "Dicas de prática segura", desc: "Melhores práticas" }
        ],
        challenge: {
            title: "Execute seu primeiro comando",
            desc: "Digite 'help' no terminal e explore os comandos disponíveis",
            solution: "help",
            hint: "Digite apenas a palavra 'help' e pressione Enter"
        }
    },
    {
        id: 2,
        title: "Primeiros Comandos",
        level: "basico",
        topics: [
            { title: "npx bmad-method status", desc: "Verificar instalação" },
            { title: "npx bmad-method help", desc: "Ver lista de comandos" },
            { title: "npx bmad-method list:agents", desc: "Listar agentes" },
            { title: "npx bmad-method list:config", desc: "Ver configuração" },
            { title: "npx bmad-method update-check", desc: "Verificar atualizações" },
            { title: "npx bmad-method list:expansions", desc: "Ver expansões" }
        ],
        challenge: {
            title: "Execute todos os comandos básicos",
            desc: "Execute status, list:agents e list:config",
            solutions: ["status", "list:agents", "list:config"],
            hint: "Você precisa executar 3 comandos diferentes"
        }
    },
    {
        id: 3,
        title: "Explorando os Agentes",
        level: "intermediario",
        topics: [
            { title: "Testando agente dev", desc: "Desenvolvedor full-stack" },
            { title: "Testando ux-expert", desc: "Designer UX/UI" },
            { title: "Testando pm", desc: "Gerente de produto" },
            { title: "Testando architect", desc: "Arquiteto de software" },
            { title: "Testando analyst", desc: "Analista de negócios" },
            { title: "Testando qa", desc: "Especialista em testes" }
        ],
        challenge: {
            title: "Use dois agentes em sequência",
            desc: "Liste os agentes e depois visualize as configurações",
            solutions: ["list:agents", "list:config"],
            hint: "Primeiro list:agents, depois list:config"
        }
    },
    {
        id: 4,
        title: "Configuração de Projeto",
        level: "intermediario",
        topics: [
            { title: "Estrutura .bmad-core", desc: "Pasta de configurações" },
            { title: "Arquivo bmad-config.json", desc: "Configuração principal" },
            { title: "Arquivo bmad-registry.json", desc: "Registro de agentes" },
            { title: "Testar listagem", desc: "Ver arquivos de config" },
            { title: "Backup e restauração", desc: "Proteger configurações" }
        ],
        challenge: {
            title: "Explore a configuração",
            desc: "Visualize os arquivos de configuração do BMad",
            solution: "list:config",
            hint: "Use o comando list:config"
        }
    },
    {
        id: 5,
        title: "Fluxo de Criação Manual",
        level: "intermediario",
        topics: [
            { title: "Planejamento com analyst", desc: "Análise inicial" },
            { title: "PRD com pm", desc: "Documento de produto" },
            { title: "Arquitetura com architect", desc: "Design técnico" },
            { title: "Design com ux-expert", desc: "Interface e UX" },
            { title: "Implementação com dev", desc: "Código" },
            { title: "Testes com qa", desc: "Qualidade" }
        ],
        challenge: {
            title: "Siga o fluxo completo",
            desc: "Execute status para ver o sistema pronto para criar projetos",
            solution: "status",
            hint: "Verifique o status da instalação"
        }
    },
    {
        id: 6,
        title: "Modo Semi-Automático",
        level: "avancado",
        topics: [
            { title: "Executar /bmad-master", desc: "Modo orquestrado" },
            { title: "Revisar etapas", desc: "Aprovar cada fase" },
            { title: "Corrigir e reenviar", desc: "Ajustar resultados" }
        ],
        challenge: {
            title: "Compreenda a automação",
            desc: "Veja informações sobre o sistema antes de usar modo automático",
            solution: "help",
            hint: "Use 'help' para ver todos os recursos"
        }
    },
    {
        id: 7,
        title: "Modo Automático",
        level: "avancado",
        topics: [
            { title: "Executar /bmad-master auto", desc: "Full automation" },
            { title: "Observar etapas automáticas", desc: "Acompanhar processo" },
            { title: "Analisar resultado final", desc: "Avaliar qualidade" }
        ],
        challenge: {
            title: "Prepare-se para automação completa",
            desc: "Verifique se há atualizações disponíveis",
            solution: "update-check",
            hint: "Use update-check"
        }
    },
    {
        id: 8,
        title: "Gerenciamento e Atualização",
        level: "avancado",
        topics: [
            { title: "Comando update", desc: "Atualizar BMad" },
            { title: "Comando add:expansion", desc: "Adicionar funcionalidades" },
            { title: "Comando remove:agent", desc: "Remover agentes" },
            { title: "Comando show:config", desc: "Ver configuração completa" }
        ],
        challenge: {
            title: "Gerencie expansões",
            desc: "Liste as expansões disponíveis para instalação",
            solution: "list:expansions",
            hint: "Use list:expansions"
        }
    },
    {
        id: 9,
        title: "Casos Profissionais",
        level: "profissional",
        topics: [
            { title: "Advogados", desc: "Contratos e processos" },
            { title: "Médicos", desc: "Prontuário eletrônico" },
            { title: "Professores", desc: "Plataforma de ensino" },
            { title: "Empreendedores", desc: "MVP e landing pages" }
        ],
        challenge: {
            title: "Entenda seu caso de uso",
            desc: "Veja quais agentes estão disponíveis para sua profissão",
            solution: "list:agents",
            hint: "Liste todos os agentes disponíveis"
        }
    },
    {
        id: 10,
        title: "Desafios Avançados",
        level: "profissional",
        topics: [
            { title: "Curso online completo", desc: "Plataforma educacional" },
            { title: "Sistema de relatórios IA", desc: "Business Intelligence" },
            { title: "Painel de vendas", desc: "Dashboard executivo" },
            { title: "App de tarefas", desc: "Produtividade" }
        ],
        challenge: {
            title: "Mega Desafio Final",
            desc: "Execute todos os comandos: status, list:agents, list:config, list:expansions",
            solutions: ["status", "list:agents", "list:config", "list:expansions"],
            hint: "Execute 4 comandos diferentes para completar"
        }
    },
    {
        id: 11,
        title: "Diagnóstico e Erros",
        level: "profissional",
        topics: [
            { title: "Comando desconhecido", desc: "Resolver erros de sintaxe" },
            { title: "Agente não registrado", desc: "Corrigir registro" },
            { title: "Falha JSON", desc: "Validar configuração" },
            { title: "Problemas de versão", desc: "Compatibilidade" }
        ],
        challenge: {
            title: "Diagnostique problemas",
            desc: "Verifique o status completo do sistema",
            solution: "status",
            hint: "Status mostra informações de diagnóstico"
        }
    },
    {
        id: 12,
        title: "Personalização",
        level: "profissional",
        topics: [
            { title: "Alterar configurações", desc: "Customizar BMad" },
            { title: "Temas e cores", desc: "Interface personalizada" },
            { title: "Limpar histórico", desc: "Reset do ambiente" },
            { title: "Reiniciar ambiente", desc: "Começar do zero" }
        ],
        challenge: {
            title: "Explore personalização",
            desc: "Veja as configurações atuais do sistema",
            solution: "list:config",
            hint: "Use list:config para ver o que pode ser personalizado"
        }
    },
    {
        id: 13,
        title: "Certificação",
        level: "profissional",
        topics: [
            { title: "Completar todos os módulos", desc: "100% de progresso" },
            { title: "Desafios completados", desc: "Todas as conquistas" },
            { title: "Projetos práticos", desc: "Portfolio" },
            { title: "Obter certificado", desc: "Reconhecimento" }
        ],
        challenge: {
            title: "Desafio de Certificação",
            desc: "Execute help para ver seu domínio completo do BMad",
            solution: "help",
            hint: "O comando help mostra tudo que você aprendeu"
        }
    }
];

// Estatísticas dos módulos
const moduleStats = {
    total: 13,
    topics: 56,
    challenges: 13,
    levels: {
        basico: 2,
        intermediario: 3,
        avancado: 3,
        profissional: 5
    }
};
