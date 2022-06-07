<template>
  <v-card
    class="mb-12"
  >
    <v-form ref="form">
       <v-spacer></v-spacer>
      <v-row
        justify="space-between"
      >
        <v-col cols="4">
          <h4>PT Kao Chemicals</h4>
        </v-col>
                <v-col cols="4">
          <h4></h4>
        </v-col>
                        <v-col cols="4">
          <h4></h4>
        </v-col>
         <v-spacer></v-spacer>
        <!--  -->
        <v-col cols="4"
        class="mr-8"
        >
          Download File dari Shipper.
          <v-file-input
  truncate-length="5"
>Unduh File template</v-file-input>
        </v-col>
                <v-col cols="4">
          PT. KAO Chemical template.xsl
        </v-col>
                        <v-col cols="2">
          <h4></h4>
        </v-col>
        <!--  -->
              <!--  -->
        <v-col cols="4">
                    Unggah file untuk membuat Ketentuan Delivery Order.
                    <v-file-input
            truncate-length="15"
          >Unggah Quotation
              </v-file-input>
        </v-col>
                <v-col cols="4">
          <h4></h4>
        </v-col>
                        <v-col cols="4">
          <h4></h4>
        </v-col>
        <!--  -->  
        <v-card
    class="pa-4"
    flat
              hint="* Lokasi Muat"
            persistent-hint
    width="100%"
    height="10%"
  >

    <v-toolbar
      dense
      floating
    >
    
      <v-text-field
              hint="* Lokasi Muat"
            persistent-hint
        prepend-icon="mdi-magnify"
        single-line
        fluid
        
        class="mr-8"
      ></v-text-field>
<!--  -->
      <v-text-field
                  hint="* Lokasi Bongkar"
            persistent-hint
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
      <!--  -->
      
    </v-toolbar>
              <v-card
              class="mt-8"
              >
          <v-form ref="form">
      <v-row
        justify="space-between"
      >
        <v-col cols="4">
          Lokasi Muat
          <v-select
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="lokasi.muat"
            :items="itemsMuat"
            item-text="text"
            item-value="value"
            label="Kota / Kabupaten"
          />
          Lokasi Bongkar
                    <v-select
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="lokasi.bongkar"
            :items="itemsBongkar"
            item-text="text"
            item-value="value"
            label="Kota / Kabupaten"
          />
        </v-col>
                <v-col cols="4">
                  <!-- Lokasi Muat
                    <v-select
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.jenis"
            :items="itemsJenis"
            item-text="text"
            item-value="value"
            label=""
          /> -->


                </v-col>
                        <v-col cols="4">
          <h4></h4>
                         </v-col>
          </v-row>
            </v-form>
              </v-card>

  </v-card>
   <v-spacer></v-spacer>
       
        <v-col
          cols="12"
          md="12"
        >

       <v-spacer></v-spacer>
      <v-row
        justify="space-between"
      >
        <v-col cols="4">
           Lokasi Muat
          <v-select
                    hint="* Wajib Di Isi"
            persistent-hint
            v-model="lokasi.muat"
            :items="itemsLokasiMuat"
            label="Kota / Kabupaten"
          />
            Lokasi Bongkar
          <v-select
                    hint="* Wajib Di Isi"
            persistent-hint
            v-model="lokasi.muat"
            :items="itemsLokasiMuat"
            label="Kota / Kabupaten"
          />
          <!--  -->
          <v-card>
               <!--  -->
               Jenis Kendaraan
                     <v-img
  lazy-src="https://picsum.photos/id/11/10/6"
  max-height="150"
  max-width="250"
  src="https://picsum.photos/id/11/500/300"
></v-img>
<div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color=""
          
          v-bind="attrs"
          v-on="on"
        >
          Pilih Jenis Kendaraan
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
            color="primary"
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
          </v-card>
      
      <!--  -->
      Komoditas
          <v-select
          v-model="select"
          hint="* Wajib Di Isi"
          :items="komoditas"
          item-text="state"
          item-value="abbr"
          label="Komoditas"
          persistent-hint
          return-object
          single-line
        ></v-select>
          <!--  -->
                    Tipe Harga
          <v-select
                    hint="* Wajib Di Isi"
            persistent-hint
            v-model="lokasi.muat"
            :items="itemsLokasiMuat"
            label="Tipe Harga"
          />
                              Tipe Unit Barang
          <v-select
                    hint="* Wajib Di Isi"
            persistent-hint
            v-model="lokasi.muat"
            :items="itemsLokasiMuat"
            label="Tipe Harga"
          />
          <!--  -->
          <v-card>
            <v-row>
              <v-col cols="4">
            GP
                    <v-text-field
            v-model="message1"
            label="0%"
            clearable
          ></v-text-field>
</v-col>
<!--  -->
      <v-col cols="4">
            Nilai GP
                    <v-text-field
            v-model="message1"
            label="0"
            clearable
          ></v-text-field>
</v-col>
<!--  -->
      <v-col cols="4">
<span class="material-icons">
<v-icon>question_mark</v-icon>
</span>



