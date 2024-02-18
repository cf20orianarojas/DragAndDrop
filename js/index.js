let files = [];

const dropArea = document.querySelector('.drop-area');
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

let evt = ["dragover", "dragleave", "drop"];

function prevDefault(e) {
    e.preventDefault();
}

evt.forEach(event => {
    dropArea.addEventListener(event, prevDefault);
});

dropArea.addEventListener("dragover", () => {
    dropArea.classList.add('active');
    dragDropText.textContent='Drop to upload files';
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove('active');
    dragDropText.textContent='Drag & Drop files';
});

dropArea.addEventListener("drop", (event) => {
    dropArea.classList.remove('active');
    files = files.concat(Array.from(event.dataTransfer.files));
    dragDropText.textContent='Drag & Drop files';
    showFiles();
});

function showFiles() {
    fileInPrevList.clear(); // limpiar els noms del fitxer que hi havia abans
    preview.innerHTML = '';
    if (files.length > 0) {
        files.forEach((file, index) => {
            processFile(file, index);
        });
    }
}

let fileInPrevList = new Set(); // set que comprova que els noms de fitxers

function processFile(file, index) {
    const validExtensions = ["image/jpeg", "image/jpg", "image/png", "image/gif"];
    const docType = file.type;

    let extImatge = validExtensions.find(ext => ext == docType);

    if (!extImatge) {
        console.log(`El arxiu no és una imatge`);
        files.splice(index, 1)
    } else {
        // control de fitxer duplicats
        if (!fileInPrevList.has(file.name)) {
            fileInPrevList.add(file.name);
            // obj reader
            let reader = new FileReader();
            reader.addEventListener('load', () => { 
                let fileURL = reader.result;
                previewFile(file, fileURL, index);
            });
            reader.readAsDataURL(file);
        }
    }
}

// Funció que crea divs amb la previsualització de les imatges
function previewFile(file, fileURL, index) {
    let prev = `<div id="prevImg${index}" class="previewImage">
                    <img src="${fileURL}"/>
                    <span>${file.name}</span>
                    <span onclick="removeBtn(${index})" class="material-symbols-outlined
                    removeBtn">x</span>
                </div>`;
    preview.innerHTML += prev;
}

// Aquesta funció eliminarà de l’array l’arxiu de la posició i.
function removeBtn(i) {
    files.splice(i, 1);
    document.querySelector(`#prevImg${i}`).remove();
    showFiles();
}

button.addEventListener("click", (e) => {
    e.preventDefault();
    input.click();
})

input.addEventListener("change", () => { 
    files = files.concat(Array.from(input.files));
    showFiles();
});

// Dades a PHP
form.addEventListener("submit", (e) => {
    e.prevDefault(); 
    
    // obj DataTransfer
    const dataTransfer = new DataTransfer();
    files.forEach(file => {
        dataTransfer.items.add(file);
    });
    input.files = dataTransfer.files;
    form.submit();
})