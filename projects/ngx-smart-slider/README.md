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

![ngx-smart-slider](https://user-images.githubusercontent.com/6225593/91753134-bff8e300-ebc7-11ea-8da3-8c4b58ca3597.gif)

## ✨ Features

- Insert numbers only.
- Numbers with mask so it is can use as password.
- Period can use.
- Hide display if you want.
- Maximum length for input string.
- Maximum number can set.

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
<smart-slider [showPeriod]="true" [isPassword]="false" [(data)]="result"></smart-slider>
```

## Properties

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| [showDisplay] | Show Display or not | boolean | true |
| [showPeriod] | Show period button or not | boolean | true |
| [isPassword] | Write asterisk in the field | boolean | false |
| [maxLength] | Not allow more length than this max, null is unlimited | number | null |
| [maxNumber] | Not allow more number than this max, null is unlimited | number | null |
| [background] | Component background | string | '#ccc' |
| [width] | Component width can be for ex 400px | string | '100%' |
| [padding] | Component padding can be for ex 20px | string | '10px' |
| [(data)] | Data input and output | string | '' |

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

> We list some users here, if your company or product uses ngx-smart-slider, let us know [here](https://github.com/shadynagy/ngx-smart-slider/issues/8)!
