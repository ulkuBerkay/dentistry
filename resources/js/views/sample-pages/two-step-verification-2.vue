<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination'

import logoDark from '../../../images/logo-dark.png';
import logoLight from '../../../images/logo-light.png'

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      Autoplay: Autoplay,
      logoDark, logoLight,
      jsonData: [
        {
          id: "digit1-input",
          label: "Digit 1",
          maxLength: 1,
          dataValue: "1"
        },
        {
          id: "digit2-input",
          label: "Digit 2",
          maxLength: 1,
          dataValue: "2"
        },
        {
          id: "digit3-input",
          label: "Digit 3",
          maxLength: 1,
          dataValue: "3"
        },
        {
          id: "digit4-input",
          label: "Digit 4",
          maxLength: 1,
          dataValue: "4"
        },
      ]
    };
  },
  mounted() {
    document.body.classList.add("auth-body-bg");
  },
};
</script>

<template>
  <div>
    <BContainer fluid class="p-0">
      <BRow class="g-0">
        <BCol xl="9">
          <div class="auth-full-bg pt-lg-5 p-4">
            <div class="w-100">
              <div class="bg-overlay"></div>
              <div class="d-flex h-100 flex-column">
                <div class="p-4 mt-auto">
                  <BRow class="justify-content-center">
                    <BCol lg="7">
                      <div class="text-center">
                        <h4 class="mb-3">
                          <i class="bx bxs-quote-alt-left text-primary h1 align-middle me-3"></i><span class="text-primary">5k</span>+ Satisfied
                          clients
                        </h4>

                        <div dir="ltr" class="owl-theme">
                          <swiper class="mySwiper" :loop="true" :modules="[Autoplay]" :space-between="20" :autoplay="{ delay: 2500, disableOnInteraction: false }">
                            <swiper-slide>
                              <p class="font-size-16 mb-4">
                                " Fantastic theme with a ton of options. If you
                                just want the HTML to integrate with your
                                project, then this is the package. You can find
                                the files in the 'dist' folder...no need to
                                install git and all the other stuff the
                                documentation talks about. "
                              </p>
                              <div>
                                <h4 class="font-size-16 text-primary">
                                  Abs1981
                                </h4>
                                <p class="font-size-14 mb-0">- Skote User</p>
                              </div>
                            </swiper-slide>

                            <swiper-slide>
                              <p class="font-size-16 mb-4">
                                " If Every Vendor on Envato are as supportive as
                                Themesbrand, Development with be a nice
                                experience. You guys are Wonderful. Keep us the
                                good work. "
                              </p>
                              <div>
                                <h4 class="font-size-16 text-primary">
                                  nezerious
                                </h4>
                                <p class="font-size-14 mb-0">- Skote User</p>
                              </div>
                            </swiper-slide>
                          </swiper>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </div>
              </div>
            </div>
          </div>
        </BCol>

        <BCol xl="3">
          <div class="auth-full-page-content p-md-5 p-4">
            <div class="w-100">
              <div class="d-flex flex-column h-100">
                <div class="mb-4 mb-md-5">
                  <router-link to="/" class="d-block auth-logo">
                    <img :src="logoDark" alt="" height="18" class="auth-logo-dark" />
                    <img :src="logoLight" alt="" height="18" class="auth-logo-light" />
                  </router-link>
                </div>
                <div class="my-auto">
                  <div class="text-center">
                    <div class="avatar-md mx-auto">
                      <div class="avatar-title rounded-circle bg-light">
                        <i class="bx bxs-envelope h1 mb-0 text-primary"></i>
                      </div>
                    </div>
                    <div class="p-2 mt-4">
                      <h4>Verify your email</h4>
                      <p class="mb-5">
                        Please enter the 4 digit code sent to
                        <span class="fw-semibold">example@abc.com</span>
                      </p>

                      <BForm>
                        <BRow>
                          <BCol cols="3" v-for="inputData in jsonData" :key="inputData.id">
                            <div class="mb-3">
                              <label :for="inputData.id" class="visually-hidden">{{ inputData.label }}</label>
                              <input type="text" class="form-control form-control-lg text-center two-step" :maxLength="inputData.maxLength" :data-value="inputData.dataValue" :id="inputData.id">
                            </div>
                          </BCol>
                        </BRow>
                      </BForm>

                      <div class="mt-4">
                        <router-link to="/" class="btn btn-success w-md">Confirm</router-link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    © {{ new Date().getFullYear() }} Skote. Crafted with
                    <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BCol>
      </BRow>
    </BContainer>
  </div>
</template>

<style lang="scss" scoped>
.carousel-caption {
  position: relative !important;
  right: 0;
  left: 0;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  color: #495057;
}

.carousel-indicators li {
  background-color: rgba(85, 110, 230, 0.25);
}
</style>