<template>
  <v-card
    class="mb-12"
  >
    <v-form ref="form">
      <v-row
        justify="space-between"
      >
        <v-col cols="6">
          <h4>Informasi Perusahaan</h4>
        </v-col>
                <v-col cols="6">
          <h4>Contact Person</h4>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
          hint="* Wajib Di Isi"
            persistent-hint
            v-model="company.name"  
            label="Nama Perusahaan"
          />
          <v-select
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.jenis"
            :items="itemsJenis"
            item-text="text"
            item-value="value"
            label="Jenis Perusahaan / Badan"
          />
          <v-textarea
          hint="* Wajib Di Isi"
            persistent-hint
            v-model="company.address"
            rows="4"
            label="Deskripsi Perusahaan"
          />
          <v-textarea
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.alamat"
            :items="itemsJangkaWaktu"
            label="Alamat Perusahaan"
          />
          <!-- <CstmDatePicker
            label="Masa Berakhir Legalitas"
            :data-value="company.masa_berakhir_legalitas"
          /> -->
          <v-select
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.provinsi"
            :items="itemsProvinsi"
            label="Provinsi"
          />
                    <v-select
          hint="* Wajib Di Isi"
            persistent-hint                    
            v-model="company.kota"
            :items="itemsKota"
            label="Kabupaten/Kota"
          />
          <v-text-field
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.email"
            label="Email Perusahaan"
          />
          <!-- <v-text-field
            v-model="company.npwp"
            label="NPWP Perusahaan"
          /> -->
          <v-col>


              <div>
    <div class="d-inline accent-2 white--text">
        <v-col cols="12" md="6">


          </v-col>
          


    </div>
      <v-card
    class="mb-6"
  >
  <v-form>
      <v-row
        justify="space-between"
      >
      <v-col>
        <v-text-field
         cols="12" md="6"
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.phone"
            label="Nomor Telepon Kantor"
          />
      </v-col>
            <v-col>
                  <v-text-field
                  
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.phone"
            label="Website"
          />
      </v-col>
      </v-row>
  </v-form>
  </v-card>
  </div>
          </v-col>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
                                hint="* Wajib Di Isi"
            persistent-hint
            v-model="profile.namalengkap"
            rows="4"
            label="Nama Lengkap"
          />


          <v-text-field
                                hint="* Wajib Di Isi"
            persistent-hint
            v-model="profile.jabatan"
            :items="itemsJabatan"
            label="Jabatan"
          />
          <v-text-field
          hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.phone"
            label="Email"
          />
          <v-text-field
            class="input-group--focused"
            hint="* Wajib Di Isi"
            persistent-hint          
            v-model="company.phone"
            label="Nomor Ponsel"
          />

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
  name: "InformasiDasar",
  // components:{CstmDatePicker,DataModal},
  data() {
    return {
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
      profile:{
        namalengkap:"Aris Priyanto",
        jabatan:"Admin",
      },
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