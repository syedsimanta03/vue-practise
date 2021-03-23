<template>
  <base-card>
  <base-button @click="setSelectedTab('stored-resource')" :mode="storedResButtonMode">Stored Resource</base-button>
  <!-- need to bind props bcox itx dynamic calculated value stored or coming from logic/jason -->
  <base-button @click="setSelectedTab('add-resource')" :mode="storedAddButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResource from './StoredResource'
import AddResource from './AddResource'

export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      selectedTab: 'stored-resource',
      storedResources: [
        {
          id: new Date().toISOString,
          title: 'Official Vue Guide',
          description: 'The Vue.js documentation guide',
          link: 'https://vuejs.org',
        },
        {
          id: new Date().toISOString,
          title: 'Official Google Guide',
          description: 'The google documentation guide',
          link: 'https://google.com',
        },
      ],
    }
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    }
  },
/*computed doesn't accept any parameters */
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? 'btn': 'flat'
    },
    storedAddButtonMode() {
      return this.selectedTab === 'add-resource' ? 'btn': 'flat'
    }
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resource'
    },

    removeResource(resID) {
      const resIndex = this.storedResources.findIndex(res => res.id !== resID)
      this.storedResources.splice(resIndex, 1)
    }

  }
}
</script>