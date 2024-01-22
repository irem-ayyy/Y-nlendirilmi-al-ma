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

// hobi kısmı end

// css animasyon kısmı start
function showYazı1OnScroll() {
  const yazı1 = document.querySelector('.yazı1');
  const windowHeight = window.innerHeight;
  const elementTop = yazı1.getBoundingClientRect().top;

  if (elementTop < windowHeight) {
    yazı1.classList.add('visible');
  } else {
    yazı1.classList.remove('visible');
  }
}

function showYazı2OnScroll() {
  const yazı2 = document.querySelector('.yazı2');
  const windowHeight = window.innerHeight;
  const elementTop = yazı2.getBoundingClientRect().top;

  if (elementTop < windowHeight) {
    yazı2.classList.add('visible');
  } else {
    yazı2.classList.remove('visible');
  }
}

function showYazı3OnScroll() {
  const yazı3 = document.querySelector('.yazı3');
  const windowHeight = window.innerHeight;
  const elementTop = yazı3.getBoundingClientRect().top;

  if (elementTop < windowHeight) {
    yazı3.classList.add('visible');
  } else {
    yazı3.classList.remove('visible');
  }
}

document.addEventListener('DOMContentLoaded', showYazı1OnScroll);
document.addEventListener('scroll', showYazı1OnScroll);

document.addEventListener('DOMContentLoaded', showYazı2OnScroll);
document.addEventListener('scroll', showYazı2OnScroll);

document.addEventListener('DOMContentLoaded', showYazı3OnScroll);
document.addEventListener('scroll', showYazı3OnScroll);


// css animasyon kısmı end
