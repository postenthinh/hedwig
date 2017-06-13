## Card-nav

Used on the home page

```code
[Base]           .hw-card-nav-nav
```

### Regular card

```html|span-3
  <a href="#" class="hw-card-nav">
    <div class="hw-block hw-block--mt-large hw-block--mb-large">
      <h2 class="hw-card-nav__title">Sende</h2>
      <hr class="hw-hr hw-hr--centered" />
      <p class="hw-card-nav__text">
        Finn riktig tjeneste og bestill
      </p>
    </div>
  </a>
```

### Cards in grid

```html|span-6
  <div class="hw-grid">
    <div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-nav">
        <div class="hw-block hw-block--mt-large hw-block--mb-large">
          <h2 class="hw-card-nav__title">Sende</h2>
          <hr class="hw-hr hw-hr--centered" />
          <p class="hw-card-nav__text">
            Finn riktig tjeneste og bestill
          </p>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-nav">
        <div class="hw-block hw-block--mt-large hw-block--mb-large">
          <h2 class="hw-card-nav__title">Motta</h2>
          <hr class="hw-hr hw-hr--centered" />
          <div class="hw-card-nav__text">
            Adresseendring og mottakkertjenester.
          </div>
        </div>
      </a>
    </div><!--
 --><div class="hw-grid__item hw-medium--one-half hw-large--one-third">
      <a href="#" class="hw-card-nav">
        <div class="hw-block hw-block--mt-large hw-block--mb-large">
          <h2 class="hw-card-nav__title">Mer om</h2>
          <hr class="hw-hr hw-hr--centered" />
          <div class="hw-card-nav__text">
            Netthandel, kundedialog, adresser, transport, lagring og mer.
          </div>
        </div>
      </a>
    </div>
  </div>
```