async function bla() {
  const response = await fetch('http://localhost:3000/all_teas/all');
  const result = await response.json();
  return result;
}

ymaps.ready(init);

async function init() {
  const myMap = new ymaps.Map('myMap', {
    center: [33.922858435071724, 39.28918685266446],
    zoom: 1.5,
  });
  const result = await bla();
  console.log(result.allTeas);
  result.allTeas.map((el) => {
    const newarr = el.from.split(', ').map((le) => Number(le));
    console.log(newarr, '======');
    return myMap.geoObjects.add(new ymaps.Placemark(newarr, { balloonContent: `<img src"${el.image}">` }));
  });
  // fetch get запрос на все чаи
  // const response = await fetch('http://localhost:3000/all_teas/all');
  // const result = await response.json();
  // console.log(result);
  // myMap.geoObjects.add(new ymaps.Placemark([55.684758, 37.738521])); // добавление точки по кордам
  myMap.events.add('click', (e) => { // получение координат по клику
    let coords = e.get('coords');
    if (window.location.href !== 'http://localhost:3000/all_teas/') myMap.geoObjects.add(new ymaps.Placemark(coords));
    const coordsInput = document.querySelector('#geometry_point');
    console.log(coords);
    // coordsInput.value = coords;
  });
}
