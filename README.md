# Navigation Loader

A simple-to-use navigation loading indicator.

## Install

```
npm install --save @wabosh/navigation-loader
```

## Usage

Simply put it at the start of your `+layout.svelte`.

```svelte
<!-- +layout.svelte -->
<script>
    import {NavigationLoader} from "@wabosh/navigation-loader";
</script>

<NavigationLoader animationDuration={250} color="#7fffd4">

<slot />
```
