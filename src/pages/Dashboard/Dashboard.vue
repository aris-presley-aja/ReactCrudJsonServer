<template>
  <v-container display="" flex fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Selamat Datang Admin</h1>
        <v-menu offset-y>
        </v-menu>
      </v-row>
      <v-container grid-list-md>
        <v-card-text style="overflow-y: auto; height:100px" >
  <div class="body-1">{{ description }}</div>
  <v-divider light style="margin-top:15px;" />
  <v-divider light />
</v-card-text>
<div class="body-1">
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            
                <v-card-title class="pa-3 pb-2">
              <p></p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{  }">
                 
      <p class="text-sm-left ml-left">
                  Total Shipper
                  </p>
                </template>
                <v-list>
                  <v-list-item
                  >
                    <v-list-item-title></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
                        <v-card-title class="pa-2">
                   <v-img
                                      max-height="200px" 
                   max-width="200px"
                   class="ml-left my-2"
          :src="require('@/assets/package-2.png')"
          top="50%"
          
          contain
          height="120"
        />
              <v-spacer></v-spacer>
          
              <v-menu>
                <template v-slot:activator="{}">
    <p class="display-1 text-sm-center ml-center">
      <font color="#F57C00">
347
      </font>
    </p>
                  
                
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
              </v-menu>
            </v-card-title>
         
         <!--  -->

        
            <v-card-title class="pa-3 pb-2">
              <p>Shipper Prospect Hari Ini</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{  }">
                  <p class="text-sm-left ml-left">
                  Total Shipper Prospect
                  </p>
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
              </v-menu>
            </v-card-title>
                        <v-card-title class="pa-6 pb-6">
              <p class="display-1"><font color="#F57C00">24</font></p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
              <p class="display-1"><font color="#F57C00">178</font></p>
                  </v-btn>
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
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
               
                                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="200"
                  >
                  <p>Informasi Dasar</p>
              <p>    <span cols="6" class="headline mdi mdi-shield-account"></span> 13 </p>
                
                  </v-card>
                </v-col>
                                                                        <v-col cols="3">
                  <v-card
                  height='100'
                  width="200"
                  >
                  <p>Kebutuhan Pengirim</p>
              <p>    <span cols="6" class="headline mdi mdi-truck"></span> 13 </p>
                
                  </v-card>
                </v-col>
                                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="200"
                  >
                  <p>Korespondensi Sales</p>
              <p>    <span cols="6" class="headline mdi mdi-truck"></span> 18 </p>
                
                  </v-card>
                </v-col>
                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="200"
                  >
                  <p>Review Quotation</p>
              <p>    <span cols="6" class="headline mdi mdi-note-text-outline"></span>9</p>
                
                  </v-card>
                </v-col>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>


        <!--  -->
        
        <v-col cols="12" md="6">
          <v-card>
            
                <v-card-title class="pa-3 pb-2">
              <p></p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{  }">
                 
      <p class="body-2 text-sm-left ml-left">
                  Total Transporter
                  </p>
                </template>
                <v-list>
                  <v-list-item
                  >
                  
                    <v-list-item-title></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
                        <v-card-title class="pa-2">
                   <v-img
                                      max-height="200px" 
                   max-width="200px"
                   class="ml-left my-2"
          :src="require('@/assets/package-3.png')"
          top="50%"
          
          contain
          height="120"
        />
              <v-spacer></v-spacer>
          
              <v-menu>
                <template v-slot:activator="{}">
    <p  class="display-1 text-sm-center ml-center" darken-1 >
      <font color="#F57C00">
425
      </font>
    </p>
                  
                
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
              </v-menu>
            </v-card-title>
         
         <!--  -->

        
            <v-card-title class="pa-3 pb-2">
              <p><font class="body-2">Transporter Prospect Hari Ini</font></p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{  }">
                  <p class="body-2 text-sm-left ml-left">
                  Total Transporter Prospect
                  </p>
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
              </v-menu>
            </v-card-title>
                        <v-card-title class="pa-6 pb-6">
              <p class="display-1"><font color="#F57C00">24</font></p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                  >
              <p class="display-1"><font color="#F57C00">178</font></p>
                  </v-btn>
                </template>
                <!-- <v-list>
                  <v-list-item
                          v-for="(item, i) in menu"
                          :key="i"
                          @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list> -->
              </v-menu>
            </v-card-title>
            <!-- <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Informasi Dasar
                  </v-card>
                </v-col>
                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Kebutuhan Pengirim
                  </v-card>
                </v-col>
                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Korespondensi Sales
                  </v-card>
                </v-col>
                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Review Quotation
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text> -->
          </v-card>
        </v-col>


      </v-row>
