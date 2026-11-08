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