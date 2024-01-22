window.onload = function() {
    // Sayfa yüklendiğinde localStorage'den hobileri al ve ekle
    var hobiler = JSON.parse(localStorage.getItem("hobiler")) || [];
    var hobiListesi = document.getElementById("hobi-listesi");
  
    hobiler.forEach(function(hobi) {
      var yeniHobi = document.createElement("li");
      yeniHobi.innerHTML = `
        <span>${hobi}</span>
        <input type="checkbox" onclick="hobiSil(this)">
      `;
      hobiListesi.appendChild(yeniHobi);
    });
  };
  
  function hobiEkle() {
    var hobiInput = document.getElementById("yeni-hobi");
    var hobiAdi = hobiInput.value.trim();
  
    if (hobiAdi !== "") {
      var hobiListesi = document.getElementById("hobi-listesi");
  
      var yeniHobi = document.createElement("li");
      yeniHobi.innerHTML = `
        <span>${hobiAdi}</span>
        <input type="checkbox" onclick="hobiSil(this)">
      `;
  
      hobiListesi.appendChild(yeniHobi);
  
      hobiInput.value = "";
        alert("Hobi eklendi!");
      kayitliHobileriGuncelle();
    }
    else {
        // Boş hobi girişi yapılmışsa kullanıcıya uyarı ver
        alert("Lütfen bir hobi girin.");
      }

} 

  
  
  function hobiSil(checkbox) {
    var hobiListesi = document.getElementById("hobi-listesi");
    var li = checkbox.parentNode;
    hobiListesi.removeChild(li);
  
    kayitliHobileriGuncelle();
  }
  
  function kayitliHobileriGuncelle() {
    var hobiListesi = document.getElementById("hobi-listesi");
    var hobiler = [];
  
    for (var i = 0; i < hobiListesi.children.length; i++) {
      var hobi = hobiListesi.children[i].getElementsByTagName("span")[0].innerText;
      hobiler.push(hobi);
    }
  
    localStorage.setItem("hobiler", JSON.stringify(hobiler));
  }
