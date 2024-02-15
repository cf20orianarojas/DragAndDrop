/*  */
let files = [];

const dropArea = document.querySelector('.drop-area');
const dragDropText = document.querySelector('h2');
const button = document.querySelector('button');
const input = document.querySelector('#input-file');
const preview = document.querySelector('#preview');

let evt = ['dragover', 'dragleave', 'drop'];

evt.forEach(event => {
    dropArea.addEventListener(event, prevDefault);
});

function prevDefault(e) {
    e.preventDefault();
}

dropArea.addEventListener("dragover", () => {
    dropArea.classList.add('active');
    dropArea.innerText='In';
});

dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove('active');
    dropArea.innerText='Out';
});

dropArea.addEventListener("drop", (event)=>{});
dropArea.addEventListener("drop", function(e){});
