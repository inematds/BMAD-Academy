# CHANGELOG - BMAD Academy v2.2.0

## 🚀 Versão 2.2.0 - Expansão Profissional (Janeiro 2025)

### 📊 Resumo
Atualização de **15 para 17 lições**, adicionando conteúdo profissional sobre QA Test Architect e Workflow completo do BMAD Method.

---

## ✨ Novas Funcionalidades

### 📚 Novas Lições

#### Lição 16: QA Test Architect (Avançado)
- ✅ Explicação completa dos 6 comandos QA avançados:
  - `*risk` - Análise de riscos antes de codificar
  - `*design` - Estratégia de testes baseada em riscos
  - `*trace` - Rastreamento de requisitos
  - `*nfr` - Non-Functional Requirements (Security, Performance, Reliability, Maintainability)
  - `*review` - Revisão completa + refactoring ativo
  - `*gate` - Quality Gate decision
- ✅ Quality Gates explicados (PASS/CONCERNS/FAIL/WAIVED)
- ✅ Scoring de riscos (1-9 scale)
- ✅ Fluxo completo: Antes → Durante → Depois do desenvolvimento

#### Lição 17: Workflow Completo BMad
- ✅ Workflow profissional em 3 fases:
  1. **PLANNING** - Criar PRD e Architecture (Web UI recomendado)
  2. **SHARDING** - Dividir docs em épicos e stories (IDE)
  3. **DEVELOPMENT** - Implementar story por story (IDE)
- ✅ Passo a passo detalhado de cada fase
- ✅ Quando usar cada agente
- ✅ Estrutura de arquivos gerada
- ✅ Loop de desenvolvimento iterativo
- ✅ Exemplos por tamanho de projeto (pequeno/médio/grande)

---

## 📖 Atualizações de Conteúdo

### Lição 2: Instalando o BMad
**Antes:** 4 IDEs mencionadas
**Depois:** 8 IDEs oficialmente suportadas

- ✅ Claude Code (VS Code + Claude) - Sintaxe: `/agente`
- ✅ Cursor (IDE com IA) - Sintaxe: `@agente`
- ✅ VS Code + Copilot - Sintaxe: `@agente`
- ✅ **NOVO:** Windsurf (Codeium) - Sintaxe: `@agente`
- ✅ Gemini (Google AI Studio)
- ✅ **NOVO:** OpenCode (via opencode.jsonc)
- ✅ **NOVO:** Codex CLI (Terminal)
- ✅ **NOVO:** Codex Web (GitHub Web via AGENTS.md)

**Melhorias:**
- ✅ Explicação de sintaxe @ vs / por IDE
- ✅ Exemplos práticos em diferentes IDEs
- ✅ Nota sobre linguagem natural ("As agente,") funcionar em todas

### Lição 3: Conhecendo os Agentes
**Antes:** 6 agentes principais
**Depois:** 10 agentes documentados

**6 Agentes Principais (Workflow Padrão):**
1. analyst (Analista de Negócios)
2. pm (Gerente de Produto)
3. architect (Arquiteto de Software)
4. ux-expert (Designer UX/UI)
5. dev (Desenvolvedor Full Stack)
6. qa (Quality Assurance)

**4 Agentes Especializados Adicionais (NOVOS):**
7. **writer** (Escritor Técnico) - Documentação, READMEs, tutoriais
8. **data-scientist** (Cientista de Dados) - Análise de dados, ML, visualizações
9. **SM** (Scrum Master) - Gerencia stories, sprints, divide épicos
10. **PO** (Product Owner) - Valida docs, faz sharding (PRD → épicos/stories)

**Melhorias:**
- ✅ Título atualizado: "Os Agentes do BMad Method"
- ✅ Seção "6 Agentes Principais (Workflow Padrão)"
- ✅ Nova seção "Agentes Especializados Adicionais"
- ✅ Nota explicativa sobre SM e PO (workflows avançados)
- ✅ Ordem dos agentes mantida corretamente

---

## 💬 Knowledge Base Expandida (knowledge.js)

**Antes:** 11 tópicos | **Depois:** 16 tópicos (+5 novos)

### Novos Tópicos Adicionados:

#### 1. `qa_advanced`
**Keywords:** qa avançado, test architect, quality gate, risk, *risk, *design, test strategy

**Conteúdo:**
- Comandos QA avançados (*risk, *design, *trace, *nfr, *review, *gate)
- Quando usar cada comando (antes/durante/depois)
- Sintaxe de uso
- Quality Gates (PASS/CONCERNS/FAIL/WAIVED)

#### 2. `workflow`
**Keywords:** workflow, fluxo, processo, como funciona, ordem certa

**Conteúdo:**
- Workflow completo em 3 fases (Planning, Sharding, Development)
- Passo a passo detalhado
- Diferenças por tamanho de projeto

