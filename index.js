/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */

function validateForm(form) {
  let invalid = false;

  if (form.email.value == '') {
    form.email.style.border = '3px solid red';
    invalid =true;
  } else {
    form.email.style.border = '1px solid black';
  }

  if (form.about.value == '') {
    form.about.style.border = '3px solid red';
    invalid =true;
  } else {
    form.about.style.border = '1px solid black';
  }

  const pets = document.getElementsByClassName('pet');
  let checks = false;

  for (let i=0; i< pets.length; i++) {
    if (pets[i].checked) checks = true;
  }

  if (!checks) {
    document.querySelector('#petLabel').style.color = 'red';
    invalid =true;
  } else {
    document.querySelector('#petLabel').style.color = 'black';
  }

  //   output info:
  if (!invalid) {
    const data = new FormData(form);
    const value = Object.fromEntries(data.entries());
    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(value, null, 2);
  } else {
    const results = document.querySelector('.results pre');
    results.innerText = '';
  }

  return false;
}
