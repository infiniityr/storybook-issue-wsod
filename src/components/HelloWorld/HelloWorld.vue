<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('@/assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ text }}
        </h1>

        <p class="subheading font-weight-regular">
          Bienvenue dans le Template d'un projet front.
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
