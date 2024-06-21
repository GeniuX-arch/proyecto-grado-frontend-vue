
<template>
  <div class="h-full bg-black">
    <table class="h-full  bg-black ">
      <thead>
        <td></td>
        <td v-for="(dia, index) in semanas" :key="'dia-' + index">{{ dia }}</td>
      </thead>
      <tbody>
      <tr v-for="hora in horas" :key="hora">
        <td>{{ hora }}</td>
        <td v-for="semana in semanas" :key="'hora-' + semana">
          <Drop
            :dia="semana"
            :hora="hora"
            @dropped-item="handleDroppedItem"
            @dia-request="handleDiaRequest"
            @hora-request="handleHoraRequest"
            :drag="filteredClases(semana, hora)"
          />
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
import Drag from '../components/Drag.vue';
import Drop from '../components/Drop.vue';

const horas = [
  '06:00', '06:45', '07:30', '08:15', '09:00', '09:45', '10:30',
  '11:15', '12:00', '12:45', '13:30', '14:15', '15:00', '15:45',
  '16:30', '17:15', '18:00', '18:45', '19:30', '20:15', '21:00'
];

const semanas = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

interface Horario {
  id: number;
  dia: string;
  horaInicio: string;
  horaFin: string;
}
let indexu=0;
const listadoClases = reactive<Horario[]>([
  { id: 1, dia: 'Lunes', horaInicio: '06:00', horaFin: '06:45' },
  { id: 2, dia: 'Lunes', horaInicio: '06:45', horaFin: '07:30' },
  { id: 3, dia: 'Lunes', horaInicio: '07:30', horaFin: '08:15' },
  { id: 4, dia: 'Lunes', horaInicio: '08:15', horaFin: '09:00' },
  { id: 5, dia: 'Lunes', horaInicio: '09:00', horaFin: '09:45' },
  { id: 6, dia: 'Lunes', horaInicio: '06:00', horaFin: '06:45' },
]);


const handleDroppedItem = async (item: Horario) => {
  console.log('Item dropeado:', item);
  // Aquí puedes actualizar un objeto específico en el array
 const index = listadoClases.findIndex(clase => clase.id === item.id);
  if (index !== -1) {
    listadoClases[index] = { ...listadoClases[index], ...item };
  }
    indexu =index;

};



const handleDiaRequest = async (dia: string) => {
  console.log('Solicitud de datos del prop dia:', dia);
   await new Promise(resolve => setTimeout(resolve, 20));
  listadoClases[indexu].dia = dia
};

const handleHoraRequest = async (hora: string) => {
  console.log('Solicitud de datos del prop hora:', hora);
   await new Promise(resolve => setTimeout(resolve, 20));
  listadoClases[indexu].horaInicio = hora
};

const filteredClases = computed(() => {
  return (dia: string, horaI: string) => {
    return listadoClases.filter(clase => clase.dia === dia && clase.horaInicio === horaI);
  };
});
</script>

<style>
table {
}
</style>
