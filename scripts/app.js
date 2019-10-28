// dom queries
const chatlist = document. querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');



// add a new chat
newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
    .then(()=> newChatForm.reset())
    .catch(err => console.log(err));
 });

 //update username
  newNameForm.addEventListener('submit', e =>{
      e.preventDefault();
      const newName = newNameForm.name.value.trim();
      chatroom.updateName(newName);
      // reset the form
      newNameForm.reset();
      //show then hide the update msg
      updateMssg.innerText = `Your name was updated to ${newName}`;
      setTimeout(()=> updateMssg.innerText= '',3000)
  });

  // check localStorage
  const username = localStorage.username ? localStorage.username : 'anon';
  7
  // update the chat room
  rooms.addEventListener('click', e =>{
      if(e.target.tagName === 'BUTTON'){
          chatUI.clear();
          chatroom.updateRoom(e.target.getAttribute('id'));
          chatroom.getChats(chat=> chatUI.render(chat));
      }
  });


// CLass instances
const chatUI = new ChatUI(chatlist);
const chatroom = new Chatroom('general', username);

// get the Chats and render
chatroom.getChats((data)=> {
    chatUI.render(data);
});