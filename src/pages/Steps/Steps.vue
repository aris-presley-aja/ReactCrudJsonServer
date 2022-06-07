<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Informasi Dasar
        </v-stepper-step>

        <v-divider />

        <v-stepper-step :complete="e1 > 2" step="2">
          Kebutuhan Pengiriman
        </v-stepper-step>
        <v-divider />

        <v-stepper-step :complete="e1 > 3" step="3">
          Ketentuan Kontrak
        </v-stepper-step>

        <v-stepper-step :complete="e1 > 4" step="4">
          Review Quotation
        </v-stepper-step>

        <!-- <v-stepper-step :complete="e1 > 5" step="5">
          Validasi Data
        </v-stepper-step> -->
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <InformasiDasar />
          <!-- <v-col class="text-left">
            <v-btn dark color="bg-primary" @click="e1++">
              Edit
            </v-btn>
          </v-col> -->
          <v-card>
            <v-row align="center">
          <v-col class="text-left">
                  <v-btn color="blue" spacing @click="e1++">
              Kembali
            </v-btn>
                      </v-col>
                                <v-col class="text-right">
             <v-btn
              col="6"
                color="orange"
                @click="EditPage"
                
              >
                    <v-icon left>
        mdi-pencil
      </v-icon>
              Edit
            </v-btn>
            <v-btn col="6" color="red" @click="e1++">
              Selanjutnya
            </v-btn>
              </v-col>
          </v-row>
          </v-card>
        </v-stepper-content>

        <v-stepper-content step="2">
          <KebutuhanPengiriman />
          <v-col class="text-right">
            <v-btn @click="e1--">
              Sebelumnya
            </v-btn>
            <v-btn dark color="bg-primary" @click="e1++">
              Selanjutnya
            </v-btn>
          </v-col>
        </v-stepper-content>

        <v-stepper-content step="3">
          <DataPengurus />
          <v-col class="text-right">
            <v-btn @click="e1--">
              Sebelumnya
            </v-btn>
            <v-btn dark color="bg-primary" @click="e1++">
              Selanjutnya
            </v-btn>
          </v-col>
        </v-stepper-content>
        <v-stepper-content step="4">
          <DataMaksudTujuan />
          <v-col class="text-right">
            <v-btn @click="e1--">
              Sebelumnya
            </v-btn>
            <v-btn dark color="bg-primary" @click="e1++">
              Selanjutnya
            </v-btn>
          </v-col>
        </v-stepper-content>
        <v-stepper-content step="5">
          <DataPerusahaan />
          <DataLegalitas />
          <DataMaksudTujuan />
          <v-row class="py-0">
            <v-col cols="12">
              <div class="title">
                <!-- Disclaimer -->
              </div>
              <v-divider />
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-checkbox
                v-model="disclaimer"
                label="*) Dengan ini saya menyatakan bahwa kelengkapan data yg saya isikan :
  - Benar dan valid
  - Dapat dipertanggung jawabkan"
              />
            </v-col>
          </v-row>

          <v-col class="text-right">
            <v-btn @click="e1--">
              Sebelumnya
            </v-btn>
            <v-btn dark color="bg-primary">
              Selanjutnya
            </v-btn>
          </v-col>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { mapActions } from "vuex";
// import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import InformasiDasar from "./InformasiDasar";
import KebutuhanPengiriman from "./KebutuhanPengiriman";
// import DataLegalitas from "./form/DataLegalitas";
// import DataPengurus from "./form/DataPengurus";
// import DataMaksudTujuan from "./form/DataMaksudTujuan";
export default {
  name: "Stepper",
  // , DataLegalitas, DataPengurus, DataMaksudTujuan
  components: { InformasiDasar, KebutuhanPengiriman },
  data: () => ({
    e1: 1,
    dataList: [],
    disclaimer: null,
    ex7: "red",
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
    rekamDataLegalitas: false,
    company: {
      type: "",
      penanggung_jawab: null,
      sk_number: null,
      name: null,
    },
    companyTypeOption: [
      {
        name: "Badan Usaha Pemerintah",
        code: "BUP",
      },
      {
        name: "Koperasi",
        code: "koperasi",
      },
      {
        name: "Yayasan",
        code: "yayasan",
      },
      {
        name: "Perseroan Terbatas ",
        code: "PT",
      },
      {
        name: "Badan Sosial",
        code: "BS",
      },
    ],
  }),
  metaInfo: {
    title: "Informasi Stepper",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },

  mounted() {
    // this.$store.dispatch(SET_BREADCRUMB, [
    //   { title: "Permohonan" },
    //   { title: "Non Perseorangan" },
    //   { title: "Legalitas" },
    //   { title: "Dokumen Legal" },
    // ]);
  },
  methods: {
    ...mapActions(["fetchData"]),
    initialize() {
      this.dataList = [
        {
          no: "1",
          name: "COBA 03032021",
          jenis: "Perseroan Terbatas (PT)",
          sumber: "AHU Online - Web Service AHU",
          pemroses: "DEWI SHINTA MARINA",
          delegasi: null,
          penanggung_jawab: "DEWI SHINTA MARINA",
        },
      ];
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>