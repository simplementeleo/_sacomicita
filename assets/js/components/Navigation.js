Vue.component('Navigation', {
    template: //html

    `
    <div>
        <img v-for="i in 2" src="./assets/img/points.png" class="point" alt="Image point">
        <nav class="navbar navbar-expand-lg navbar-light container">
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto py-3">
                    <li v-for="item in items" :class="['nav-item', 'active', item.pr]">
                        <a :class="['nav-link', item.px, item.state ? 'btn-register': '']" href="#">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    `,
    data(){
        return {
            items: [
                {state: true, pr: 'pr-5', px: 'px-4', name: 'inscríbete!'},
                {state: false, pr: 'pr-3', px: '', name: 'inicio'},
                {state: false, pr: 'pr-3', px: '', name: 'nosotros'},
                {state: false, pr: 'pr-3', px: '', name: 'servicios'}
            ]
        }
    }
})