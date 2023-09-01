// Функция удаляет объект из массива данных
function getArrayWithoutObject(array, object) {
  const newState = array.slice(0, array.length);

  const indexOfObject = newState.indexOf(object[0]);
  if(indexOfObject !== -1) {
    newState.splice(indexOfObject, 1);
    return newState;
  } else {
    throw Error("Ошибка! Удаляемая карточка не сохранена.");
  }
}

export { getArrayWithoutObject };
