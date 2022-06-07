<template>
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE"
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}">

    <div class="v-list">
      <!-- <a class="v-list-item v-list-item--link grey--text text-sm-h6" target="_blank" href="https://flatlogic.com/generator">Generate App</a> -->
    </div>
    <!-- berkarya --> <!-- ending berkarya -->
    <v-list>
      <template v-for="(item, i) in items">
        <v-row
          v-if="item.heading"
          :key="item.heading"
          align="center">
          <v-col cols="6" class="py-5">
            <span
              style="padding-left: 32px"
              class="text-body-1 subheader"
              :class="(item.heading && DRAWER_STATE) ? 'show ' : 'hide'">
              {{ item.heading }}
              </span>
          </v-col>
          <v-col
            cols="6"
            class="text-center">
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-group
          color="primary"
          v-else-if="item.children && DRAWER_STATE"
          :key="item.title"
          v-model="item.model"
          append-icon="">
            <template v-slot:prependIcon>
              <v-icon size="28">mdi-image-filter-none</v-icon>
            </template>
            <template v-slot:activator >
              <v-list-item-content >
                <v-list-item-title
                  class="grey--text">
                    {{ item.title }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              link>
                <v-list-item-action v-if="child.icon">
                  <v-icon size="">{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title class="grey--text">
                    {{ child.title }}
                  </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-group>
        <v-list-item
          color="primary"
          v-else
          :key="item.text"
          :href="item.href ? item.href : null"
          :to="item.link === '#' ? null : item.link"
          link>
          <v-list-item-action>
            <v-icon
              size="28"
              :color="item.color ? item.color : ''"
            >{{ item.icon }}</v-icon>
          </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title
                class="grey--text"
                link>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>


          

        </v-list-item>
        <!--  -->

        
        <!--  -->
      </template>
      <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
<i class="fa fa-cogs" aria-hidden="true">Konfigurasi</i>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
       <!-- konten disini -->
      <v-expansion-panels>
    <v-expansion-panel
      
    >
      <v-expansion-panel-header>
        <button>

       <i class="fa fa-users" aria-hidden="true">User</i>
        </button>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
          <span>
            <span fluid class="cb-item"><i class="fa fa-user-plus" aria-hidden="true">Create User</i></span><br>
            <span fluid class="cb-item"><i class="fa fa-user-times" aria-hidden="true">Delete User</i></span><br>
            <span fluid class="cb-item"><i class="fa fa-user-circle-o" aria-hidden="true">Modify User</i></span><br>
          </span>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        <v-expansion-panels>
    <v-expansion-panel
      
    >
      <v-expansion-panel-header>
       <i class="fa fa-wrench" aria-hidden="true">Setup Module</i>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
       <!-- selesai konotenn -->
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    <!--  -->
    </v-list>


    </v-navigation-drawer>
</template>

<script>
import {mapActions, mapState} from 'vuex'

  export default {
    props: {
        source: String,
    },
    data(){
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-home', link: '/dashboard' },
          // { title: 'Typography', icon: 'mdi-format-size', link: '/typography' },
          // { title: 'Tables', icon: 'mdi-grid-large', link: '/tables' },
          // { title: 'Notifications', icon: 'mdi-bell-outline', link: '/notifications' },
          {
            title: 'Modul',
            icon: 'mdi-image-filter-none',
            link: '/icons',
            model: false,
            children: [
              { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
              { title: 'Charts', icon: 'mdi-circle-small', link: '/steps'},
              { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
            ],
          },
          { divider: true },
          { title: 'Report', icon: 'mdi-bell-outline', link: '/tables' },          
          //           {
          //   title: 'Konfigurasi',
          //   icon: 'mdi-image-filter-none',
          //   link: '/icons',
          //   model: false,
          //   children: [
          //     { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
          //     { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
          //     { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
          //   ],
          //               subchildren: [
          //     { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
          //     { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
          //     { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
          //   ],
            
          //   },
          // { divider: true },
          
          // { heading: 'Konfigurasi' },
//  {
//             title: 'User',
//             icon: 'mdi-image-filter-none',
//             link: '/icons',
//             model: false,
//             children: [
//               { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
//               { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
//               { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
//             ],
//           },
//  {
//             title: 'Setup Module',
//             icon: 'mdi-image-filter-none',
//             link: '/icons',
//             model: false,
//             children: [
//               { title: 'Icons', icon: 'mdi-circle-small', link: '/icons'},
//               { title: 'Charts', icon: 'mdi-circle-small', link: '/charts'},
//               { title: 'Maps', icon: 'mdi-circle-small', link: '/maps'},
//             ],
//           }         



          // { title: 'Support', icon: 'mdi-forum', href: 'https://flatlogic.com/forum/'},
          // { title: 'FAQ', icon: 'mdi-help-circle-outline', href:'https://flatlogic.com/templates/vue-material-template'},
          // { divider: true },
          // { heading: 'Report' },
          // { title: 'My recent', icon: 'mdi-circle-medium', color: 'warning'},
          // { title: 'Starred', icon: 'mdi-circle-medium', color: 'primary'},
          // { title: 'Background', icon: 'mdi-circle-medium', color: 'error'}

        ],




        sidebarWidth: 240,
        sidebarMinWidth: 96
      }

      
    },
    
    computed: {
      ...mapState(['drawer']),
      DRAWER_STATE: {
        get() {
          return this.drawer
        },
        set(newValue) {
          if (newValue === this.drawer) return;
          this.TOGGLE_DRAWER();
        }
      }
    },
    methods: {
      ...mapActions([ 'TOGGLE_DRAWER' ]),
    }
// 


// 
  }
</script>

<style src="./Sidebar.scss" lang="scss">

</style>
