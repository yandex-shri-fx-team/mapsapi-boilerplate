import '../../src/Boilerplate';

const data = {};

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map', {
        center: [37.64, 55.76],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector']
    });

    ymaps.modules.require(['Boilerplate'], (Boilerplate) => {
        const polygonmap = new Boilerplate(data);

        polygonmap.setMap(myMap);
    });
});
