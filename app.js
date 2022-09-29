

document.querySelector('#calculer').addEventListener('click', function () {
  const taille = document.querySelector('#taille').value;
  const poid = document.querySelector('#poid').value;

  const bmi = (poid / (taille * 2)) * 100;
  document.querySelector('#result').textContent = bmi.toFixed(1);
});
