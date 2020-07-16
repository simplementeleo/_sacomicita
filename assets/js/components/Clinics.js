Vue.component('Clinics', {
    template: //html
    `
    <section class="clinics py-5">
        <div class="container">
            <h2 class="text-center py-4" data-aos="flip-up">Trabajan con nosotros</h2>
            <div class="row justify-content-center">
                <div v-for="clinic in clinics" data-aos="zoom-in" :data-aos-duration="clinic.duration" class="col-md-6 col-sm-12 p-3 d-flex justify-content-center">
                    <div class="card p-5">
                        <img :src="'./assets/img/clinics/'+clinic.logo" class="mx-auto p-4" width="200px"
                            alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">{{ clinic.name }}</h5>
                            <p class="card-text">{{ clinic.text }}</p>
                            <a href="#" target="_blank" class="btn btn-block">Solicitar cita</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `,
    data(){
        return {
            clinics: [
                {duration: '100', logo: 'montesur.png', name: 'Montesur', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores placeat mollitia excepturi! Similique!'},
                {duration: '200', logo: 'concebir.png', name: 'Concebir', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dolores placeat mollitia excepturi! Similique!'},
            ]
        }
    }
})