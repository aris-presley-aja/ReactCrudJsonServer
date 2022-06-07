<template>
  <v-container fluid>
        <h1 class="tabletas"></h1>
<!--  -->
<v-card
width="100%"
height="10%"
>
                <!-- <v-card-title class="pa-3 pb-2">
              <p></p>
              <v-spacer></v-spacer>

            </v-card-title> -->
            
                        <v-card-title width="70%" class="pa-16">
                   <v-img
                                      max-height="200px" 
                   max-width="200px"
                   class="ml-left my-2"
          :src="require('@/assets/package-2.png')"
          top="50%"
          
          contain
          height="120"
        />
        
<v-list-item-content>
  
          <v-list-item-title class="">Shipper Prospect Hari ini</v-list-item-title>
          <v-list-item-subtitle class=""> 354   </v-list-item-subtitle>
        </v-list-item-content>

        
                <template v-slot:activator="{}">

                  
                
                </template>
                
                <v-list>
                  <v-list-item
                          v-for="(item, i) in menu"
                          :key="i"
                          @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
            
         <v-divider vertical color="red" width="100%"></v-divider>
              <v-spacer></v-spacer>
 <!-- <v-img
                                      max-height="200px" 
                   max-width="200px"
                   class="ml-left my-2"
          :src="require('@/assets/package-2.png')"
          top="50%"
          
          contain
          height="120"
        /> -->
<v-list-item-content>
          
          <v-list-item-title class="">Shipper Prospect Hari ini</v-list-item-title>
          <v-list-item-subtitle class=""> 2564   </v-list-item-subtitle>
        </v-list-item-content>
            </v-card-title>
          <v-card-text style="overflow-y: auto; height:100px" >
  <div class="body-1">{{ description }}</div>


</v-card-text>
</v-card>


<v-card>
      <v-list-item
        v-for="file in files"
        :key="file.title"
      >
        <v-list-item-avatar>
          <v-icon
            :class="file.color"
            dark
            v-text="file.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="file.title"></v-list-item-title>

          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <!--  -->

<!--  -->
</v-card>

<!--  -->
<v-card
width="100%"
height="20%"
>

            
                <h1 class="tablets"></h1>
            Status Prospect Terkini
<br><br>
 <v-divider inset color="red" width="100%"></v-divider>
   <v-divider light style="margin-bottom:15px;" />
  

 <v-container fluid>
<v-row align="center" justify="center space-around">
  <div class="tableaja">
                <v-card-text class=" pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="3">
                  <v-card
                  height='50'
                  width="175"
                  >
        <v-icon
      large
      color="#f1a72c"
    >
    mdi mdi-information
    </v-icon>
    
                <v-list-tile-content>
             
              <v-list-tile-title>    
Korespondensasi
                
              </v-list-tile-title>
              
              <v-list-tile-sub-title>

              </v-list-tile-sub-title>
            
            </v-list-tile-content>
            
                  </v-card>
                </v-col>


                <v-col cols="3">
                  <v-card
                  height='50'
                  width="175"
                  >

        <!-- <v-icon
large
      color="green darken-2"
    >
      mdi-domain
    </v-icon> -->
    
        <v-icon
      large
      color="#f1a72c"
    >
      mdi-truck
    </v-icon>
                <v-list-tile-content>
              <v-list-tile-title>Kebutuhan Pengirim</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
            
            </v-list-tile-content>
                  </v-card>
                </v-col>
                
                                         <v-col cols="3">
                  <v-card
                  height='50'
                  width="175"
                  >
        <v-icon
      large
      color="#f1a72c"
    >
                      mdi mdi-receipt
    </v-icon>
                <v-list-tile-content>
              <v-list-tile-title>  <font size="1em">  Korespondensasi Sales</font></v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
            
            </v-list-tile-content>
                  </v-card>
                </v-col>
                                <v-col cols="3">
                  <v-card
                  height='50'
                  width="175"
                  >
        <v-icon
      large
      color="#f1a72c"
    >

mdi mdi-note-plus
    </v-icon>
                <v-list-tile-content>
              <v-list-tile-title>    Review Quotation</v-list-tile-title>
              <v-list-tile-sub-title></v-list-tile-sub-title>
            
            </v-list-tile-content>
                  </v-card>
                </v-col>

              </v-row>
            </v-card-text>
  </div>  

</v-row>
 </v-container>
</v-card>
<!--  -->
    <div class="tables-basic">
      <h1 class="tablets"></h1>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-12 pb-3">
<!--  -->



    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title>
          <p>List Prospect Shipper</p>
          </v-list-item-title>
        <v-list-item-subtitle>
        <!--  -->
        
          <div class="text-Left">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Tambah Prospect
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
  color="secondary"
  elevation="2"
  small
  text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        
        <!--  -->
          <!-- <v-btn
  color="secondary"
  elevation="2"
  small
>
Tambah prospect
</v-btn> -->
<v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"        
        cols="12"
        sm="6"
      >
      
<div width="100%">
<p>status semua pic</p>
</div>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      
<div width="100%">
<p>Status Prospect</p>
</div>
      </v-col>


    </v-row>
  </v-container>
  <!--  -->
  
  <!--  -->
<v-container fluid>
    <v-row align="center">
  <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="e6"
          :items="items"
          label=""

          hint="Semua"
          persistent-hint
        ></v-select>
      </v-col>
 <v-col
        cols="12"
        sm="6"
      >
        <v-select
          v-model="e7"
          :items="items"
          label=""
          multiple
                    hint="Semua"
          persistent-hint
        ></v-select>
      </v-col>

  
    </v-row>
  </v-container>
</v-list-item-subtitle>
      </v-list-item-content>
              


              <v-text-field
              max-width="50%"
                v-model="mock.employeeTable.search"
                append-icon="mdi-magnify"
                label="Search"
                color="red"
                clearable
                single-line
                hide-details
              ></v-text-field>
    </v-list-item>
    <v-divider color="red" width="100%"></v-divider>
<v-spacer></v-spacer> 
  
              <!--  -->
              <!-- <v-spacer></v-spacer>
              -->
            </v-card-title>
                     <v-divider color="red" width="100%"></v-divider>
              <v-spacer></v-spacer>
            <v-data-table
              v-model="mock.employeeTable.selected"
              :headers="mock.employeeTable.headers"
              :items="mock.employeeTable.employee"
              :search="mock.employeeTable.search"
              item-key="name"
              show-select>
            </v-data-table>
          </v-card>
        </v-col>

      </v-row>
    </div>
  </v-container>
  <!--  -->



  <!--  -->
</template>


<script>

import mock from './mock'

export default {
  name: 'Tables',
  data() {
    
    return {
      
              e6: [],
        e7: [],
    items: ['Sales', 'Vendor Management'],
    mock
        
    
    }
    
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
