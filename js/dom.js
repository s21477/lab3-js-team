const liczbaFormularzy = document.forms.length;
const liczbaObrazkow = document.images.length;
const liczbaOdnosnikow = document.links.length;
const liczbaAkapitow = document.querySelectorAll('#projekt1 p').length;

console.log('Formularze:', liczbaFormularzy);
console.log('Obrazki:', liczbaObrazkow);
console.log('Odnośniki:', liczbaOdnosnikow);
console.log('Akapity w #projekt1:', liczbaAkapitow);