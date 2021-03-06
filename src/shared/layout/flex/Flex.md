# Flex

Flexible grid with 3px gutters

```code
[Flex]                      .hw-flex
[Twos]                      .hw-flex--twos                     - Wraps after two items
[Thirds]                    .hw-flex--thirds                   - Wraps after three items
[Fourths]                   .hw-flex--fourths                  - Wraps after four items
[Medium gutter desktop]     .hw-flex--gutter-medium-desktop    - Gives a medium margin between elements on desktop
[Large gutter desktop]      .hw-flex--gutter-large-desktop     - Gives a large margin between elements on desktop
[Larger gutter desktop]     .hw-flex--gutter-larger-desktop    - Gives a larger margin between elements on desktop
[Largest gutter desktop]    .hw-flex--gutter-largest-desktop   - Gives an even larger margin between elements on desktop
[Large gutter mobile]       .hw-flex--gutter-large-mobile      - Gives a large margin between elements on mobile
[Larger gutter mobile]      .hw-flex--gutter-larger-mobile     - Gives a larger margin between elements on mobile
[Largest gutter mobile]     .hw-flex--gutter-largest-mobile    - Gives an even larger margin between elements on mobile
[Variable height]           .hw-flex--variable-height          - Don't force same height for items in flex
```

## Example

```html|plain,light
<div class="hw-flex">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Variable height

```html|plain,light
<div class="hw-flex hw-flex--variable-height">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```


## Example with large gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```


## Example with large gutter mobile

```html|plain,light,responsive
<div class="hw-flex hw-flex--gutter-large-mobile hw-background-color-white">
  <a href="#" class="hw-entrance-box">
    <div class="hw-entrance-box__media">
      <div class="hw-entrance-box__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-entrance-box__body">
      <div>
        <h3 class="hw-entrance-box__label">Box Label</h3>
      </div>
      <div class="hw-entrance-box__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
  <a href="#" class="hw-entrance-box">
    <div class="hw-entrance-box__media">
      <div class="hw-entrance-box__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-entrance-box__body">
      <div>
        <h3 class="hw-entrance-box__label">Box Label</h3>
      </div>
      <div class="hw-entrance-box__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
</div>
```


## Example with larger gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--gutter-larger-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with larger gutter mobile

```html|plain,light,responsive
<div class="hw-flex hw-flex--gutter-larger-mobile hw-background-color-white">
  <a href="#" class="hw-entrance-box">
    <div class="hw-entrance-box__media">
      <div class="hw-entrance-box__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-entrance-box__body">
      <div>
        <h3 class="hw-entrance-box__label">Box Label</h3>
      </div>
      <div class="hw-entrance-box__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
  <a href="#" class="hw-entrance-box">
    <div class="hw-entrance-box__media">
      <div class="hw-entrance-box__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-entrance-box__body">
      <div>
        <h3 class="hw-entrance-box__label">Box Label</h3>
      </div>
      <div class="hw-entrance-box__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
      </div>
    </div>
  </a>
</div>
```
## Example with fourths (1 left over)

```html|plain,light
<div class="hw-flex hw-flex--fourths">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with fourths (2 left over)

```html|plain,light
<div class="hw-flex hw-flex--fourths">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```
## Example with fourths (3 left over)

```html|plain,light
<div class="hw-flex hw-flex--fourths">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```
## Example with fourths (4/0 left over)

```html|plain,light
<div class="hw-flex hw-flex--fourths">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds

```html|plain,light
<div class="hw-flex hw-flex--thirds">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with twos

```html|plain,light
<div class="hw-flex hw-flex--twos">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with two-one

```html
<div class="hw-flex hw-flex--two-one">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with one-two

```html
<div class="hw-flex hw-flex--one-two">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with twos and large gutter desktop
```html|plain,light
<div class="hw-flex hw-flex--twos hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with twos and larger gutter desktop
```html|plain,light
<div class="hw-flex hw-flex--twos hw-flex--gutter-larger-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with one-two and larger gutter desktop

```html
<div class="hw-flex hw-flex--one-two hw-flex--gutter-larger-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with two-one and larger gutter desktop

```html
<div class="hw-flex hw-flex--two-one hw-flex--gutter-larger-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with one-two and large gutter desktop

```html
<div class="hw-flex hw-flex--one-two hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with two-one and large gutter desktop

```html
<div class="hw-flex hw-flex--two-one hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds and large gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--thirds hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with fourths and large gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--fourths hw-flex--gutter-large-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>

```
## Example with twos and medium gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--twos hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```
## Example with one-two and medium gutter desktop

```html
<div class="hw-flex hw-flex--one-two hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with two-one and medium gutter desktop

```html
<div class="hw-flex hw-flex--two-one hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with thirds and medium gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--thirds hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>
```

## Example with fourths and medium gutter desktop

```html|plain,light
<div class="hw-flex hw-flex--fourths hw-flex--gutter-medium-desktop">
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link with so much text that it gets two lines</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
  <div class="hw-block hw-background-color-white">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      <h4>A link</h4>
    </a>
  </div>
</div>

```


### Default flex with cards

```html|plain,light
  <div class="hw-flex">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
  </div>
```

### Large gutter on desktop with wrap after three items

```html|plain,light,span-6
  <div class="hw-flex hw-flex--gutter-large-desktop hw-flex--thirds">
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
      <a href="#" class="hw-card">
        <div class="hw-card__media">
          <div class="hw-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
        </div>
        <div class="hw-card__body">
          <h3 class="hw-card__title">Card Title</h3>
          <hr class="hw-hr" />
          <div class="hw-card__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora.
          </div>
        </div>
      </a>
  </div>
```
