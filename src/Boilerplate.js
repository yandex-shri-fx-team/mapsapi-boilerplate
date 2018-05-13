import normalizeData from './utils/normalizeData';

/**
 * Boilerplate module.
 *
 * @module Boilerplate
 * @requires option.Manager
 */
ymaps.modules.define('Boilerplate', [
    'option.Manager'
], (provide, OptionManager) => {
    /**
     * @param {Object} [data] Data.
     * @param {Object} [options] Options for customization.
     */
    class Boilerplate {
        construcotor(data, options) {
            const defaultOptions = new OptionManager({});

            this.options = new OptionManager(options, defaultOptions);
            this.setData(data);
        }

        /**
         * Get the data, polygons and points.
         *
         * @public
         * @returns {Object} Data.
         */
        getData() {
            return this._data || null;
        }

        /**
         * Set the data, polygons and points.
         *
         * @public
         * @param {Object} data Data.
         *  {Object} data.polygons GeoJSON FeatureCollections.
         *  {Object} data.points GeoJSON FeatureCollections.
         * @returns {Polygonmap} Self-reference.
         */
        setData(data) {
            this._data = normalizeData(data);

            return this;
        }

        /**
         * Get the Map instance.
         *
         * @public
         * @returns {Map} Reference to Map instance.
         */
        getMap() {
            return this._map;
        }

        /**
         * Set Map instance to render Polygonmap object.
         *
         * @public
         * @param {Map} map Map instance.
         * @returns {Heatmap} Self-reference.
         */
        setMap(map) {
            if (this._map !== map) {
                this._map = map;

                if (map && this._data) {
                    this._render();
                }
            }

            return this;
        }

        /**
         * Destructs Polygonmap instance.
         *
         * @public
         */
        destroy() {
            this.setData(null);
            this.setMap(null);
        }
    }

    provide(Boilerplate);
});
