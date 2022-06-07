<template>
  <v-app>
    <v-container class="container fill-height">
      <v-row no-gutters align="center" height="100%"
      justify="center">
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
 
          <v-row no-gutters class="align-start">
      
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
          
              <div class="login-wrapper pt-md-4 pt-0">
   <!--  logo disini -->
   

     <v-img
          :src="require('@/assets/logo-ontrucksmdpi.png')"
          class="my-6"
          centered
          contain
          height="12%"
        />

   <v-sheet
   align="center"
  color="white"
  elevation="10"
  height="325"
  shaped
  width="325"
>
        <!-- end logo disini  -->
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>

                  <v-tab-item :value="'tab-login'" >
                    <v-form>
                      <v-container bgcolor="#ed8e00">
                        <v-row class="flex-column">
                          <v-col>

                          </v-col>

                          <v-form>
                            
                            <v-col>
                              <v-text-field
                                  v-model="email"
                                  :rules="emailRules"
                                  value="admin@flatlogic.com"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>

                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  class="text-capitalize"
                                  large
                                  :disabled="password.length === 0 || email.length === 0"
                                  color="success"
                                  @click="login"
                              >
                                Login</v-btn>
                                
                              <v-btn large text class="text-capitalize primary--text">Forget Password</v-btn>
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
                </v-sheet>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">© 2014-2020 <a href="https://on-trucks.com/" class="text-decoration-none">On Trucks</a>, LLC. All rights reserved.</div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        email: 'aris@ontrucks.com',
        showPassword: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        createFullName: 'John Smith',
        createEmail: 'john@flatlogic.com',
        createPassword: '123456',
        createPhone: '+62',
        password: '123456',
        passRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Min 6 characters'
        ]
      }
    },
    methods: {
      login(){
        window.localStorage.setItem('authenticated', true);
        this.$router.push('/dashboard');
      }
    },
    metaInfo() {
			return {
				title: 'Super Secret | Login',
			}
		},
    created() {
      if (window.localStorage.getItem('authenticated') === 'true') {
        this.$router.push('/dashboard');
      }
    }
  }

</script>

<style src="./Login.scss" lang="scss"/>
