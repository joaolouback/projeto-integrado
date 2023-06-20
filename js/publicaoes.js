//checkbox

const publicCheckbox = document.getElementById('public-checkbox');
const privateCheckbox = document.getElementById('private-checkbox');

publicCheckbox.addEventListener('change', function() {
  if (publicCheckbox.checked) {
    privateCheckbox.checked = false;
  }
});

privateCheckbox.addEventListener('change', function() {
  if (privateCheckbox.checked) {
    publicCheckbox.checked = false;
  }
});


//arquivo

function openFileSelection() {
    document.getElementById('file-input').click();
  }