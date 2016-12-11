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

Simple video background using simple `<video autoplay loop id="video-background" muted>` tag and `background:url(videos/Ma-Vibes.mp4) bottom center;` with some more background styling and sizing.

>This simple JS/CSS Drumkit was inspired by @wesbos and his [#Javascript30](http://javascript30.com) challenge.
