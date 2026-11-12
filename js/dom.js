const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaOdnosnikow = document.links.length;
const liczbaAkapitow = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze:', liczbaFormularzy);
console.log('Obrazki:', liczbaObrazkow);
console.log('Odnośniki:', liczbaOdnosnikow);
console.log('Akapity w #projekt1:', liczbaAkapitow);

document.getElementById('licznik').innerHTML =
    `Formularze na całej stronie (formularz kontaktowy w oknie modalnym): <strong>${liczbaFormularzy}</strong><br>` +
    `Obrazki &lt;img&gt; na całej stronie (logo): <strong>${liczbaObrazkow}</strong><br>` +
    `Odnośniki &lt;a&gt; na całej stronie (menu i linki): <strong>${liczbaOdnosnikow}</strong><br>` +
    `Akapity &lt;p&gt; w sekcji projekt1: <strong>${liczbaAkapitow}</strong>`;