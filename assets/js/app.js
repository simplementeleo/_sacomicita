
const app = new Vue({
    el: '#app',
    mounted(){
        window.addEventListener('load', () => {
           document.querySelector('.holder').classList.add('hidden')
        })
    }
});

AOS.init();