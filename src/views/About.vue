
<template>
  <div id="app">
    <draggable v-for="item in items" :key="item.id" :item="item"></draggable>
    <droppable dia="lunes" hora="1"  @dropped-item="handleDroppedItem" @dia-request="handleDiaRequest" @hora-request="handleHoraRequest" ></droppable>
    <droppable dia="martes" hora="2"  @dropped-item="handleDroppedItem" @dia-request="handleDiaRequest" @hora-request="handleHoraRequest" ></droppable>
  </div>
</template>

<script>
import Draggable from '../components/Drag.vue';
import Droppable from '../components/Drop.vue';

export default {
  components: {
    Draggable,
    Droppable
  },
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
      ],
      droppedItem: null,
      currentDia: null,
      currentHora: null
    };
  },
    methods: {
    
       handleDroppedItem(droppedItem) {
      // Manejar los datos del item dropeado
      console.log('Item dropeado:', droppedItem);
      this.droppedItem =droppedItem
    },
    handleDiaRequest(currentDia) {
      // Manejar la solicitud de datos del prop dia
      console.log('Solicitud de datos del prop dia:', currentDia);
      this.currentDia =currentDia
      // Aquí podrías realizar alguna acción específica si lo deseas
    },
    handleHoraRequest(currentHora) {
      // Manejar la solicitud de datos del prop hora
      this.currentHora =currentHora
      console.log('Solicitud de datos del prop hora:', currentHora);
      // Aquí podrías realizar alguna acción específica si lo deseas
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
