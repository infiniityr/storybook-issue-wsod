
Documentation du composant `HelloWorld`.

Voici un exemple d'utilisation du composant avec le store.

```html
<template>
    <hello-world :text="getUpperHello"></hello-world>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapActions(['initializeHello']),
        ...mapGetters(['getUpperHello'])
    },
    mounted: function () {
        this.initializeHello()
    }
}
</script>
```