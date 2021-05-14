# Zendesk Vue Boilerplate

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)
![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/built-with-swag.svg)
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)
![forthebadge](https://forthebadge.com/images/badges/kinda-sfw.svg)

<br />

## 📖 Table of contents

- [Introduction](#introduction)
- [Development](#development)
- [Settings](#settings)

<br />

## 🤘🏻 Introduction

The scope of this project is a to have a ready to go app boilerplate to start building zendesk apps using:

- VueJS
- CSS/SCSS (scoped styling available)
- ES6 (Babel transpiling)

> **Note:**
> Vuex can also be added following the vuex installation guidelines using `npm`

<br />

## 🖥 Development

This boilerplate has been built on top of vue-cli scaffold, for easier future upgrades.

### Local setup

Add a `./config.json` file in root
Ex:

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

To build for production do:

```
npm run build
```

(all files will be available in `dist/` folder including the zip file `dist/tmp/project.zip` folder)

To lint files do:

```
npm run lint
```

If you wish to use yarn, do replace `npm` with `yarn` in package.json `serve` & `build` commands.

<br />

## 🛠 Settings

### Assets

All the app logos/ branding should be placed inside `./assets/` folder.

All internal icons/ images should be placed as usual, inside `./src/assets/`

<br />

### Manifest

The `manifest.js` file wil include all your configurations for the app.

**In Dev:**
`npm run serve` will build `manifest.json` from the manifest.js file for local dev.
The entry path will be localhost:4000.

**In Prod:**
`npm run build` will build `manifest.json` from the manifest.js file for production.
The entry path will be the actual path. Ex: `assets/index.html`.

Parameters can also be added depending on dev or production in `manifest.js` file

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

When you work with `secure` settings, you should set in your ajax request the
property `secure` as `true` and refer to your secure paramenter using the following pattern:
`{{setting.your_secure_param_name}}`.

The code for an ajax request in produciton
ENV should look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: 'Basic {{setting.your_secure_paramenter}}',
  },
  secure: true,
  ...
})
```

Unfortunately this configuration won't work while you are still working on a local ENV.
This would force you to keep the following structure while you work on a local ENV and then switch it before releasing the app:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: false,
  ...
})
```

By adding `IS_PRODUCTION` parameter setting you can forget about changing this
configuration every time you switch between ENVs. Here is the trick:

The default value is `"true"`, while the `config.json` file will override this with `false`.
In `ZDClient.js` I've added a method called `isProduction()` which will return the current value
for `IS_PRODUCTION` paramenter. Then your code will look like:

```javascript
zdClient.request({
  url: 'url_request',
  headers: {
    authorization: `Basic ${zdClient.isProduction() ? '{{setting.your_secure_paramenter}}' : zdClient.getSetting('your_secure_paramenter')}`,
  },
  secure: zdClient.isProduction(),
  ...
})
```

**Note:**
This trick will only work if you run `zat server -c config.json`

<br />

### ZDClient

`./src/services/ZDClient.js` file is used to add all the `methods` that make use of `ZAF`.

```javascript
let CLIENT = null;
let APP_SETTINGS = null;

return {
  events: {
    APP_REGISTERED(callback) {
      return CLIENT.on('app.registered', (data) => {
        APP_SETTINGS = data.metadata.settings;
        return callback(data);
      });
    }
  },

  init() {
    CLIENT = ZAFClient.init();
  },
  ...
```

`CLIENT` - this is object is the key point of your app that allows you to communicate
with Zendesk. Keep this object as **private** and expose only `getters` and `setter`
you need to make your app working. Same approach could be used for objects like `APP_SETTINGS` and you could also include `CURRENT_TICKET`, `CURRENT_USER` etc.

`events` - Here is where you collect all the events your app is going to listen to.
By default you have `APP_REGISTERED` which is the event that first fires once `ZAFClient.init()` is called. By passing a `callback` function, you will be able
to handles the response from wherever you want in the code. (See main.js for as example)

**Note:** These are ment to be only suggestions and not a must have.

<br />

**Feel free to explore and if you like it, hit the star button ⭐️**
❤️
