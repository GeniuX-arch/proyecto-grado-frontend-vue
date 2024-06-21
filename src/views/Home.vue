
<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      draggable="true"
      @dragstart="dragStart($event, item)"
      @dragover.prevent
      @drop="drop($event, item)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
]);

const dragStart = (event, item) => {
  // Lógica al comenzar a arrastrar
  console.log('Comenzando a arrastrar:', item);
  // Agregar el id del elemento arrastrado al evento de transferencia de datos
  event.dataTransfer.setData('text/plain', item.id.toString());
};

const drop = (event, item) => {
  // Lógica al soltar el elemento
  console.log('Soltando elemento:', item);
  // Prevenir el comportamiento predeterminado para evitar navegación del navegador
  event.preventDefault();
  
  // Obtener el id del elemento arrastrado desde los datos transferidos
  const id = event.dataTransfer.getData('text/plain');
  console.log('Elemento ID:', id);
  
  // Realizar cualquier lógica adicional según sea necesario
};
</script>
