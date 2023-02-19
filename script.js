let haberListeEleman = document.querySelector("#haberListe")

function haberGoster() {
    
    haberListeEleman.innerHTML = ""

    fetch("https://hn.algolia.com/api/v1/search?query=chatgpt")
    .then(sonuc => sonuc.json())
    .then(veri => {
        
        console.log(veri)

        let haberArray = veri.hits

        haberArray.forEach(eleman => {
            let baslik = eleman.title
            let yazar = eleman.author
            let haberLink = eleman.url
            let yorumSayisi = eleman.num_comments

            let yeniKolon = document.createElement("div")
            yeniKolon.classList.add("col-md-3")

            let haberSablonHTML = `
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                      <h5 class="card-title">${baslik}</h5>
                      <h6 class="card-subtitle mb-2 text-muted">${yazar}</h6>

                      <a href="${haberLink}" class="card-link">Haber bağlantısı</a>
                      Yorum: <span>${yorumSayisi}</span>
                    </div>
                </div>
            `
            yeniKolon.innerHTML = haberSablonHTML

            haberListeEleman.append(yeniKolon)
        });
    })

}

setTimeout( haberGoster , 3000 )