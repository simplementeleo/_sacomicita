Vue.component('Weare', {
    template: //html
    `
    <section class="weare">
       <div class="triangle-main">
            <div class="triangle"></div>
       </div>
        <div class="container d-flex flex-column align-items-center">
            <h2 class="text-center mb-3" data-aos="zoom-in">Nosotros</h2>
            <img v-for="image in images" data-aos="fade-up-right" :data-aos-duration="image.duration" data-aos-anchor-placement="tops-center" :src="'./assets/img/'+image.name" :class="[image.class,'mt-5']"
                :alt="image.alt">
            <div class="row justify-content-center">
                <p data-aos="fade-up-right" data-aos-anchor-placement="bottom-bottom" data class="col-md-5 col-sm-12 text-center mt-4 py-4">
                    {{ text }}
                </p>
            </div>
        </div>
    </section>
    `,
    data(){
        return {
            images: [
                {duration: '100', name: 'world.png', class: 'world', alt: 'World Image'},
                {duration: '200', name: 'points.png', class: '', alt: 'Points Image'},
                {duration: '300', name: 'points.png', class: '', alt: 'Points Image'},
                {duration: '400', name: '/avatars/1.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '500', name: '/avatars/2.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '600', name: '/avatars/3.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '700', name: '/avatars/4.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '800', name: '/avatars/5.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '900', name: '/avatars/6.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '1000', name: '/avatars/7.jpg', class: 'avatar', alt: 'Avatar Image'},
                {duration: '100', name: '/avatars/8.jpg', class: 'avatar', alt: 'Avatar Image'}
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores commodi officia officiis voluptatum atque, sed ea ducimus recusandae placeat!'
        }
    }
})