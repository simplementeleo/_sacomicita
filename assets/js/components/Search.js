Vue.component('Search',{
    template: //html
    `
    <div class="input-group col-md-5 mt-2">
        <input type="text" class="form-control px-4" v-model="search" placeholder="Busca tu cita"
            aria-label="Recipient's username" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-primary" type="button" id="button-addon2">Buscar</button>
        </div>
    </div>
    `,
     data(){
         return {
             search: ''
         }
     }
})