#### 3. `sharding`
**Keywords:** sharding, shard, dividir, epics, stories, epic, story

**Conteúdo:**
- O que é sharding (dividir docs grandes)
- Por que é necessário
- Como funciona
- Estrutura de arquivos gerada
- Comandos PO para sharding

#### 4. `sm_po`
**Keywords:** sm, scrum master, po, product owner, stories, sprint

**Conteúdo:**
- Scrum Master (SM) - papel e uso
- Product Owner (PO) - papel e uso
- Quando usar cada um
- Workflow: Planning → PO valida → PO shard → SM cria stories → Dev implementa

#### 5. `quality_gates`
**Keywords:** quality gate, gate, pass, fail, concerns, waived

**Conteúdo:**
- O que são Quality Gates
- Status possíveis (PASS/CONCERNS/FAIL/WAIVED)
- Quando é criado
- Onde fica (docs/qa/gates/)
- Como usar no workflow

#### Tópico Atualizado: `ides`
**Antes:** 6 IDEs | **Depois:** 8 IDEs

- ✅ Lista completa atualizada
- ✅ Sintaxe específica por IDE (/, @, linguagem natural)
- ✅ Notas sobre compatibilidade

---

## 📝 README Atualizado

### Badges
- ✅ Versão: 2.1.0 → **2.2.0**

### Tutorial Completo
- ✅ Título: "15 Lições Revisadas" → **"17 Lições - v2.2"**
- ✅ Adicionadas lições 16 e 17 na lista numerada

### Estatísticas do Projeto
| Métrica | v2.1 | v2.2 | Mudança |
|---------|------|------|---------|
| Lições | 15 | **17** | +2 |
| Agentes | 8+ | **10+** | +2-4 |

### Roadmap
- ✅ Versão 2.1 marcada como ✅ completa
- ✅ **Versão 2.2 ✅ (Atual)** criada com 10 itens completados
- ✅ Versão 2.3 planejada (próxima)

### Última Atualização
- ✅ Versão atualizada: 2.1.0 → **2.2.0**

---

## 📊 Estatísticas de Código

| Arquivo | Linhas v2.1 | Linhas v2.2 | Diferença |
|---------|-------------|-------------|-----------|
| `lessons.js` | 1.901 | **2.007** | +106 |
| `knowledge.js` | 213 | **413** | +200 |
| **TOTAL** | 2.114 | **2.420** | **+306** |

---

## ✅ Validação

- ✅ **lessons.js** - Sintaxe JavaScript OK
- ✅ **knowledge.js** - Sintaxe JavaScript OK
- ✅ **README.md** - Markdown OK
- ✅ **17 lições** confirmadas
- ✅ **Versão 2.2.0** aplicada em todos os arquivos

---

## 🎯 Gaps Corrigidos

Comparação com o **User Guide oficial** do BMAD Method:

### ✅ Corrigido
1. ✅ Comandos QA avançados (*risk, *design, *trace, *nfr, *review, *gate)
2. ✅ Agentes SM e PO documentados
3. ✅ Agentes writer e data-scientist adicionados
4. ✅ 8 IDEs suportadas (antes apenas 4)
5. ✅ Sintaxe @ vs / explicada
6. ✅ Workflow completo em 3 fases
7. ✅ Conceito de Sharding explicado
8. ✅ Quality Gates documentados
9. ✅ Ordem correta dos agentes mantida
10. ✅ NFR Assessment explicado

### 🔜 Pendente para v2.3
- [ ] Módulos playground 14 e 15 (QA Test Architect e Workflow)
- [ ] Lição 4 expandida com comandos dos agentes
- [ ] Sistema de progresso do usuário
- [ ] Screenshots e demos

---

## 🚀 Como Atualizar

Se você já tem a v2.1 instalada:

```bash
# 1. Pull das atualizações
git pull origin main

# 2. Não há dependências para instalar (apenas HTML/CSS/JS)

# 3. Abra no navegador
start index.html  # Windows
```

---

## 🙏 Agradecimentos

- **BMAD Method Oficial** - [github.com/bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD)
- **User Guide** - Por fornecer a documentação completa do workflow
- **Comunidade BMAD** - Discord: [discord.gg/gk8jAdXWmj](https://discord.gg/gk8jAdXWmj)
- **Claude Code** - Ferramenta usada no desenvolvimento

---

## 📞 Suporte

- 💬 Discord oficial: `discord.gg/gk8jAdXWmj`
- 🐛 Issues: [github.com/inematds/BMAD-Academy/issues](https://github.com/inematds/BMAD-Academy/issues)
- 📧 Email: inematds@gmail.com

---

**Desenvolvido por INEMA | Janeiro 2025**
