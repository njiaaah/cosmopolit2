document.addEventListener('DOMContentLoaded', ()=>{
  if (document.querySelector('#map')) {

    let center = [55.755695, 37.523132];
    let mark_home = [55.755695, 37.523132];
    let mark_office = [55.754618, 37.524067];

    function init() {
    let map = new ymaps.Map('map', {
    center: center,
    zoom: 16,
    controls: ['zoomControl'],  
    }, {
    zoomControlPosition: { right: 50, top: 260 },
    zoomControlSize: 'auto'
    });

        objectManager = new ymaps.ObjectManager({
          // Чтобы метки начали кластеризоваться, выставляем опцию.
         clusterize: true,
          // ObjectManager принимает те же опции, что и кластеризатор.
          gridSize: 64,
          // Макет метки кластера pieChart.
          clusterIconLayout: "default#pieChart"
      });
  map.geoObjects.add(objectManager);

  let placemark_home = new ymaps.Placemark(mark_home, {
    hintContent: 'ЖК ШЕЛЕПИХА',
    balloonContent: 'ЖК ШЕЛЕПИХА'
  }, {
    iconLayout: "default#image",
    iconImageHref: "./assets/img/icons/map/metka.svg",
    iconImageSize: [50, 31],
    iconImageOffset: [-25, -27]
  });

  let placemark_office = new ymaps.Placemark(mark_office, {
    hintContent: 'ОФИС ПРОДАЖ',
    balloonContent: 'ОФИС ПРОДАЖ'
  }, {
    iconLayout: "default#image",
    iconImageHref: "./assets/img/icons/map/office.svg",
    iconImageSize: [50, 31],
    iconImageOffset: [-25, -27]
  });
  

  // Создадим 5 пунктов выпадающего списка.
  var listBoxItems = ['Образование', 'Медицина', 'Спорт', 'Торговые центры', 'Парки', 'Культура', 'Магазины', 'Кафе и рестораны', 'Салоны красоты', 'ПОДРОБНЕЕ']
          .map(function (title) {
              return new ymaps.control.ListBoxItem({
                  data: {
                      content: title,
                  },
                  state: {
                      selected: true
                  }
              })
          }),
      reducer = function (filters, filter) {
          filters[filter.data.get('content')] = filter.isSelected();
          return filters;
      },
      // Теперь создадим список, содержащий 5 пунктов.
      listBoxControl = new ymaps.control.ListBox({
          data: {
              content: 'Фильтр',
              title: 'Фильтр'
          },
          items: listBoxItems,
          state: {
              // Признак, развернут ли список.
              expanded: true,
              filters: listBoxItems.reduce(reducer, {})
          }
      });
  map.controls.add(listBoxControl);

  // Добавим отслеживание изменения признака, выбран ли пункт списка.
  listBoxControl.events.add(['select', 'deselect'], function (e) {
      var listBoxItem = e.get('target');
      var filters = ymaps.util.extend({}, listBoxControl.state.get('filters'));
      filters[listBoxItem.data.get('content')] = listBoxItem.isSelected();
      listBoxControl.state.set('filters', filters);
  });

  var filterMonitor = new ymaps.Monitor(listBoxControl.state);
  filterMonitor.add('filters', function (filters) {
      // Применим фильтр.
      objectManager.setFilter(getFilterFunction(filters));
  });

  function getFilterFunction(categories) {
      return function (obj) {
          var content = obj.properties.balloonContent;
          return categories[content]
      }
  }

    map.geoObjects
      .add(placemark_home)
      .add(placemark_office)
    
      

  $.ajax({
      url: "assets/script/mapmarkers.json"
  }).done(function (data) {
      objectManager.add(data);
  });



  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты
}


    ymaps.ready(init);

    // add classes to map labels

    function addClassAndIdToElements() {
        let parentElements = document.querySelectorAll('.ymaps-2-1-79-listbox__list');
        if (parentElements.length > 0) {
            parentElements.forEach(function(parentElement) {
                let children = parentElement.children;
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.add('map__menu__label');
                    children[i].setAttribute('id', 'map__menu__label-' + (i + 1).toString().padStart(2, '0'));
                    children[i].addEventListener('click', function() {
                        this.classList.toggle('map__menu__label_hidden');
                    });
                }
            });

            clearInterval(intervalID);
        }
    }


    addClassAndIdToElements();


    var intervalID = setInterval(addClassAndIdToElements, 100);

    }

  
})


