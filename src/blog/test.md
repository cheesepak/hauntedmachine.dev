---
title: 'Styles Test'
pubDate: 2026-09-19
description: 'Test post to display all styles and elements.'
author: 'Haunted Machine'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
tags: ["test", "styles", "astro", "web"]
---
# Styles Test Page

`Lorem ipsum` dolor sit amet, *consectetur adipiscing elit*, sed do eiusmod tempor ~~incididunt ut labore~~ et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea **commodo consequat**. 

## Heading 2

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

### Heading 3

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

#### Heading 4

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

##### Heading 5

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

###### Heading 6

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 

## Quotes

> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> Duplicate ID `color`
>
> <code>&lt;div>↩    <mark>&lt;input type="radio" id="color" name="color" value="blue"></mark>↩</code>
>
> The first occurrence of ID `color` was here
>
> <code>&lt;div>↩    <mark>&lt;input type="radio" id="color" name="color" value="red"></mark>↩</code>

## Lists
### Short Lists

- One
- Two
  - Two point one
  - Two point two
    - Two point two point one
  - Two point three
- Three
- Four

1. Numbered One
2. Numbered Two
   1. Two point one
   2. Two point two
   3. Two point three
3. ???
4. Profit

### Long lists

- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
- Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
- Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
- Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Code Stuff

```html
<header>
  <h1>Style test</h1>
  <div class="post-meta">
    <span class="date"><span class="sr-only">Written on </span>03 February 2001</span>
    <span class="time-estimate">

      1 min read
    </span>
    <span class="tags"><span class="sr-only">Topics covered </span></span>
  </div>
</header>
```

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```js
document.addEventListener('DOMContentLoaded', function() {
  var html = document.querySelector('html');
  var input = document.querySelector('.dark-mode-switch-input');
  var label = document.querySelector('.dark-mode-switch-label');
  var savedMode = window.localStorage.getItem('dark');

  if (savedMode === 'true') {
    toggleMode();
  }

  function toggleMode() {
    if (html.hasAttribute('data-dark')) {
      html.removeAttribute('data-dark');
      label.innerHTML = '<span class=\"sr-only\">Dark mode </span>☀️'
      window.localStorage.setItem('dark', 'false')
    } else {
      html.setAttribute('data-dark', 'true');
      label.innerHTML = '<span class=\"sr-only\">Dark mode </span>🌘️'
      window.localStorage.setItem('dark', 'true')
    }
  }

  input.addEventListener('click', toggleMode);
});
```

very long lines

```html
<header>
  <h1>Style test</h1>
  <div class="post-meta"><span class="date"><span class="sr-only">Written on </span>03 February 2001</span><span class="time-estimate">1 min read</span><span class="tags"><span class="sr-only">Topics covered </span></span></div>
</header>
```
```ts diff
console.log('foo') // [!code --]
console.log('bar') // [!code --]
console.log('hello') // [!code ++]
console.log('world') // [!code ++]
console.log('!')
```

## Keyboard shortcuts

Odit quibusdam tempore deserunt. Sapiente magni amet alias nostrum et maiores. Dolorum deleniti dolore fugiat dolorem quis.
 Press this: <kbd>Ctrl</kbd>+<kbd>a</kbd>, <kbd>c</kbd>. Or maybe this: <kbd>Ctrl</kbd>+<kbd>d</kbd>, <kbd>f</kbd>. Odit quibusdam tempore deserunt. Sapiente magni amet alias nostrum et maiores. Dolorum deleniti dolore fugiat dolorem quis.

## Tables

| Action | Emacs&nbsp;mode | Vi&nbsp;mode |
|:-------|:---------------:|:------------:|
| Character under the cursor | Ctrl&nbsp;+&nbsp;d | x |
| Character before the cursor | Ctrl&nbsp;+&nbsp;h | X |
| From the current position to the beginning of the line | Ctrl&nbsp;+&nbsp;u |d0|
| From the current position to the end of the line | Ctrl&nbsp;+&nbsp;k | D |
| Line | Ctrl&nbsp;+&nbsp;e, then Ctrl&nbsp;+&nbsp;u | dd |
| From the current position to the beginning of the word | Ctrl&nbsp;+&nbsp;w | db |
| From the current position to the end of the word | Alt&nbsp;+&nbsp;d&nbsp;[(*)](#alt-key) | dw |
| Word around current position | Alt&nbsp;+&nbsp;b, then Alt&nbsp;+&nbsp;d&nbsp;[(*)](#alt-key) | bdw |

| Hello | World |
| ----- |-------|
| :)    | (:    |

Very long table with scroll shadows

| Foobar                         | Foobar                         | Foobar                       | Foobar                             | Foobar                | Foobar    |
|--------------------------------|--------------------------------|------------------------------|------------------------------------|-----------------------|-----------|
| Pseudopseudohypoparathyroidism | Floccinaucinihilipilification  | Antidisestablishmentarianism | Supercalifragilisticexpialidocious | Incomprehensibilities | Strengths |
| Foobar                         | Foobar                         | Foobar                       | Foobar                             | Foobar                | Foobar    |
| Foobar                         | Foobar                         | Foobar                       | Foobar                             | Foobar                | Foobar    |