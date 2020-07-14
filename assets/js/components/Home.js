Vue.component('Home', {
    template: //html
    `
    <section class="container">
        <div class="row">
            <h1 class="col-sm-12">{{ title }}</h1>
            <p class="col-md-5 col-sm-12 mt-2">{{ text }}</p>
            <div class="col-md-7"></div>
            <!-- <Search></Search> -->
        </div>
        <button class="mt-4 btn px-5 mb-5 btn-outline-primary">
            {{ button }}
        </button>
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