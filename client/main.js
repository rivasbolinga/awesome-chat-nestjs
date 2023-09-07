const socket = io('http://localhost:3000');

const clientsTotal = document.getElementById('clients-total');
const messageContainer = document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const now = moment().format('h:mm');

const sendMessage = () => {
  const data = {
    name: nameInput.value,
    message: messageInput.value,
    dateTime: new Date(),
  };
  socket.emit('message', data);
  addMessageToUI(true, data);
  messageInput.value = '';
};

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

socket.on('clients-total', (data) => {
  clientsTotal.innerText = `Total clients: ${data}`;
});

socket.on('chat-message', (data) => {
  addMessageToUI(false, data);
});

const addMessageToUI = (isOwnMessage, data) => {
  const element = `<li class= "${
    isOwnMessage ? 'message-right' : 'message-left'
  }">
<p class="message">${data.message}
<span>${data.name}  &#8226; ${now}</span></p></li>`;
  messageContainer.innerHTML += element;
};
