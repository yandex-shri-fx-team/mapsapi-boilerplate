import './../Boilerplate/Boilerplate';

ymaps.ready(() => {
    // eslint-disable-next-line no-unused-vars
    const myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    });

    ymaps.modules.require(['Boilerplate'], (Boilerplate) => {
        const data = [[37.782551, -122.445368], [37.782745, -122.444586]];
        const boilerplate = new Boilerplate(data);

        boilerplate.setMap(myMap);
    });
});
