<script>
import NavBar from "../components/nav-bar.vue";
import SideBar from "../components/side-bar.vue";
import RightBar from "../components/right-bar.vue";
import Footer from "../components/footer.vue";

export default {
    components: { NavBar, SideBar, RightBar, Footer },
    data() {
        return {
            isMenuCondensed: false
        };
    },
    created: () => {
        document.body.removeAttribute("data-layout", "horizontal");
        document.body.removeAttribute("data-topbar", "dark");
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle("sidebar-enable");

            if (window.screen.width >= 992) {
                // eslint-disable-next-line no-unused-vars
                document.body.classList.toggle("vertical-collpsed");
            } else {
                // eslint-disable-next-line no-unused-vars
                document.body.classList.remove("vertical-collpsed");
            }
            this.isMenuCondensed = !this.isMenuCondensed;
        },
        toggleRightSidebar() {
            document.body.classList.toggle("right-bar-enabled");
        },
        hideRightSidebar() {
            document.body.classList.remove("right-bar-enabled");
        }
    }
};
</script>

<template>
    <div>
        <div id="layout-wrapper">
            <NavBar />
            <SideBar :is-condensed="isMenuCondensed" />
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="main-content">
                <div class="page-content">
                    <!-- Start Content-->
                    <BContainer fluid>
                        <slot />
                    </BContainer>
                </div>
                <Footer />
            </div>
            <RightBar />
        </div>
    </div>
</template>
