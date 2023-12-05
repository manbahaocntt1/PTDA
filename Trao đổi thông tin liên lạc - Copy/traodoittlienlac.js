function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var chatBox = document.getElementById("chatBox");

    var message = messageInput.value;

    if (message.trim() !== "") {

        var messageElement = document.createElement("div");
        messageElement.className = "message";

        var labelElement = document.createElement("span");
        labelElement.className = "label";
        labelElement.textContent = " ";

        var contentElement = document.createElement("span");
        contentElement.textContent = message;

        messageElement.appendChild(labelElement);
        messageElement.appendChild(contentElement);

        chatBox.appendChild(messageElement);

        chatBox.appendChild(document.createElement("br"));

        messageInput.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
