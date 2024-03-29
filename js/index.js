// chat container 
var chats = document.getElementById("chat");

// auto scrolling 
chats.scrollTop = chats.scrollHeight;


// display typing animation 
function displayTypingAnimation(){
    document.getElementById("typing-text").innerHTML=
    "Saifuddin is typing ...";
}

// hide typing animation 
function hideTypingAnimation(){
    document.getElementById("typing-text").innerHTML="";
}

// check if message is empty or not 
function emptyMessageCheck(msg){
    if (msg.trim() === "") {
        return true;
  }
  return false;
}

// getting sender message
function getSenderMessage(){
    let textMessage = document.getElementById('text-message').value;
    return textMessage;
}

// display sender mesage 
function showSenderMessage(){

    //sender container
    let senderDiv = document.createElement('div');
    senderDiv.classList.add("sender");

    // sender details container 
    let senderDetailsDiv = document.createElement('div');
    senderDetailsDiv.classList.add("sender-chat-details");

    // sender name
    let senderName = document.createElement("h5");
    senderName.innerHTML="Tomal";

    // sender message
    let senderMessage = document.createElement("p");
    senderMessage.innerHTML = getSenderMessage();
    
    // sending icon
    let sendingState = document.createElement("span");

    sendingState.setAttribute("id","sending-icon");

    sendingState.innerHTML = "✓✓";
    sendingState.style.color = "grey";
    sendingState.style.fontSize = "15px";
    sendingState.style.fontWeight = "bold";


    senderDetailsDiv.appendChild(senderName);
    senderDetailsDiv.appendChild(senderMessage);
    senderDetailsDiv.appendChild(sendingState);


    // sender image container 
    let senderImageDiv = document.createElement('div');
    senderImageDiv.classList.add("sender-chat-image");

    // sender image 
    let senderImage = document.createElement('img');
    senderImage.setAttribute("src","images/sender.webp");
    senderImage.setAttribute("alt","sender");

    senderImageDiv.appendChild(senderImage);
    senderDiv.appendChild(senderDetailsDiv);
    senderDiv.appendChild(senderImageDiv);

    chats.appendChild(senderDiv);

    document.getElementById("text-message").value="";
    displayTypingAnimation();
    
    chats.scrollTop = chats.scrollHeight;

}

// sending status change 
function sendingStatusChange(){
    let sendingIcon = document.getElementById("sending-icon");
    setTimeout(function() {
        sendingIcon.style.color = "black";
    }, 1500);
    setTimeout(function() {
        sendingIcon.style.color = "green"; 
    }, 3000);
       
}

// getting receiver image 
function getReceiverMessage(){

    // random message array
    const receiverMessages=["Hello Tomal", "How are you?","Hope you are well by the grace of Almighty Allah","It's been a long time I haven't seen you","Please pay me a visit"];

    let rand = Math.floor(Math.random() * receiverMessages.length);

    let message = receiverMessages[rand];

    return message;
}

// display receiver image 
function showReceiverMessage(){

    hideTypingAnimation();

    // receiver container 
    let receiverDiv = document.createElement('div');
    receiverDiv.classList.add("receiver");

    // receiver image container 
    let receiverImageDiv = document.createElement('div');
    receiverImageDiv.classList.add("receiver-chat-image");

    // receiver image 
    let receiverImage = document.createElement('img');
    receiverImage.setAttribute("src","images/receiver.png");
    receiverImage.setAttribute("alt","receiver");

    receiverImageDiv.appendChild(receiverImage);

    // receiver details container 
    let receiverDetailsDiv = document.createElement('div');
    receiverDetailsDiv.classList.add("receiver-chat-details");

    // receiver name 
    let receiverName = document.createElement("h5");
    receiverName.innerHTML="Saifuddin";

    // receiver message 
    let receiverMessage = document.createElement("p");
    receiverMessage.innerHTML = getReceiverMessage();
    
    receiverDetailsDiv.appendChild(receiverName);
    receiverDetailsDiv.appendChild(receiverMessage);

    receiverDiv.appendChild(receiverImageDiv);
    receiverDiv.appendChild(receiverDetailsDiv);

    chats.appendChild(receiverDiv);

    hideTypingAnimation();
    chats.scrollTop = chats.scrollHeight;
}

// send message 
function sendMessage(){

    hideTypingAnimation();

    let message = getSenderMessage();
    let emptyMessage = emptyMessageCheck(message);

    if (emptyMessage) {
        alert("Message field can't be empty.");
        return;
    }

    showSenderMessage();
    sendingStatusChange();
    
    setTimeout(showReceiverMessage,5000);
    

}