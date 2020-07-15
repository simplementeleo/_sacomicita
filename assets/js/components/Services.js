Vue.component('Services', {
    template: //html
    `
    <div class="triangle-main">
        <div class="triangle"></div>
        <section class="services">
            <h2 class="text-center">Servicios</h2>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 col-sm-6 align-self-end">
                        <img src="./assets/img/e-1.png" class="img-e1" alt="Doctor">
                    </div>
                    <div class="col-md-8 col-sm-12 pb-5">
                        <div class="items">
                            <div class="row justify-content-end">
                                <div class="col-sm-12 text-center">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">


                                            <div v-for="service in services" :class="['carousel-item', service.status]">
                                                <img class="d-block w-100" :src="'./assets/img/services/'+service.image"
                                                    alt="First slide">
                                                <div class="content">
                                                    <h2 class="text-left">{{service.title}}</h2>
                                                    <p>{{ service.text }}</p>
                                                </div>
                                            </div>


                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                                            data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Siguiente</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                                            data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Anterior</span>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
    `,
    data(){
        return {
            services: [
                {status: 'active',title: 'Cardiología', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.', image: 'cardiology.jpg'},
                {status: '',title: 'Psicología', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.', image: 'psychology.jpg'},
                {status: '',title: 'Dermatología', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.', image: 'dermatology.jpg'},
                {status: '',title: 'Ginecología', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.', image: 'ginecology.jpg'},

            ]
        }
    }
})