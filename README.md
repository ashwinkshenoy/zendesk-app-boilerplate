<h1 align="center">
  Zendesk Vue Boilerplate
  <br />
  <img src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg">
  <img src="https://img.shields.io/badge/Made%20With-Love-orange.svg">
</h1>

<div align="center">
  🌈 A Simple starter boilerplate for Vue 3 projects.
</div>
<br /><br />

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)
![forthebadge](https://forthebadge.com/images/badges/kinda-sfw.svg)

<br />

## 🤘🏻 Introduction

The scope of this project is a to have a ready to go app boilerplate to start building zendesk apps using:

- VueJS 3<br>

> **Note:**
> Vuex/Pinia can also be added respective installation guidelines using `npm`

> For Vue 2, Check this [Template](https://github.com/ashwinkshenoy/zendesk-app-boilerplate/tree/vue2))

<br />

## 🛠 Installation

### 🐣 Local Development

Config settings to run app locally.

```json
{
  "IS_PRODUCTION": false
}
```

To initilaze local development do:

```
npm run install
```

To start development server do:

```
npm run serve
```

HMR (Hot Module Reload) is available for all the files.
You need to restart the server for changes made to `manifest.js` file.

#### Assets

All the app logos/ branding should be placed inside `./assets/` folder.

All internal icons/ images should be placed as usual, inside `./src/assets/`

#### Manifest

The `manifest.js` file wil include all your configurations for the app.

**In Dev:**

- `npm run serve` will build `manifest.json` from the manifest.js file for local dev.
  The entry path will be localhost:4000.

**In Prod:**

- `npm run build` will build `manifest.json` from the manifest.js file for production.
  The entry path will be the actual path. Ex: `assets/index.html`.

Parameters can also be added depending on dev or production in `manifest.js` file

<br />

### 🦄 Production

- Clone this repository
- To build for production do: `npm run build`
- ZIP file will be generated in `dist/tmp` folder. `dist` folder will contain all the minified code.
- Upload this zip package on `Zendesk Support > Admin > Apps > Manage > Upload private app`
- Fill the requested fields in the app settings screen, shown after installation.

<br />

### Parameters

`IS_PRODUCTION`:

Looking at the `manifest.js` file you may notice the presence of the parameter `IS_PRODUCTION`.
This hidden parameter will help you when you work `secure` settings.

```json
{
  "name": "IS_PRODUCTION",
  "type": "hidden",
  "default": "true"
}
```

**Note:**
This trick will only work if you run `zat server -c config.json`

<br />

**Feel free to explore and if you like it, hit the star button ⭐️**
❤️
