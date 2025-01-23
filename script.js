const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');
const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const next3 = document.getElementById('next3');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');
const back4 = document.getElementById('back4');
const mediaType = document.getElementById('media-type');
const outputType = document.getElementById('output-type');
const visualizationType = document.getElementById('visualization-type');
const filePath = document.getElementById('file-path');
const browseButton = document.getElementById('browse-button');
const clearButton = document.getElementById('clear-button');
const startButton = document.getElementById('start-button');
const loadingIndicator = document.getElementById('loading-indicator');
const originalContent = document.getElementById('original-content');
const processedContent = document.getElementById('processed-content');
const savePath = document.getElementById('save-path');
const displaySection = document.querySelector('.display-section');

next1.addEventListener('click', () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

next2.addEventListener('click', () => {
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
});

next3.addEventListener('click', () => {
  step3.classList.add('hidden');
  step4.classList.remove('hidden');
});

back2.addEventListener('click', () => {
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
});

back3.addEventListener('click', () => {
  step3.classList.add('hidden');
  step2.classList.remove('hidden');
});

back4.addEventListener('click', () => {
  step4.classList.add('hidden');
  step3.classList.remove('hidden');
});

function checkFields() {
  next1.disabled = mediaType.value === '';
  next2.disabled = outputType.value === '';
  next3.disabled = visualizationType.value === '';
  startButton.disabled = filePath.value === '';
}

mediaType.addEventListener('change', checkFields);
outputType.addEventListener('change', checkFields);
visualizationType.addEventListener('change', checkFields);
filePath.addEventListener('input', checkFields);

browseButton.addEventListener('click', () => {
  filePath.value = "C:/example/path/to/file";
  originalContent.innerHTML = '<img src="https://via.placeholder.com/300" alt="Исходное изображение">';
  checkFields();
});

clearButton.addEventListener('click', () => {
  filePath.value = '';
  originalContent.innerHTML = '<div class="content-placeholder">Выберите объект для отображения</div>';
  checkFields();
});

startButton.addEventListener('click', () => {
  loadingIndicator.classList.add('visible');
  setTimeout(() => {
    loadingIndicator.classList.remove('visible');
    processedContent.innerHTML = '<img src="https://via.placeholder.com/300" alt="Результат">';
    savePath.textContent = 'Результат сохранен в: C:/output/path';
    displaySection.classList.remove('hidden');
  }, 3000); 
});