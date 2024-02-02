document.addEventListener('DOMContentLoaded', function () {

    const messages = localStorage.getItem("messages");
    if (messages) {
        const messageArrary = JSON.parse(messages);

        const messcontainner = document.querySelector(".message-cards");

        messageArrary.forEach(contactus => {

            const messageElement = document.createElement("div");
            messageElement.innerHTML = `
            <div class="card-mess">
            <h1 id="date">2/february/2024</h1>
            <h2 id="name">${contactus.names}</h2>
            <h3 id="email">${contactus.email}</h3>
            <p>${contactus.phone}</p>
            <span>${contactus.message}</span>
        </div>
            
            `
            messcontainner.appendChild(messageElement);
        });
    }

});
