<template>
<div id="app">
    <v-app>
        <v-container>
            <h1 class="mb-0"></h1>
            <div class="overline mb-4">Colored status, error icons &amp; completion</div>
            <v-stepper v-model="curr" color="green">
                <v-stepper-header class="overflow-x-auto">
                    <v-stepper-step 
                        v-for="(step,n) in steps"
                        :key="n"
                        :complete="stepComplete(n+1)"
                        :step="n+1"
                        :rules="[value => !!step.valid]" 
                        :color="stepStatus(n+1)">
                        {{ step.name }}
                    </v-stepper-step>
                </v-stepper-header>
                <v-stepper-content v-for="(step,n) in steps" :step="n+1" :key="n">
                    {{ step.name }}
                    <v-card color="grey lighten-1" class="mb-12" height="200px">
                        <v-card-text>
                            <v-form :ref="'stepForm'" v-model="step.valid" lazy-validation>
                                <v-text-field label="Download File dari Shipper...." :rules="step.rules"></v-text-field>
                            </v-form>
                        </v-card-text>
                    </v-card>
                    <v-btn v-if="n+1 < lastStep" color="primary" @click="validate(n)" :disabled="!step.valid">Continue</v-btn>
                    <v-btn v-else color="success" @click="done()">Done</v-btn>
                    <v-btn text @click="curr = n">Back</v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-container>
<v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="6"
        sm="3"
      >
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="6"
        sm="3"
      >
        <v-select
          :items="items"
          filled
          label="Filled style"
        ></v-select>
      </v-col>


    </v-row>
  </v-container>
    </v-app>
</div>


</template>






<script>
                export default {
              //  vuetify: new Vuetify(),
    data: () => ({
        curr: 1,
        lastStep: 5,
        steps: [
            {name: "Informasi Dasar", rules: [v => !!v || "Required."], valid: true},
            {name: "Kebutuhan Pengiriman", rules: [v=> !!v || "Required."], valid: true},
            {name: "Korespondensasi Sales", rules: [v=> !!v || "Required."], valid: true},            
            {name: "Review Quotation", rules: [v => (v && v.length >= 5) || "Enter at least 4 characters."], valid: true},
            {name: "Upload Document"},
        ],
        valid: false,
        stepForm: []
    }),
    methods: {
        stepComplete(step) {
            return this.curr > step
        },
        stepStatus(step) {
            return this.curr > step ? 'green' : 'blue'
        },
        validate(n) {
            this.steps[n].valid = false
            let v = this.$refs.stepForm[n].validate()
            if (v) {
                this.steps[n].valid = true
                // continue to next
                this.curr = n+2
            }
        },
        done() {
            this.curr = 5
        }
    },
                 
                }
                
</script>
<style src="./Stepper.scss" lang="scss"/>