# CSS Variables

[See in action](https://rosnovsky.github.io/css-variables/)

Future improvements include:
- Stable Safari compatibility, including color picker

## My favorite features

CSS variables

```CSS
:root {
  --scale: 1;
  --color: #2b782b;
  --blur: 0px;
}

img {
    transform: scale(var(--scale));
    filter: blur(var(--blur));
  }
```

A way to dynamically change CSS variables values using Javascript:

```javascript
  document.documentElement.style.setProperty(`--${this.name}`, this.value + `${suffix}`);
```

>This simple variables trick was inspired by @wesbos and his [#Javascript30](http://javascript30.com) challenge.
