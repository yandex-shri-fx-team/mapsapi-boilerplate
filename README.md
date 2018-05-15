# Yandex Maps API Boilerplate Module

Yandex.Maps API module for data visualization.

<a name="module_Boilerplate"></a>

## Boilerplate
Boilerplate module.

**Requires**: <code>module:option.Manager</code>

* [Boilerplate](#module_Boilerplate)
    * [Boilerplate](#exp_module_Boilerplate--Boilerplate) ⏏
        * [new Boilerplate([data], [options])](#new_module_Boilerplate--Boilerplate_new)
        * [.getData()](#module_Boilerplate--Boilerplate+getData) ⇒ <code>Object</code>
        * [.setData(data)](#module_Boilerplate--Boilerplate+setData) ⇒ <code>Polygonmap</code>
        * [.getMap()](#module_Boilerplate--Boilerplate+getMap) ⇒ <code>Map</code>
        * [.setMap(map)](#module_Boilerplate--Boilerplate+setMap) ⇒ <code>Heatmap</code>
        * [.destroy()](#module_Boilerplate--Boilerplate+destroy)

<a name="exp_module_Boilerplate--Boilerplate"></a>

### Boilerplate ⏏
**Kind**: Exported class
<a name="new_module_Boilerplate--Boilerplate_new"></a>

#### new Boilerplate([data], [options])

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>Object</code> | Data. |
| [options] | <code>Object</code> | Options for customization. |

<a name="module_Boilerplate--Boilerplate+getData"></a>

#### boilerplate.getData() ⇒ <code>Object</code>
Get the data, polygons and points.

**Kind**: instance method of [<code>Boilerplate</code>](#exp_module_Boilerplate--Boilerplate)
**Returns**: <code>Object</code> - Data.
**Access**: public
<a name="module_Boilerplate--Boilerplate+setData"></a>

#### boilerplate.setData(data) ⇒ <code>Polygonmap</code>
Set the data, polygons and points.

**Kind**: instance method of [<code>Boilerplate</code>](#exp_module_Boilerplate--Boilerplate)
**Returns**: <code>Polygonmap</code> - Self-reference.
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | Data. |

<a name="module_Boilerplate--Boilerplate+getMap"></a>

#### boilerplate.getMap() ⇒ <code>Map</code>
Get the Map instance.

**Kind**: instance method of [<code>Boilerplate</code>](#exp_module_Boilerplate--Boilerplate)
**Returns**: <code>Map</code> - Reference to Map instance.
**Access**: public
<a name="module_Boilerplate--Boilerplate+setMap"></a>

#### boilerplate.setMap(map) ⇒ <code>Heatmap</code>
Set Map instance to render Polygonmap object.

**Kind**: instance method of [<code>Boilerplate</code>](#exp_module_Boilerplate--Boilerplate)
**Returns**: <code>Heatmap</code> - Self-reference.
**Access**: public

| Param | Type | Description |
| --- | --- | --- |
| map | <code>Map</code> | Map instance. |

<a name="module_Boilerplate--Boilerplate+destroy"></a>

#### boilerplate.destroy()
Destructs Polygonmap instance.

**Kind**: instance method of [<code>Boilerplate</code>](#exp_module_Boilerplate--Boilerplate)
**Access**: public

## Usage

```bash
npm install
npm run build
```

For development:

```bash
npm run dev
```

For linting:

```bash
npm run lint
```

For testing:

```bash
npmr test
```
