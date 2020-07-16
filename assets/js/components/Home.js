Vue.component('Home', {
    template: //html
    `
    <section class="container">
        <div class="row">
            <h1 class="col-sm-12" data-aos="fade-down" data-aos-anchor-placement="top-center">{{ title }}</h1>
            <p class="col-md-5 col-sm-12 mt-2" data-aos="fade-up" data-aos-anchor-placement="top-center">{{ text }}</p>
            <div class="col-md-7"></div>
            <!-- <Search></Search> -->
        </div>
        <a href="#c">
            <button data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" class="mt-4 btn px-5 mb-5 btn-outline-primary">
            {{ button }}
            </button>
        </a>
    </section>
    `,
    data(){
        return {
            title: 'SACO MI CITA',
            text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim minus deserunt odio ratione aliquid sequi.',
            button: 'Quiero una cita ¡YA!'
        }
    }
})