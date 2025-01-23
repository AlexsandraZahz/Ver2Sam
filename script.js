
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

function checkFields() {
  startButton.disabled = !(mediaType.value && outputType.value && visualizationType.value && filePath.value);
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