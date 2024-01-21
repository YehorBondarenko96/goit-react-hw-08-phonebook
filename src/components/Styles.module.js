export const script = () => {
  const container = document.getElementById('divForContactList');
const itemsContact = document.querySelectorAll('#itemContact');


container.onscroll = function() {
    itemsContact.forEach(function(element) {
      // Отримайте позицію елемента відносно контейнера
      var rect = element.getBoundingClientRect();
      var position = rect.top + container.scrollTop;
  
      // Визначте позицію, при якій елемент буде вирівнюватися по центру
      var centerPosition = container.clientHeight / 2 - element.clientHeight / 2;
  
      // Перевірте, чи елемент досягнув цієї позиції під час прокрутки
      if (position < centerPosition) {
        // Змініть стилі елемента для вирівнювання по центру
        element.style.position = 'relative';
        element.style.top = centerPosition + 'px';
      } else {
        // Поверніть стилі до значень за замовчуванням
        element.style.position = 'static';
        element.style.top = 'auto';
      }
    });
  };
};