/*  */
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
    if (files.length === undefined) return
    files.forEach((file, index) => {
        processFile(file, index);
        console.log(file)
    });
}

function processFile(file, index) {
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
}