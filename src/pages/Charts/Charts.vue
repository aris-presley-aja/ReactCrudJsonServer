<template>
  <v-row height="90%" justify="center">
    <v-dialog
      v-model="dialog"
            centered
            max-width="50%"
            height="70%"
      
    >

      <template v-slot:activator="{ on, attrs }">
          <br>
    <br>
    <br>
        <v-btn
          color="orange darken-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Tampilkan Modal
        </v-btn>
      </template>
      <v-card centered >
        <v-card-title>

          <span color="2e383f" centered class="text-h5">Judul Modal</span>

        </v-card-title>
        <v-card-text>
          <v-container>
     <v-img
          :src="require('@/assets/ico-koresponden-pic-xhdpi.png')"
          class="my-6"
          centered
          contain
          height="100px"
        />
          </v-container>
          <!-- <small>*indicates required field</small> -->
        </v-card-text>
        <!--  -->
     <v-card
      elevation="0"
  center
  max-width="100%"
  height="200px"
  color="#fefefe"
    >

             <v-card-text>
         <medium>
           <p class="text-center">
           Silakan Hubungi Sales In Charge khusus untuk Anda dengan menghubungi
Andi (085719785432)
atau kirim email ke
andi@on-trucks.com</p>
         </medium>
       </v-card-text>
       <v-card-text>
         <medium>
           <p class="text-left">
Silakan Hubungi Sales In Charge khusus untuk Anda dengan menghubungi
Andi (085719785432)
atau kirim email ke
andi@on-trucks.com
           </p>
         </medium>

      </v-card-text>
    </v-card>
        <!--  -->

       <v-card-actions>
          <v-spacer></v-spacer>
                 <v-card-text>
         <medium>
           <p class="text-center">
         <v-row
    align="center"
    justify="space-around"
  >
            <v-btn
            color="warning"
            tile
            @click="dialog = false"
          >
      <v-icon 
      color="orange darken-2"
      center>
        OK
      </v-icon>
            
          </v-btn>
  </v-row>
      </p>
          </medium>
            </v-card-text>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
<!--  -->


<!--  -->
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>
