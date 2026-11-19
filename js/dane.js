const zespol = [
    { nazwisko: 'Krzysiak', imie: 'Tomasz', grupa: '1', 
      email: '21477@student.ans-elblag.pl', indeks: '21477' },
    { nazwisko: 'Sydor', imie: 'Jakub', grupa: '1', 
      email: '21540@student.ans-elblag.pl', indeks: '21540' },
    { nazwisko: 'Kuczkowska', imie: 'Angelika', grupa: '1', 
      email: '21478@student.ans-elblag.pl', indeks: '21478' }
];

// wstawienie danych obu osób na stronę (id akapitu = nazwa pola obiektu)
const pola = ['nazwisko', 'imie', 'grupa', 'email', 'indeks'];

for (const pole of pola) {
    document.getElementById(pole).textContent =
        `${zespol[0][pole]}, ${zespol[1][pole]}`;
}

// odczyt danych z elementów strony (przez DOM) i wyświetlenie w alercie
function pokazDane() {
    let tekst = '';
    for (const pole of pola) {
        tekst += `${pole}: ${document.getElementById(pole).textContent}\n`;
    }
    alert(tekst);
}

document.getElementById('pokazDane').addEventListener('click', pokazDane);
