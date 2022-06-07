<template>
  <div>
    <v-card
      class="mb-0"
      elevation="0"
    >
      <v-row>
        <v-col cols="12">
          <div class="headline">
            DATA PRODUK
          </div>
          <v-divider />
        </v-col>
      </v-row>
    </v-card>
    <div class="pa-4">
      <v-data-table
        loading-text="Loading... Please wait"
        :options.sync="query"
        :headers="headers"
        :items="items"
        :loading="isLoading"
        item-key="number"
        hide-default-footer
        class="elevation-0"
      >
        <template #[`item.number`]="{ item }">
          {{ items.indexOf(item) + 1 }}
        </template>
      </v-data-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    producttabelData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    page: 1,
    isLoading: false,
    query: {
      limit: 10,
      sort: ["-created_at"],
      page: 1,
      filter: "",
    },
    headers: [
      { text: "No", value: "number" },
      { text: "KBLI", value: "kbli" },
      { text: "KAPASITAS", value: "kapasitas" },
      { text: "SATUAN KAPASITAS", value: "satuan" },
      { text: "Cakupan Produk (Jenis Produksi)", value: "jenis_produksi" },
      { text: "TKDN (persen)", value: "tkdn" },
    ],
    rowsPerPageItems: { "items-per-page-options": [5, 10, 25, 50] },
    totalItems: 0,
    items: [
      {
        number: '1',
        kbli: '24201 - Industri Pembuatan Logam Dasar Mulia',
        kapasitas: '2020.00',
        satuan_kapasitas: 'Kg',
        jenis_produksi: 'Pengolahan lumpur anoda (anode slime) menjadi logam mulia (dore metal)',
        tkdn: '100.00',
      }
    ],
  }),
}
</script>