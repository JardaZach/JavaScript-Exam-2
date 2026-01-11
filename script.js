const produkty = [
  {
    id: 1,
    nazev: "Notebook",
    cena: 24999,
    skladem: true,
  },
  {
    id: 2,
    nazev: "Sluchátka",
    cena: 1999,
    skladem: false,
  },
  {
    id: 3,
    nazev: "Mobilní telefon",
    cena: 13999,
    skladem: true,
  },
]

const produktyDiv = document.getElementById("produkty")

produkty.forEach(produkt => {
  const mujprodukt = document.createElement("div")

  const nazevProduktu = document.createElement("h2")
  nazevProduktu.textContent = produkt.nazev

  const cenaProduktu = document.createElement("p")
  cenaProduktu.textContent = `Cena: ${produkt.cena} Kč`

  const naSklade = document.createElement("p")
  if (produkt.skladem) {
    naSklade.textContent = "Tento produkt je skladem"
    naSklade.style.color = "green"
  } else {
    naSklade.textContent = "Tento produkt není skladem"
    naSklade.style.color = "red"
  }

  mujprodukt.appendChild(nazevProduktu)
  mujprodukt.appendChild(cenaProduktu)
  mujprodukt.appendChild(naSklade)

  produktyDiv.appendChild(mujprodukt)
})