</v-col>

          </v-row>
          
          </v-card>
            <!--  -->
            <v-col>
                        <v-card>
            Harga
          <v-text-field
          hint="* Wajib Di Isi"
            persistent-hint
              
            label="harga"
          />

          </v-card>
                    </v-col>
        </v-col>
        <!--  -->
        
        <!--  -->
        <v-col cols="4">
          <v-select
            v-model="lokasi.bongkar"
            :items="itemsBongkar"
            label="Kelurahan/Desa"
          />
        </v-col>

                <v-col cols="4">
                                      <v-card
        height="90%"
        >
                                 <button> <h4>Tambahkah Kebutuhan Pengiriman</h4></button>
                                  </v-card>
        </v-col>
        
                        <!-- <v-col cols="4">
          <h4>Tambahkah Kebutuhan Pengiriman</h4>
        </v-col> -->
         <v-spacer></v-spacer>
          </v-row>




        </v-col>
      </v-row>
      <DataModal />
    </v-form>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";

// import * as queryString from "query-string";

export default {
  name: "KebutuhanPengiriman",
  // components:{CstmDatePicker,DataModal},
  data() {
    return {
      dialog: false,
      isLoading: false,

      query: {
        limit: 10,
        sort: ["-created_at"],
        page: 1,
        filter: "",
      },
      headers: [
        { text: "KBLI", value: "kbli" },
        { text: "KBLI Satu Lini", value: "kbliSatuLini" },
        { text: "Status Kegiatan Usaha", value: "status" },
        { text: "Status Kegiatan Usaha", value: "status2" },
        { value: "actions", sortable: false },
      ],
      rowsPerPageItems: { "items-per-page-options": [5, 10, 25, 50] },
      totalItems: 0,
      items: [],
      company:{
        name:"MAJU BERJAYA",
        jenis:"PT",
        status_badan_hukum:"TERBATAS",
        alamat:"",

        
        email:"aris.22002.priyanto@gmail.com",
        // npwp:"72.167.116.2-009.0000",
        phone:"081284123979",
        fax:"1234567890",

        provinsi:"11",
        kota:"31",
        kecamatan:"31",
        kelurahan:"31",
        rt:"002/002",
        kode_pos:"12230"
      },
      lokasi:{
        muat:"Jakarta",
        bongkar:"Malang",
      },
      select: { state: '', abbr: '' },
      komoditas: [
          { state: 'Alkohol', abbr: 'ALK' },
          { state: 'Batu', abbr: 'BTU' },
          { state: 'Biji Besi', abbr: 'BB' },
          { state: 'Cempedak', abbr: 'CPD' },
          { state: 'Baja', abbr: 'BJ' },
        ],
 
       itemsJenis:[
          { value:'PT',text:'Perseroan Terbatas (PT)' },
        ],

        itemsStatusBadanHukum:[
          { value:'TERBATAS',text:'Terbatas' },
        ],
        itemsJangkaWaktu:[
          { value:'TERBATAS',text:'Terbatas' },
        ],
         itemsStatusPenanamanModal:[
          { value:'PMDN',text:'PMDN' },
        ],
        itemsProvinsi:[
          { value:'31',text:'DKI Jakarta' },
        ],
        itemsKota:[
          { value:'31',text:'Jakarta Selatan' },
        ],
        itemsKecamatan:[
          { value:'31',text:'Kebayoran Lama' },
        ],
         itemsKelurahan:[
          { value:'31',text:'Cipulir' },
        ],
    };
  },
  computed: {
    // apiUrlAll() {
    //   return (
    //     this.apiBase +
    //     "?" +
    //     queryString.stringify(this.query, { arrayFormat: "comma" })
    //   );
    // },
  },
  watch: {
    query: {
      handler() {
        this.initialize();
      },
      deep: true,
    },
    // if search was cleared
    searchData(n, o) {
      if (n != o && n == null) {
        this.query.filter = this.searchData;
      }
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    // initialize() {
    //   let payload = {
    //     method: "get",
    //     url: this.apiUrlAll,
    //   };
    //   this.fetchData(payload)
    //     .then((res) => {
    //       this.totalItems = res.data.total;
    //       console.log("data");
    //       console.log(res.data.data);
    //       this.company = res.data.data;
    //       this.isLoading = false;
    //     })
    //     .catch((err) => {
    //       this.showToastrNotif(
    //         "error",
    //         "Proses tidak berhasil dilakukan, silakan refresh halaman ini",
    //         "Jika tidak ada perubahan silakan kembali ke halaman ini dalam waktu 1x24 jam, kami akan perbaiki halaman ini"
    //         // `${err.response.status} ${err.response.statusText}`
    //       );
    //       this.isLoading = false;
    //     });
    },
    
//     formatDate(date) {
//       if (!date) return null;

//       const [year, month, day] = date.split("-");
//       //this.register.tgl_lahir = `${day}-${month}-${year}`;
//       return `${day}-${month}-${year}`;
//     },
//   }
};
</script>

<style scoped>
.v-messages__hint {
    color: red !important;
}
</style>