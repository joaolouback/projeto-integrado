//carregar foto
const selecionarFoto = document.getElementById("selecionar-foto");
const fotoPreviewQuadrada = document.getElementById("foto-preview-quadrada");
const fotoPreviewRedonda = document.getElementById("foto-preview-redonda");

selecionarFoto.addEventListener("change", function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    fotoPreviewQuadrada.src = e.target.result;
    fotoPreviewRedonda.src = e.target.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

//editar
const img1 = document.getElementById('img1');
const input1 = document.getElementById('input1');

img1.addEventListener('click', function() {
  input1.focus();
});

const img2 = document.getElementById('img2');
const input2 = document.getElementById('input2');

img2.addEventListener('click', function() {
  input2.focus();
});

const img3 = document.getElementById('img3');
const input3 = document.getElementById('input3');

img3.addEventListener('click', function() {
  input3.focus();
});

const img4 = document.getElementById('img4');
const input4 = document.getElementById('input4');

img4.addEventListener('click', function() {
  input4.focus();
});

const img5 = document.getElementById('img5');
const input5 = document.getElementById('input5');

img5.addEventListener('click', function() {
  input5.focus();
});

const img6 = document.getElementById('img6');
const input6 = document.getElementById('input6');

img6.addEventListener('click', function() {
  input6.focus();
});

const img7 = document.getElementById('img7');
const input7 = document.getElementById('input7');

img7.addEventListener('click', function() {
  input7.focus();
});


//QUALIDADES

let qualidadesAdicionadas = [];


function adicionarQualidade() {
  const inputQualidade = document.getElementById('input-qualidade');
  const qualidade = inputQualidade.value.trim();

  if (qualidade !== '') {
    qualidadesAdicionadas.push(qualidade);
    inputQualidade.value = '';

    exibirQualidadesAdicionadas();
  }
}


function exibirQualidadesAdicionadas() {
  const listaQualidades = document.getElementById('lista-qualidades');
  listaQualidades.innerHTML = '';

  let row;

  qualidadesAdicionadas.forEach((qualidade, index) => {
    if (index % 2 === 0) {
      row = document.createElement('div');
      row.classList.add('qualidade-item');
    }

    const li = document.createElement('li');
    li.textContent = qualidade;

    const imgExcluir = document.createElement('img');
    imgExcluir.src = '/img/excluir.png';
    imgExcluir.alt = 'Excluir';
    imgExcluir.addEventListener('click', () => {
      qualidadesAdicionadas.splice(index, 1);
      exibirQualidadesAdicionadas();
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btn-excluir');
    btnExcluir.appendChild(imgExcluir);

    li.appendChild(btnExcluir);
    row.appendChild(li);

    if ((index + 1) % 2 === 0 || index === qualidadesAdicionadas.length - 1) {
      listaQualidades.appendChild(row);
    }
  });
}


const btnAdicionar = document.getElementById('btn-adicionar');
btnAdicionar.addEventListener('click', adicionarQualidade);

const inputQualidade = document.getElementById('input-qualidade');
inputQualidade.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    adicionarQualidade();
  }
});


const imagensAdicionar = document.querySelectorAll('.adicionar-checkbox');
imagensAdicionar.forEach((imagem) => {
  imagem.addEventListener('click', () => {
    const label = imagem.nextElementSibling;
    const qualidade = label.textContent;

    qualidadesAdicionadas.push(qualidade);
    exibirQualidadesAdicionadas();
  });
});


const imagensExcluir = document.querySelectorAll('.btn-excluir img');
imagensExcluir.forEach((imagem) => {
  imagem.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    const qualidade = li.textContent;

    const index = qualidadesAdicionadas.indexOf(qualidade);
    if (index !== -1) {
      qualidadesAdicionadas.splice(index, 1);
      exibirQualidadesAdicionadas();
    }
  });
});


const btnEnviar = document.getElementById('btn-enviar');
btnEnviar.addEventListener('click', () => {
});


//senha

const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('input7');

  togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  });