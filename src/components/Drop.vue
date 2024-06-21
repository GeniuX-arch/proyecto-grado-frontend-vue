
<template>
  <div
    class="droppable"
    @dragover.prevent
    @drop="drop"
  >
    Drop here
    <div
      class="draggable"
      v-for="item in drag"
      :key="item.id"
      draggable="true"
      @dragstart="dragStart(item)"
      @dragend="dragEnd"
    >
      {{ item.name }}
      <!-- Aquí asegúrate de pasar todas las propiedades requeridas -->
      <Drag :item="item" :dia="dia" :horaInicio="item.horaInicio" :horaFin="item.horaFin"></Drag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import Drag from './Drag.vue';

class Horario {
  constructor(
    public id: number,
    public dia: string,
    public horaInicio: string,
    public horaFin: string
  ) {}
}

const props = defineProps({
  drag: Array as PropType<Horario[]>,
  dia: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(['dropped-item', 'dia-request', 'hora-request']);

const drop = (event: DragEvent) => {
  event.preventDefault();
  const droppedItemData = event.dataTransfer.getData('dragData');
  if (droppedItemData) {
    const droppedItemParsed = JSON.parse(droppedItemData);

    emits('dropped-item', droppedItemParsed);
    emits('dia-request', props.dia);
    emits('hora-request', props.hora);
  }
};

const dragStart = (item: Horario) => {
  event.dataTransfer.setData('dragData', JSON.stringify(item)); // Usar 'dragData' en lugar de 'item'
};

const dragEnd = () => {
  // Aquí puedes realizar acciones después de que se ha completado el drag
};
</script>

<style scoped>
.droppable {
  padding: 20px;
  margin: 10px;
  border: 2px dashed #aaa;
}

.draggable {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  cursor: move;
}
</style>
