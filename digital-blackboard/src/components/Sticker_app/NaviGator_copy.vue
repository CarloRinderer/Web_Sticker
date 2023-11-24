<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="#00a4e0" height="80" class="position-sticky">
      <v-app-bar-title>
        <h1 style="color: white; height: 40px">Funny1</h1>
      </v-app-bar-title>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <!-- Event Categories -->
      <v-container>
        <v-row>
          <v-col v-for="(category, index) in eventCategories" :key="index">
            <v-card @click="showEvents(category)" :color="category === selectedCategory ? '#00a4e0' : '#FFFFFF'">
              <v-card-title class="text-center" :class="category === selectedCategory ? 'text-h4' : 'text-h6'">
                {{ category }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Display Events -->
      <v-container>
        <v-row v-if="selectedCategory">
          <v-col v-for="(event, index) in getEventsByCategory(selectedCategory)" :key="index" md="4">
            <v-card>
              <v-img :src="event.image" height="200"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- Upload Button at the Bottom -->
    <v-container class="position-sticky">
      <v-row>
        <v-col>
          <v-file-input
              v-if="selectedCategory"
              label="Upload Image"
              v-model="uploadedImage"
              @change="handleImageUpload(selectedCategory)"
              accept="image/*"
              class="custom-file-input">
          </v-file-input>
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="position-sticky" @click="scrollToTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

const eventCategories = ref(['Bildmaterial', 'Sticker', 'Leaderboard']);
const events = ref([
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },
  { image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Deloitte_Deutschland_logo.svg", category: 'Sticker' },

  // ... (your other event objects)
]);

const selectedCategory = ref(null);
const uploadedImage = ref(null);

const showEvents = (category) => {
  selectedCategory.value = category === selectedCategory.value ? null : category;
};

const handleImageUpload = (category) => {
  const file = uploadedImage.value ? uploadedImage.value[0] : null;

  if (file) {
    const newEvent = {
      image: URL.createObjectURL(file),
      category: category,
    };
    events.value.push(newEvent);
  }
};

const getEventsByCategory = (category) => {
  return events.value.filter(event => event.category === category);
};
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style>
/* Additional Styles */
.position-sticky {
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 1000;
}
.custom-file-input {
  max-height: 72px;
}
</style>
