<template>
  <!-- Tabs navs -->
  <ul class="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
    <li v-for="(tabItem,index) in viewData.tabList" class="nav-item" role="presentation">
      <a :class="`nav-link ${(tabItem.active)?'active':''}`"
         :id="`ex1-tabs-${index}`"
         :href="`#ex1-tabs-${index}`"
         :aria-controls="`ex1-tabs-${index}`"
         data-mdb-toggle="tab"
         role="tab"
         aria-selected="true"
         @click="onClickTab(tabItem)">
        {{ tabItem.name }}
      </a>
    </li>
  </ul>
</template>

<script setup lang='ts'>
import {reactive} from "vue";

type tabItem = {
  id: string,
  name: string,
  active: boolean
}

const emit = defineEmits<{
  onClickTab: [id: string]
}>()

const viewData = reactive({
  tabList: [
    {id: 'tab1', name: 'All', active: true},
    {id: 'tab2', name: 'Active', active: false},
    {id: 'tab3', name: 'Completed', active: false}
  ]
})

const onClickTab = (tItem: tabItem) => {
  viewData.tabList.forEach((item) => {
    item.active = (item.id == tItem.id)
  })
  emit('onClickTab', tItem.id)
}

</script>

<style></style>