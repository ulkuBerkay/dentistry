<script>
import Layout from '../../layouts/main.vue'
import PageHeader from '../../components/page-header.vue'

import img1 from '../../../images/small/img-1.jpg';
import img2 from '../../../images/small/img-2.jpg';
import img3 from '../../../images/small/img-3.jpg';
import img4 from '../../../images/small/img-4.jpg';
import img5 from '../../../images/small/img-5.jpg';
import img6 from '../../../images/small/img-6.jpg';
import img7 from '../../../images/small/img-7.jpg';

/**
 * Carousel component
 */
export default {
    components: { Layout, PageHeader },
    data() {
        return {
            img1, img2, img3, img4, img5, img6, img7,

            slide: 0,
            slide1: 0,
            sliding: null,
        }
    },
}
</script>

<template>
    <Layout>
        <PageHeader title="Carousel" pageTitle="UI Elements" />
        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Slides only</BCardTitle>
                        <p class="card-title-desc">Here’s a carousel with slides only.
                            Note the presence of the <code>.d-block</code>
                            and <code>.img-fluid</code> on carousel images
                            to prevent browser default image alignment.</p>

                        <BCarousel :interval="3000" ride="carousel" class="carousel slide" id="carouselExampleSlidesOnly">
                            <BCarouselSlide active :img-src="img1" />
                            <BCarouselSlide :img-src="img2" />
                            <BCarouselSlide :img-src="img3" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>With controls</BCardTitle>
                        <p class="card-title-desc">Adding in the previous and next controls:</p>

                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                            <BCarouselSlide active :img-src="img4" />
                            <BCarouselSlide :img-src="img5" />
                            <BCarouselSlide :img-src="img6" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>With indicators</BCardTitle>
                        <p class="card-title-desc">You can also add the indicators to the
                            carousel, alongside the controls, too.</p>


                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls indicators>
                            <BCarouselSlide active :img-src="img3" />
                            <BCarouselSlide :img-src="img2" />
                            <BCarouselSlide :img-src="img1" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>

            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>

                        <BCardTitle>With captions</BCardTitle>
                        <p class="card-title-desc">Add captions to your slides easily with the
                            <code>.carousel-caption</code> element within any <code>.carousel-item</code>.
                        </p>

                        <BCarousel class="carousel slide" ride="carousel" :interval="2000" controls>
                            <BCarouselSlide active :img-src="img7">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">First slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                            <BCarouselSlide :img-src="img5">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                            <BCarouselSlide :img-src="img4">
                                <div class="carousel-caption d-none d-md-block text-white-50">
                                    <h5 class="text-white">Third slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </BCarouselSlide>
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>
        </BRow>

        <BRow>
            <BCol xl="6">
                <BCard no-body>
                    <BCardBody>
                        <BCardTitle>Crossfade</BCardTitle>
                        <p class="card-title-desc">Add <code>.carousel-fade</code> to your carousel to animate slides with a fade transition instead of a slide.</p>
                        <BCarousel class="carousel slide carousel-fade" ride="carousel" :interval="2000" controls indicators>
                            <BCarouselSlide active :img-src="img1" />
                            <BCarouselSlide :img-src="img2" />
                            <BCarouselSlide :img-src="img3" />
                        </BCarousel>
                    </BCardBody>
                </BCard>
            </BCol>

        </BRow>
    </Layout>
</template>