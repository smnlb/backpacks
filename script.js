function addInputs() {
  let numberOfInputs = parseInt(document.getElementById('inputCount').value);
  if (isNaN(numberOfInputs) || numberOfInputs <= 0 || numberOfInputs > 10) {
    alert('Введите корректное число от 1 до 10. В противном случае что-то может пойти не так!');
    return;
  }

  let container = document.getElementById('inputContainer'); // Это место для новых полей
  while (container.hasChildNodes()) { 
    container.removeChild(container.lastChild); // Освобождаем место от старых элементов
  }

  for (let i = 0; i < numberOfInputs; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = `dynamicInput${i}`; // Имена для каждого поля для избежания ошибок
    input.placeholder = `Ввод ${i + 1}`;
    container.appendChild(input); // Добавляем новое поле в контейнер
    container.appendChild(document.createElement('br')); // Предусматриваем дополнительное пространство между полями
  }
}
