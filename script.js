
function toggleChat() {
    var chatContainer = document.getElementsByClassName("chatContainer");
    if (chatContainer.style.display === "none" || chatContainer.style.height === "0px") {
        chatContainer.style.display = "block";
        chatContainer.style.height = "600px";  // Ajuste conforme necessário
    } else {
        chatContainer.style.display = "none";
        chatContainer.style.height = "0px";
    }
}