{navigation}





> The buttons can be used either as `<button>`-tags or `<a>`-tags as needed


### Markup
```code   
[Base]              .hw-button
  
Modifiers:
[Large]             .hw-button--large
[Small]             .hw-button--small
[Medium]            .hw-button--medium
[Full]              .hw-button--full
[Responsive]        .hw-button--mobile-full   // Full size on mobile, default size on desktop
    
Colors    
[Primary]           .hw-button--primary
[Secondary]         .hw-button--secondary
    
[Outline]           .hw-button--outline
[Outline white]     .hw-button--outline-white
[Outline dark]      .hw-button--outline-dark
```




### Sizes

#### Small
```html|span-3,plain,light
  <button class="hw-button hw-button--primary hw-button--small">
    Small button
  </button>
```

#### Medium
```html|span-3,plain,light
  <button class="hw-button hw-button--primary hw-button--medium">
    Medium button
  </button> 
```

#### Large
```html|span-3,plain,light
  <button class="hw-button hw-button--primary hw-button--large">
    Large button
  </button>
```

#### Full
```html|span-3,plain,light
  <button class="hw-button hw-button--primary hw-button--full">
    Full button
  </button>
```

#### Responsive (full on mobiile)
```html|span-3,plain,light
  <button class="hw-button hw-button--primary hw-button--mobile-full">
    Responsive (full on mobile)
  </button>
```





### Default colors

```html|span-6,plain,light
  <button class="hw-button hw-button--medium hw-button--primary">
    Primary button
  </button> 
  <button class="hw-button hw-button--medium hw-button--secondary">
    Secondary button
  </button>
  <button class="hw-button hw-button--medium hw-button--primary" disabled>
    Disabled button
  </button>
```

### Outlined button primary

```html|span-6,plain,light
  <button class="hw-button hw-button--outline-primary">
    Primary button
  </button>
  <button class="hw-button hw-button--outline-primary" disabled>
    Disabled
  </button>
```

### Outlined button secondary

```html|span-6,plain,light
  <button class="hw-button hw-button--outline-secondary">
    Secondary button
  </button>
  <button class="hw-button hw-button--outline-secondary" disabled>
    Disabled
  </button>
```

### Outlined button light

```html|span-6,plain,dark
  <button class="hw-button hw-button--outline-white">
    Primary button
  </button>
  <button class="hw-button hw-button--outline-white" disabled>
    Disabled
  </button>
```

### Button with icon

```html|span-6,plain,light
  <button class="hw-button hw-button--primary hw-button--small">
    <i class="fas fa-globe"></i>Small button
  </button>
  <button class="hw-button hw-button--primary hw-button--medium">
    <i class="fas fa-globe"></i>Medium button
  </button>
  <button class="hw-button hw-button--primary hw-button--large">
    <i class="fas fa-globe"></i>Large button
  </button>
```

### Chat button

```html|span-6,plain,light
  <button class="hw-button hw-button--chat">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
  <button class="hw-button hw-button--chat-fixed">
    <i class="fas fa-2x fa-comments-alt" title="Chat button"></i>
  </button>
```

```code
[chat]        .hw-button--chat
[chat-fixed]  .hw-button--chat-fixed (Preview is in the bottom-right corner of this page)
```















# Design guidelines

> Buttons are a key part of {Brand}’s call-to-action navigation. The {color} colours guide customers to the core {Brand} call-to-action items.


### Button types
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-1-1.png"
title: "Primary button – Solid"
description: "Primary buttons should be used for all primary call-to-actions and main interactions, e.g. confirmations, in our services."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-1-2.png"
title: "Primary button – Outline"
description: "In case of multiple click options, we should use the solid button for the main option, and then the outlined version for the other option(s)."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-1-3.png"
title: "Secondary button – Solid"
description: "For secondary services, e.g. information cards in the sidebar or supplementary search in the sidebar, we should use the secondary button."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-1-4.png"
title: "Secondary button – Outline"
description: "In case of multiple click options, we should use the solid button for the main option, and then the outlined version for the other option(s)."
```


### Button sizes
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-2-1.png"
title: "Large"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-2-2.png"
title: "Medium"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-2-3.png"
title: "Small"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/buttons-2-4.png"
title: "Full (Responsive)"
```




## Best practices

#### Do this

```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-do-1.png"
description: "Do use a solid button for main option, and outlined buttons for other options."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-do-2.png"
description: "Describe the action for each button short and clearly."
```

#### Do not do this
  
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-dont-1.png"
description: "Don’t use multiple solid buttons together."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-dont-2.png"
description: "Don’t use multiple solid buttons together."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-dont-3.png"
description: "Don’t use outline button for main option."
```
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-dont-4.png"
description: "Don’t stack buttons on top of each other if there is space to place them side by side."
```

{bring}
```image
plain: true
span: 2
src: "{assets}/img/{postenbring}/buttons-dont-5.png"
description: "Do not use white text in primary buttons, as the contrast do not validate."
```
{/bring}

