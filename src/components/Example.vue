<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <vue-tel-input-vuetify
          :preferred-countries="['us', 'uk']"
          :valid-characters-only="true"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
};
</script>
