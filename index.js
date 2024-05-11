const apiUrl = `https://us-central1-zienai.cloudfunctions.net/app/user`;
let loginUSer;
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        loginUSer = data.filter(x => x.id === "7609YqCoSogmPxxrEh9v");
        localStorage.setItem('currentUser', JSON.stringify(loginUSer));
    })
    .catch((error) => {
        console.error("Veri alınamadı:", error);
    });

document.addEventListener('DOMContentLoaded', function () {
    // Yerel depodan kullanıcı bilgilerini al
    const currentUserJSON = localStorage.getItem('currentUser');
    if (currentUserJSON) {
        const currentUser = JSON.parse(currentUserJSON);

        // Kullanıcı bilgilerini HTML'e yerleştir
        document.getElementById('name').textContent = currentUser[0].name;
        document.getElementById('userName').textContent = currentUser[0].userName;
        document.getElementById('authName').textContent = currentUser[0].authName;
    }
});


