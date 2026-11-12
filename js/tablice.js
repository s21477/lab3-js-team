// wypisuje tekst jako nowy akapit w bloku #tablice
function wypisz(tekst) {
 const akapit = document.createElement('p');
 akapit.textContent = tekst;
 document.getElementById('tablice').append(akapit);
}

// 1.
const tablica = ['pizza', 'pierogi', 'sushi', 'kebab', 'schabowy'];
console.log(tablica);
console.table(tablica);
wypisz(`Wybrany element: ${tablica[2]}`);

// 2.
tablica[tablica.length - 1] = 'Nowa wartość';
console.log(tablica[tablica.length - 1]);

// 3.
tablica[5] = 'nowy6';
console.log(tablica.length);
tablica[tablica.length] = 'nowy7';
console.log(tablica.length);
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log(tablica.length);

// 4.
const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

// 5.
wypisz(`Tablica: ${tablica.join(', ')} (elementów: ${tablica.length})`);
const szukany = 'sushi';
wypisz(`Czy tablica zawiera "${szukany}"? ${tablica.includes(szukany) ? 'tak' : 'nie'}, pozycja: ${tablica.indexOf(szukany)}`);

// OSOBA A
// 1.
const oceny = [
    {przedmiot: 'JavaScript', ocena: 5},
    {przedmiot: 'Git', ocena: 4},
    {przedmiot: 'HTML', ocena: 5},
    {przedmiot: 'CSS', ocena: 3}
];
wypisz(`${oceny[1].przedmiot}: ${oceny[1].ocena}`);

// 2.
oceny.forEach((element) => {
    wypisz(`${element.przedmiot}: ${element.ocena}`);
});

// 3.
const przedmioty = oceny.map((element) => element.przedmiot);
wypisz(`Wszystkie przedmioty: ${przedmioty.join(', ')}`);

const piatki = oceny.filter((element) => element.ocena === 5);
const nazwyPiatek = oceny.map((element) => element.przedmiot);
wypisz(`Przedmioty na 5 (${piatki.length}): ${nazwyPiatek.join(', ')}`);