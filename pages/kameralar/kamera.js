const apiUrl = `https://us-central1-zienai.cloudfunctions.net/app/user`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // API'den gelen verileri alın
    const tableBody = document.querySelector("#apiTable tbody");

    // Her bir veri öğesi için bir satır oluşturun ve tabloya ekleyin
    data.forEach((item) => {
      const row = document.createElement("tr");

      // Veri öğelerini tabloya ekleyin
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      row.appendChild(idCell);

      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      const emailCell = document.createElement("td");
      emailCell.textContent = item.surname;
      row.appendChild(emailCell);

      // Tabloya satırı ekle
      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Veri alınamadı:", error);
  });
