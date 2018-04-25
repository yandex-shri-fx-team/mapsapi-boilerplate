const init = (center = [[55.76, 37.64]], zoom = 9, controls = []) => {
    ymaps.ready(() => {
        // eslint-disable-next-line no-unused-vars
        const myMap = new ymaps.Map('map', {
            center: center,
            zoom: zoom,
            controls: controls
        });
    });
};

export default init;
