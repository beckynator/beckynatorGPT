// script.js
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');
const expressionElement = document.getElementById('expression');

// Predefined responses with emotions
const botResponses = {
    "hello": { message: "Hi there! How can I help you today?", emotion: "😊 Chat Gpt" },
    "hi": { message: "Hi there! How can I help you today?", emotion: "😊" },
    "What is html": { message: "HTML Stands For Hyper Text Markup Language?", emotion: "😊" },
    "how are you": { message: "I'm just a bot, but I'm doing great! How about you?", emotion: "😄" },
    "what is your name": { message: "I'm a friendly chatbot created to assist you!", emotion: "🤖" },
    "cafe near me": { message: " Hmmmmm.....Gene Cafe and Resturant Is the Best Choice?", emotion: "😊" },
    "bye": { message: "Goodbye! Have a great day!", emotion: "👋" },
    "default": { message: "Sorry, I don't understand that. Can you try asking something else?", emotion: "🤔" }
};

// Send user message to chatbox
function sendMessage() {
    const message = userInput.value.trim().toLowerCase();
    
    if (message) {
        // Display user's message
        appendMessage(message, 'user-message');
        
        // Get bot response or default message
        const response = botResponses[message] || botResponses["default"];
        
        // Display bot's response
        setTimeout(() => {
            appendMessage(response.message, 'bot-message');
            changeExpression(response.emotion);  // Change bot's expression
        }, 5000); // 0.5s delay for bot response
        
        userInput.value = ''; // Clear input
    }
}

// Append message to chatbox
function appendMessage(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(className);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbox.appendChild(messageElement);
    
    // Auto-scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Change chatbot expression (emoji)
function changeExpression(emoji) {
    expressionElement.textContent = emoji;
}

// Event listener for 'Send' button
sendButton.addEventListener('click', sendMessage);

// Event listener for 'Enter' key
userInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
