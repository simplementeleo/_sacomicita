Vue.component('Footering',{
    template: //html
    `
    <footer>
    <div class="container text-white">
        <div class="row py-5">
            <div class="col-md-4 col-sm-12 mt-2">
                <h3>Saco mi cita</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quasi ea, ipsum dignissimos
                    animi ad?</p>
            </div>
            <div class="col-md-4 col-sm-12 mt-2">
                <h3>Especialidades</h3>
                <p v-for="speciality in specialities">
                    <a :href="speciality.url" target="_blank">{{ speciality.name }}</a>
                </p>
            </div>
            <div class="col-md-4 col-sm-12 mt-2">
                <h3>Contáctanos</h3>
                <p>+00 - 000 - 0000 / +00 - 000 - 0000</p>
                <h4>Síguenos en</h4>
                <p v-for="social in socials">
                    <a :href="social.url" target="_blank" :class="social.class">{{ social.name }}</a>
                </p>
            </div>
        </div>
    </div>
    <div class="copyright py-2 d-flex justify-content-center">
        &copy; Todos los derechos reservados - Sacomicita
    </div>
</footer>
    `,
    data(){
        return {
            specialities: [
                {url: '#', name: 'Dermatología'},
                {url: '#', name: 'Ginecología'},
                {url: '#', name: 'Cardiología'},
                {url: '#', name: 'Psicología'}
            ],
            socials: [
                {url: '#', class: 'facebook', name: 'Facebook'},
                {url: '#', class: 'instagram', name: 'Instagram'},
                {url: '#', class: 'twitter', name: 'Twitter'}
            ]
        }
    }
})