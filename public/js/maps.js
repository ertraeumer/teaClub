ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [33.922858435071724, 39.28918685266446],
    zoom: 1.5,
  });

  myMap.geoObjects.add(new ymaps.Placemark([55.684758, 37.738521])); // добавление точки по кордам
  myMap.events.add('click', (e) => { // получение координат по клику
    const coords = e.get('coords');
    console.log(coords);
  });
}
