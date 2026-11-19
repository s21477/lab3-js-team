const zespol = [
    { nazwisko: 'Krzysiak', imie: 'Tomasz', grupa: '1', 
      email: '21477@student.ans-elblag.pl', indeks: '21477' },
    { nazwisko: 'Sydor', imie: 'Jakub', grupa: '1', 
      email: '21540@student.ans-elblag.pl', indeks: '21540' }
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

// ★ drugi przycisk: dopisuje do listy #lista element z numerem kliknięcia
let numerKlikniecia = 0;

function dodajDoListy() {
    numerKlikniecia++;
    const li = document.createElement('li');
    li.textContent = `Kliknięcie numer ${numerKlikniecia}`;
    document.getElementById('lista').append(li);
}

document.getElementById('dodajDoListy').addEventListener('click', dodajDoListy);
