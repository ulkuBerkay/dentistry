<script>
import profileImg from "../../../images/profile-img.png";
import logo from "../../../images/logo.svg";

/**
 * Login sample page
 */
export default {
  data() {
    return {
      email: "admin@themesbrand.com",
      password: "123456",
      tryingToLogIn: false,
      isAuthError: false,
      profileImg,
      logo
    };
  },
  props: {
    submitUrl: {
      type: String,
      required: true,
    },
    authError: {
      type: String,
      required: false,
      default: () => null,
    },
  },
  mounted() {
    this.isAuthError = !!this.authError;
  },
};
</script>

<template>
  <div>
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <BRow class="justify-content-center">
          <BCol md="8" lg="6" xl="5">
            <BCard no-body class="overflow-hidden">
              <div class="bg-primary-subtle">
                <BRow>
                  <BCol cols="7">
                    <div class="text-primary p-4">
                      <h5 class="text-primary">Welcome Back !</h5>
                      <p>Sign in to continue to Skote.</p>
                    </div>
                  </BCol>
                  <BCol cols="5" class="align-self-end">
                    <img :src="profileImg" alt class="img-fluid" />
                  </BCol>
                </BRow>
              </div>
              <BCardBody class="pt-0">
                <div>
                  <router-link to="/">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img :src="logo" alt class="rounded-circle" height="34" />
                      </span>
                    </div>
                  </router-link>
                </div>
                <div class="p-2">

                  <BAlert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{ authError }}</BAlert>
                  <BForm class="p-2" :action="submitUrl" method="POST">
                    <slot />
                    <BFormGroup id="input-group-1" label="Email" label-for="input-1" class="mb-3">
                      <b-form-input id="input-1" name="email" v-model="email" type="text"
                        placeholder="Enter email"></b-form-input>
                    </BFormGroup>

                    <BFormGroup id="input-group-2" label="Password" label-for="input-2" class="mb-3">
                      <b-form-input id="input-2" v-model="password" name="password" type="password"
                        placeholder="Enter password"></b-form-input>
                    </BFormGroup>

                    <BFormCheckbox id="customControlInline" name="checkbox-1" value="accepted"
                      unchecked-value="not_accepted">
                      Remember me
                    </BFormCheckbox>

                    <div class="mt-3 d-grid">
                      <BButton type="submit" variant="primary" class="btn-block">Log In</BButton>
                    </div>
                    <div class="mt-4 text-center">
                      <h5 class="font-size-14 mb-3">Sign in with</h5>

                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <BLink href="javascript: void(0);" class="social-list-item bg-primary text-white border-primary">
                            <i class="mdi mdi-facebook"></i>
                          </BLink>
                        </li>
                        <li class="list-inline-item">
                          <BLink href="javascript: void(0);" class="social-list-item bg-info text-white border-info">
                            <i class="mdi mdi-twitter"></i>
                          </BLink>
                        </li>
                        <li class="list-inline-item">
                          <BLink href="javascript: void(0);" class="social-list-item bg-danger text-white border-danger">
                            <i class="mdi mdi-google"></i>
                          </BLink>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-4 text-center">
                      <router-link to="/reset/password" class="text-muted">
                        <i class="mdi mdi-lock mr-1"></i> Forgot your password?
                      </router-link>
                    </div>
                  </BForm>
                </div>
              </BCardBody>
            </BCard>
            <div class="mt-5 text-center">
              <p>
                Don't have an account ?
                <router-link to="/auth/register-1" class="fw-medium text-primary">Signup now</router-link>
              </p>
              <p>
                © {{ new Date().getFullYear() }} Skote. Crafted with
                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
              </p>
            </div>
          </BCol>
        </BRow>
      </div>
    </div>
  </div>
</template>
