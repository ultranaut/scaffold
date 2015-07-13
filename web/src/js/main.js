'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var div = document.createElement('div');
  div.innerHTML = 'Yup.';
  document.querySelector('.container')
          .appendChild(div);
});
