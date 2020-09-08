<p align="center">
  <a href="https://www.npmjs.com/package/ngx-smart-slider">
    <img width="230" src="icon.png">
  </a>
</p>

<h1 align="center">
NGX-SMART-SLIDER
</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/ngx-smart-slider" alt="npm" target="_blank">
        <img src="https://img.shields.io/npm/v/ngx-smart-slider" />
    </a>
    <a href="https://www.npmjs.com/package/ngx-smart-slider" alt="npm" target="_blank">
        <img src="https://img.shields.io/npm/dt/ngx-smart-slider" />
    </a>
    <a href="https://github.com/ShadyNagy/ngx-smart-slider/actions?query=workflow%3Anpm-publish" alt="Workflows">
        <img src="https://github.com/shadynagy/ngx-smart-slider/workflows/npm-publish/badge.svg" />
    </a>
    <a href="https://github.com/ShadyNagy/ngx-smart-slider/graphs/contributors" alt="Contributors">
        <img src="https://img.shields.io/github/contributors/ShadyNagy/ngx-smart-slider" />
    </a>
    <a href="https://github.com/ShadyNagy/ngx-smart-slider/blob/master/LICENSE" alt="license">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
    </a>
    <a href="https://www.paypal.me/shadynagy" alt="paypal">
        <img src="https://img.shields.io/badge/PayPal-tip%20me-green.svg?logo=paypal" />
    </a>
</p>

# NGX-SMART-SLIDER

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## :star: Give a Star!
If you like or are using this project please give it a star [here](https://github.com/ShadyNagy/ngx-smart-slider). Thanks!

## Screenshot 

![ngx-smart-slider](https://user-images.githubusercontent.com/6225593/92482762-44f78400-f1e8-11ea-83a5-e3b3992879fa.gif)

## ✨ Features

- Slider

## ☀️ License

<a href="https://github.com/ShadyNagy/ngx-smart-slider/blob/master/LICENSE" alt="license">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
</a>

## 🖥 Environment Support

* Angular `^9.0.0` [![npm package](https://img.shields.io/npm/v/ngx-smart-slider?style=flat-square)](https://www.npmjs.com/package/ngx-smart-slider)

## 📦 Installation

#### NPM

```bash
npm install ngx-smart-slider --save
```

## 🔨 Usage

Import the component modules you want to use into your `app.module.ts` file and [feature modules](https://angular.io/guide/feature-modules).

```ts
import {NgxSmartSliderModule} from 'ngx-smart-slider';

@NgModule({
  imports: [ NgxSmartSliderModule ]
})
export class AppModule {
}
```

In your template write this code.
```html
<smart-slider [cellLimit]="3" [transitionDuration]="1" [height]="200" [items]="items" [showPrevious]="isShowPrevious" [showNext]="isShowNext"></smart-slider>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [class] | Set class | string | '' |
| [transitionDuration] | Transition duration | number | 0.3 |
| [autoplayInterval] | Auto play interval (MS) | number | 2000 |
| [height] | Height | number | null |
| [cellLimit] | Cell limit to show | number | 1 |
| [itemPadding] | Item padding | number | 10 |
| [itemMargin] | Item margin | number | 10 |
| [pauseOnHover] | Pause when hover | boolean | false |
| [loop] | Is looping | boolean | false |
| [autoplay] | Auto play | boolean | false |
| [showDots] | Show dots | boolean | false |
| [showNext] | Show next button | boolean | false |
| [showPrevious] | Show previous button | boolean | false |
| [textColor] | Text color | string | 'black' |
| [textPosition] | Text position | `'centered-top' | 'centered-bottom' | 'centered' | 'bottom-right ' | 'top-right' | 'top-left' | 'bottom-left'` | 'centered' |
| [items] | Items | Array<Item> | [] |
| `(select)` | Event fire when select item and return item | Item | null |

## 🔗 Links

* [NPM](https://www.npmjs.com/package/ngx-smart-slider)
* [Website](http://www.shadynagy.com)
* [LinkedIn](https://www.linkedin.com/in/shadynagy)
* [Twitter](https://twitter.com/ShadyNagy_)

## ⌨️ Development

```bash
$ git clone git@github.com:ShadyNagy/ngx-smart-slider.git
$ cd ngx-smart-slider
$ npm install
$ npm run start
```

## 🤝 Contributing

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/shadynagy/ngx-smart-slider/pulls)

We welcome all contributions. Please read our [CONTRIBUTING.md](https://github.com/shadynagy/ngx-smart-slider/blob/master/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/shadynagy/ngx-smart-slider/pulls) or as [GitHub issues](https://github.com/shadynagy/ngx-smart-slider/issues).

## 🎉 Users

- [ShadyNagy](http://www.shadynagy.com/)

> We list some users here, if your company or product uses ngx-smart-slider, let us know [here](https://github.com/shadynagy/ngx-smart-slider/issues/1)!
