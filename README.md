![npm](https://img.shields.io/npm/v/@wabosh/navigation-loader)
![NPM](https://img.shields.io/npm/l/@wabosh/navigation-loader)
![GitHub last commit](https://img.shields.io/github/last-commit/wabosh/navigation-loader)
![npm bundle size](https://img.shields.io/bundlephobia/min/@wabosh/navigation-loader@latest)

# Navigation Loader

A simple-to-use navigation loading indicator.
It uses navigation state to display loading (with unknown duration) with a customizable fixed loading bar at the top of the page.
Currently tested with `goto(...)` as well as `<a href="...">...</a>` navigation.

## Install

```
npm install --save-dev @wabosh/navigation-loader
```

## Usage

Simply put it at the start of your `+layout.svelte`.

```svelte
<!-- +layout.svelte -->
<script>
    import {NavigationLoader} from "@wabosh/navigation-loader";
</script>

<NavigationLoader animationDuration={250} color="#7fffd4" />

<slot />
```
