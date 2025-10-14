// Lógica do Chat
let chatOpen = false;

// Toggle do chat
function toggleChat() {
    chatOpen = !chatOpen;
    const chatWindow = document.getElementById('chat-window');
    const chatIcon = document.getElementById('chat-icon');

    if (chatOpen) {
        chatWindow.classList.add('active');
        chatIcon.textContent = '✕';
    } else {
        chatWindow.classList.remove('active');
        chatIcon.textContent = '💬';
    }
}

// Enviar mensagem
function sendChatMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Adicionar mensagem do usuário
    addChatMessage(message, 'user');
    input.value = '';

    // Mostrar indicador de digitação
    showTypingIndicator();

    // Simular delay de resposta
    setTimeout(() => {
        hideTypingIndicator();
        const answer = findAnswer(message);
        addChatMessage(answer, 'bot');
    }, 1000 + Math.random() * 1000); // 1-2 segundos
}

// Handle Enter key
function handleChatEnter(event) {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
}

// Adicionar mensagem ao chat
function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');

    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = text.replace(/\n/g, '<br>');

    messageDiv.appendChild(contentDiv);
    messagesContainer.appendChild(messageDiv);

    // Auto-scroll para o final
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Mostrar indicador de digitação
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chat-messages');

    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot';
    typingDiv.id = 'typing-indicator';

    const indicatorDiv = document.createElement('div');
    indicatorDiv.className = 'typing-indicator';
    indicatorDiv.innerHTML = '<span></span><span></span><span></span>';

    typingDiv.appendChild(indicatorDiv);
    messagesContainer.appendChild(typingDiv);

    // Auto-scroll
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Esconder indicador de digitação
function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Perguntas sugeridas
const suggestedQuestions = [
    "O que é o BMad?",
    "Como instalar o BMad?",
    "Quais são os agentes disponíveis?",
    "Como criar meu primeiro projeto?",
    "Me fale sobre o agente dev",
    "Quais IDEs são suportadas?",
    "Mostre casos de uso práticos",
    "O que são os pacotes de expansão?"
];

// Adicionar sugestão de pergunta aleatória
function addRandomSuggestion() {
    const random = Math.floor(Math.random() * suggestedQuestions.length);
    const suggestion = suggestedQuestions[random];

    const messagesContainer = document.getElementById('chat-messages');

    const suggestionDiv = document.createElement('div');
    suggestionDiv.className = 'chat-message bot';
    suggestionDiv.style.cursor = 'pointer';
    suggestionDiv.onclick = () => {
        document.getElementById('chat-input').value = suggestion;
        sendChatMessage();
    };

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `💡 Sugestão: "${suggestion}"<br><small>Clique para perguntar</small>`;

    suggestionDiv.appendChild(contentDiv);
    messagesContainer.appendChild(suggestionDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Inicialização do chat
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar listener para detectar quando chat fica inativo
    let chatInactiveTimeout;

    document.getElementById('chat-input')?.addEventListener('focus', function() {
        clearTimeout(chatInactiveTimeout);
    });

    // Adicionar sugestão após 3 segundos de inatividade no chat aberto
    document.getElementById('chat-toggle')?.addEventListener('click', function() {
        if (chatOpen) {
            clearTimeout(chatInactiveTimeout);
        }
    });
});
