  
  <template>
  <div
    class="draggable"
    draggable="true"
    @dragstart="dragStart"
    @dragend="dragEnd"
  >
    {{ dia }} - {{ horaInicio }} - {{ horaFin }}
  </div>
</template>

<script>
export default {
  props: {
    dia: {
      type: String,
      required: true
    },
    horaInicio: {
      type: String,
      required: true
    },
    horaFin: {
      type: String,
      required: true
    }
  },
  methods: {
    dragStart(event) {
      const dragData = {
        dia: this.dia,
        horaInicio: this.horaInicio,
        horaFin: this.horaFin,
      };
      event.dataTransfer.setData('dragData', JSON.stringify(dragData));
    },
    dragEnd(event) {
      // Aquí puedes realizar acciones después de que se ha completado el drag
    }
  }
};
</script>

<style scoped>
.draggable {
  color: black;
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  cursor: move;
}
</style>