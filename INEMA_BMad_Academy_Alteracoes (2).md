# 🧭 INEMA BMad Academy – Registro de Alterações e Melhorias

### Objetivo
Consolidar todas as mudanças e aprimoramentos feitos após a criação inicial do conteúdo da Academy, para manter a documentação técnica sempre atualizada.

---

## 1. Capítulo 2 – Instalação e Início
**Tipo:** Expansão  
**Alterações:**
- Adicionados os tópicos 4 e 5:
  - 4. Como iniciar o BMad após a instalação  
  - 5. O que fazer depois de instalar
- Instruções detalhadas para:
  - Testar a instalação com `npx bmad-method status`
  - Listar agentes e expansões
  - Rodar comandos via terminal
  - Integrar o uso com IDEs (Claude, Cursor, Gemini)
- Explicado que o BMad não “abre” como app, é executado via terminal.

---

## 2. Capítulo 3 – Ordem dos Agentes
**Tipo:** Reorganização  
**Alterações:**
- Nova ordem lógica para refletir o fluxo de um projeto real:
  1. Analyst  
  2. PM  
  3. Architect  
  4. UX-Expert  
  5. Dev  
  6. QA
- Explicação do motivo dessa sequência (planejamento → execução → validação).
- Tabela de referência atualizada com função, tipo de tarefa e exemplo.

---

## 3. Capítulo 5 – Explicação do comando “As”
**Tipo:** Expansão Conceitual  
**Alterações:**
- Explicado o significado do comando `As`: “Atue como”.
- Exemplos práticos para cada agente (`As dev`, `As pm`, `As qa`, etc.)
- Explicado como o BMad interpreta o comando internamente.
- Analogia: “O comando As é como chamar um especialista da sua equipe.”

---

## 4. Capítulo 10 e 11 – Estrutura de Armazenamento e Integração
**Tipo:** Expansão Técnica  
**Alterações:**
- Adicionada explicação de onde os arquivos e projetos são guardados:
  ```
  .bmad-core/
  projects/
  logs/
  ```
- Detalhes do conteúdo de cada diretório.
- Explicado que os dados são locais, e a IDE apenas exibe.
- Descrição do comportamento em diferentes sistemas operacionais.
- Adicionada explicação sobre versionamento e backup.

---

## 5. Integração Claude Code + BMad
**Tipo:** Explicação detalhada e ajuste prático  
**Alterações:**
- Criada seção explicando diferença entre terminal e chat lateral:
  - Terminal: executa o BMad real.  
  - Chat: Claude apenas interpreta texto.
- Fluxo visual:
  ```
  Usuário → Claude (Chat) → Terminal (npx) → BMad → Projeto/Arquivos
  ```
- Explicado funcionamento do Claude Code com Node.js local.
- Exemplo prático:
  ```
  npx bmad-method add project "app de agendamento"
  As pm, crie o PRD desse app
  ```

---

## 6. Uso do NPX
**Tipo:** Explicação complementar  
**Alterações:**
- Explicado o que é `npx`, sua diferença do `npm` e por que o BMad o utiliza.
- Exemplos de uso dentro e fora do Claude Code.
- Comparativo de modos:
  | Modo | O que faz | Vantagem |
  |------|------------|----------|
  | npx | Executa sem instalar | Rápido e atualizado |
  | npm install -g | Instala globalmente | Usável offline |

---

## 7. Dependência de LLM
**Tipo:** Expansão de Arquitetura  
**Alterações:**
- Explicado que o BMad não é uma LLM — é um framework que orquestra as LLMs.
- Descrito o que o BMad faz sem e com LLM.
- Exemplo de configuração `.env`:
  ```
  OPENAI_API_KEY=sk-xxxx
  ANTHROPIC_API_KEY=sk-xxxx
  GOOGLE_API_KEY=AIza-xxxx
  ```
- Exemplo de `bmad-config.json`:
  ```json
  {
    "default_model": "gpt-4o-mini",
    "agents": {
      "dev": "gpt-4o-mini",
      "pm": "claude-3.5-sonnet",
      "ux-expert": "gemini-1.5-pro"
    }
  }
  ```
- Adicionadas alternativas locais: Ollama, LM Studio, LocalAI.

---

## 8. Atualização visual e sugestões
**Tipo:** Propostas para Academy  
**Alterações:**
- Inclusão de diagramas 16:9 mostrando:
  - Fluxo do NPX no ambiente local  
  - Integração Claude ↔ Terminal ↔ BMad ↔ Estrutura de pastas  
  - Diferença entre interpretar e executar comandos  
  - Ciclo completo: **Usuário → IDE → BMad → LLM → Projeto local**
- Planejada criação de gráficos interativos no site da Academy.

---

## 9. Playground (Aprimoramento Futuro)
**Tipo:** Estruturação visual e prática  
**Alterações:**
- Planejada expansão com categorias: Básico, Intermediário, Avançado e Profissional.  
- Cada nível conterá exemplos reais de comandos e simulações.  
- Integração futura com logs do `.bmad-core` para salvar progresso.

---

## 10. Conclusão Geral
O BMad foi consolidado como framework híbrido, rodando localmente e integrado a LLMs externas e IDEs.  
A Academy cobre:
- Conceitos técnicos e práticos  
- Integração com Claude, Cursor e LLMs  
- Estrutura local e versionamento  
- Visualização didática interativa.

---

**Resumo:**  
Essas alterações tornaram o curso mais completo e prático, ajudando o aluno a compreender:
1. O funcionamento técnico do BMad.  
2. A interação entre IA, terminal e estrutura local.  
3. O papel do `npx`, do comando “As” e das LLMs.  
4. A aplicação real do método em qualquer ambiente.
