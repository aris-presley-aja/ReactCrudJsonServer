<template>
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE"
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    color='#2e383f'
    space-between
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{'drawer-mini': !DRAWER_STATE}">
    <v-img
          :src="require('@/assets/logo-ontrucksmdpi.png')"
          class="my-6"
          contain
          center
          height="6%"    
        />
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
          color="#f1a72c"
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
          color="#f1a72c"
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
      <v-list-group>
                  <template color="#f1a72c" v-slot:activator>
                    <v-icon size="28">mdi-image-filter-none</v-icon>
            <v-list-item-title><font color="#f1a72c">Konfigurasi</font></v-list-item-title>
          </template>
      <v-list>
        <v-list-group
          :value="true"
          prepend-icon="mdi-account-group"
        >
          <template color="#f1a72c" v-slot:activator>
            <v-list-item-title><font color="#f1a72c">Users</font></v-list-item-title>
          </template>
          <v-list-group
            :value="true"
            color="#f1a72c"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title><font color="#f1a72c">Admin</font></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              link
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
 
        </v-list-group>
      </v-list>
            <v-list>

        <v-list-group
          :value="true"
          prepend-icon="mdi-account-settings-outline"
        >
          <template v-slot:activator>
            <v-list-item-title><font color="#f1a72c">Setup</font></v-list-item-title>
          </template>
  
          <v-list-group
            :value="true"
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title><font color="#f1a72c">Role</font></v-list-item-title>
              </v-list-item-content>
            </template>
  
            <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              link
            >
              <v-list-item-title v-text="title">tesss</v-list-item-title>
  
              <v-list-item-icon>
                <v-icon color="#f1a72c" v-text="icon">aaaa</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group
            no-action
            sub-group
            
          >
                    <!-- <v-list-item-icon>
            <v-icon >mdi-home</v-icon>
          </v-list-item-icon>
                    <v-list-item-title><font color="#f1a72c">Company</font></v-list-item-title> -->
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title><font color="#f1a72c">Actions</font></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="([title, icon], i) in cruds"
              :key="i"
              color="#f1a72c"
              link
            >
              <v-list-item-title color="#f1a72c" v-text="title"></v-list-item-title>
  
              <v-list-item-icon color="#f1a72c">
                <v-icon color="#f1a72c" v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
                           

        
          </v-list-group>
        </v-list-group>
      </v-list>
  </v-list-group>

<!--  -->
<v-divider
  inset
></v-divider>
               <!-- <v-list-item>
          <v-list-item-icon>
            <v-icon >mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title><font color="#f1a72c">Company</font></v-list-item-title>
        </v-list-item>
      <v-divider
  inset
></v-divider> -->
               <!-- <v-list-item>
          <v-list-item-icon>
            <v-icon >mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title><font color="#f1a72c">Company</font></v-list-item-title>
        </v-list-item> -->
        <v-divider
  inset
></v-divider>
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
     admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ], 
        items: [
          { title: 'Dashboard', icon: 'mdi-home', link: '/dashboard' },
          // { title: 'Typography', icon: 'mdi-format-size', link: '/typography' },
          // { title: 'Tables', icon: 'mdi-grid-large', link: '/tables' },
          // { title: 'Notifications', icon: 'mdi-bell-outline', link: '/notifications' },
          { divider: true },
          {
            title: 'Shipper',
           color: '#f1a72c"',
           
           icon: 'mdi-image-filter-none',
            link: '/icons',
            model: false,
            children: [
              { title: 'Shipper', icon: 'mdi-circle-small', color: '#f1a72c', link: '/Tables'},
              { title: 'Transporter', icon: 'mdi-circle-small', color: '#f1a72c', link: '/steps'},
              { title: 'stepper', icon: 'mdi-circle-small', color: '#f1a72c', link: '/charts'},              
            //   { title: 'Ops', icon: 'mdi-circle-small', color: '#f1a72c', link: '/Typography'},
            //   { title: 'Fa', icon: 'mdi-circle-small', color: '#f1a72c', link: '/maps'},
            // { title: 'User', icon: 'mdi-circle-small', color: '#f1a72c', link: '/Tables'},
            ],
          },
                    {
            title: 'Main Menu',
            icon: 'mdi-alpha-r-box',
            link: '/icons',
            model: false,
            children: [
              { title: 'Shipper', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'},
              { title: 'Order', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'},
              { title: 'Transporter', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'},
                         { title: 'Driver', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'},
                        { title: 'Admin', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'}, 
         
           
           ],
          },
          { divider: true },

{
            title: 'Report',
            icon: 'mdi-alpha-r-box',
            link: '/icons',
            model: false,
            children: [
              { title: 'Trx', icon: 'mdi-circle-small', color: '#f1a72c', link: '/icons'},
            ],
          },
          { divider: true },
          
          


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
