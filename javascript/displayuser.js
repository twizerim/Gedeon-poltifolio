
document.addEventListener('DOMContentLoaded', function () {

    const users = localStorage.getItem("users");
    if (users) {
        const UserArrary = JSON.parse(users);

        const table = document.querySelector("table");

        UserArrary.forEach(person => {

            const userElement = document.createElement("div");
            userElement.innerHTML = `
        <tr>
            <td>${person.index+1}</td>
            <td>${person.firstname}</td>
            <td>${person.lastname}</td>
            <td>${person.email}</td>
            <td>${person.phone}</td>
            <td>admin</td>
            <td><button onclick="byajeto()" style="background-color: green; color: whitesmoke;">Update</button></td>
            <td><button style="background-color: red;color: whitesmoke;">Delete</button></td>
        </tr>
            
            `
            table.appendChild(userElement);
        });
    }

});
