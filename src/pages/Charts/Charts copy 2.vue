<template>
  <b-container id="app" class="my-4">
    <d-stepper :steps="steps" :initial-state="{ name: 'Carlos', users: [] }">
      <template #fatal-error="{ errorMsg }">{{ errorMsg }}</template>
    </d-stepper>
  </b-container>
</template>

<script>
import DStepper from "./pages/DStepper";
import Paso1 from "./pages/Paso1";
import Paso2 from "./pages/Paso2";
import Paso3 from "./pages/Paso3";

export default {
  name: "Step",
  components: {
    DStepper
  },
  data() {
    return {
      steps: [
        {
          name: "Ingresar datos del Auto",
          desc:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
          icon: "fas fa-car",
          disabled: false,
          active: true,
          component: Paso1
        },
        {
          name: "Paso 2",
          desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          disabled: false,
          active: false,
          component: Paso2
        },
        {
          name: "Confirmar",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: "fas fa-check",
          disabled: false,
          active: false,
          component: Paso3,
          confirm: "Enviar formluario"
        }
      ]
    };
  }
};
</script>

<style>
</style>