</div>
      </v-container>
    </div>
    <v-card>
Admin
<p>Total Admin  <font color="#F57C00"> 16</font></p>
<div>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="6">
                  <v-card
                  height='50'
                  width="400"
                  >
                  <span class="display-1 center mdi mdi-account-group">Sales Admin

                     <font
        v-for="n in 1"
        :key="n"
        color="#F57C00"
        class="pa-16"
        outlined
        tile
      >
        7
      </font>

                  </span>

                  </v-card>
                </v-col>
                                <!-- <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Kebutuhan Pengirim
                  </v-card>
                </v-col>
                                                <v-col cols="3">
                  <v-card
                  height='100'
                  width="150"
                  >
                Korespondensi Sales
                  </v-card>
                </v-col> -->
                                                <v-col cols="6">
                  <v-card
                  height='50'
                  width="400"
                  >
                       <span class="display-1 center mdi mdi-account-group">Vm Admin
                                              <font
        v-for="n in 1"
        :key="n"
        color="#F57C00"
        class="pa-16"
        outlined
        tile
      > 9</font>
                         </span>             
               
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
</div>
</v-card>
  </v-container>



</template>



<script>
// import ApexChart from 'vue-apexcharts'
import config from '../../config';

export default {
  name: 'Charts',
  components: {
   
  },
  data() {
    return {

      menu: [
        'Edit',
        'Copy',
        'Delete',
        'Print'
      ],
      apexArea: {
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          colors: [config.light.primary, config.light.success],
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2020-09-18T00:00:00",
              "2020-09-19T01:30:00",
              "2020-09-20T02:30:00",
              "2020-09-21T03:30:00",
              "2020-09-22T04:30:00",
              "2020-09-23T05:30:00",
              "2020-09-24T06:30:00",
            ],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          legend: {
            show: false,
          },
          fill: {
            type: 'solid',
            opacity: 0.2,
            colors: [config.light.primary, config.light.success],
          },
          stroke: {
            width: 4,
            curve: 'smooth'
          },
        },
        series: [
          {
            name: "series1",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "series2",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
      },
      apexPie: {
        options: {
          dataLabels: {
            enabled: false
          },
          colors: [config.light.primary, config.light.secondary, config.light.success, config.light.warning, config.light.info],
          labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
          legend: {
            position: 'bottom',
            horizontalAlign: 'center',
          }
        },
        series: this.generatePieSeries(),
      },
      apexLines: {
        options: {
          chart: {
            type: 'line',
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false,
            }
          },
          colors: [config.light.primary, config.light.warning, config.light.secondary],
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 2,
            curve: 'smooth',
            dashArray: [0, 8, 5]
          },
          markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
          },
          xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
              '10 Jan', '11 Jan', '12 Jan'
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (mins)"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session"
                  }
                }
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  }
                }
              }
            ]
          },
          legend: {
            show: false,
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              }
            },
            yaxis: {
              lines: {
                show: false,
              },
            }
          }
        },
        series: [
          {
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
          },
          {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
          },
          {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
          }
        ],
      },
      heatMap: {
        options: {
          chart: {
            toolbar: {
              show: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          colors: [config.light.primary],
          xaxis: {
            type: 'category',
          }
        },
        series: [
          {
          name: 'Metric1',
          data: this.generateData(18, {
            min: 0,
            max: 90
          })
        },
          {
            name: 'Metric2',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric3',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric4',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric5',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric6',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric7',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric8',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          },
          {
            name: 'Metric9',
            data: this.generateData(18, {
              min: 0,
              max: 90
            })
          }
        ],
      }
    };
  },
  methods: {
    generateData(count, yrange) {
      let i = 0;
      let series = [];
      while (i < count) {
        let x = "w" + (i + 1).toString();
        let y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      return series;
    },
    generatePieSeries() {
      let series = [];

      for (let i=0; i < 5; i++) {
        let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
        series.push(y)
      }
    return series;
    }
  }
};
</script>
