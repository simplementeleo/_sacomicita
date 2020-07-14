Vue.component('Weare', {
    template: //html
    `
    <section class="weare">
        <div class="container d-flex flex-column align-items-center">
            <h2 class="text-center mb-3">Nosotros</h2>
            <img v-for="image in images" :src="'./assets/img/'+image.name" :class="[image.class,'mt-5']"
                :alt="image.alt">
            <div class="row justify-content-center">
                <p class="col-md-5 col-sm-12 text-center mt-4 py-4">
                    {{ text }}
                </p>
            </div>
        </div>
    </section>
    `,
    data(){
        return {
            images: [
                {name: 'world.png', class: 'world', alt: 'World Image'},
                {name: 'points.png', class: '', alt: 'Points Image'},
                {name: 'points.png', class: '', alt: 'Points Image'},
                {name: '/avatars/1.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/2.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/3.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/4.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/5.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/6.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/7.jpg', class: 'avatar', alt: 'Avatar Image'},
                {name: '/avatars/8.jpg', class: 'avatar', alt: 'Avatar Image'}
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maiores commodi officia officiis voluptatum atque, sed ea ducimus recusandae placeat!'
        }
    }
})