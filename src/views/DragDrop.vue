
<template>

  <div class="bg-black text-black">hola</div>
</template>
<!--
<template>
  <div class="drag-container">
    <div v-for="(container, index) in containers" :key="index" class="container">
      <h3>{{ container.name }}</h3>
      <draggable
        v-model="container.items"
        group="cards"
        :animation="200"
        @end="onEnd"
      >
        <template #item="{ element }">
          <div class="draggable-item">
            {{ element.text }}
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import draggable  from 'vuedraggable';

interface Item {
  id: number;
  text: string;
}

interface Container {
  name: string;
  items: Item[];
}

const containers = ref<Container[]>([
  {
    name: 'Container 1',
    items: [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' }
    ]
  },
  {
    name: 'Container 2',
    items: [
      { id: 3, text: 'Item 3' },
      { id: 4, text: 'Item 4' }
    ]
  }
]);




const onEnd = (event: any) => {
    console.log('Drag ended', event);

  // Acceder a la información relevante del evento
  const { newIndex, newDraggableIndex } = event; //propiedad newIndex no existe

  // Ejemplo de cómo acceder a los índices
  console.log('Nuevo índice:', newIndex);
  console.log('Índice del elemento arrastrado:', newDraggableIndex);

  // Acceder al elemento específico que fue soltado
  const droppedElement = containers.value[newDraggableIndex].items[newIndex];
  console.log('Elemento soltado:', droppedElement);
 
};
</script>

<style scoped>
*{
  color:black;
}
.drag-container {
  display: flex;
  gap: 20px;
}

.container {
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  background-color: #f9f9f9;
}

.draggable-item {
  padding: 10px;
  margin: 5px 0;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  cursor: move;
}
</style>
-->