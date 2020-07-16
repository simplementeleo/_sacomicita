Vue.component('Inscription', {
    template: //html
        `
    <div>
        <section class="inscription py-5">
            <div class="container pb-5">
                <div class="row justify-content-center pb-3">

                    <div class="col-md-7 d-flex flex-column ">
                        <div data-aos="zoom-in" class="card p-5">
                            <h2 class="text-center">{{ text }}</h2>
                            <button @click="dialog = !dialog" class="btn mt-4">
                                {{ button }}
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section :class="['form-inscription', dialog ? 'dialog-show': 'dialog-hidden']">
        <div class="bg-main"></div>
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6 col-sm-12">
                    <div class="card">
                        <img src="./assets/img/inscription.jpg" class="card-img-top" alt="B">
                        <div class="card-body">
                            <span @click="dialog = !dialog" class="d-flex justify-content-center align-items-center text-white">&times;</span>
                            <form>
                                <div class="form-row">
                                    <div class="col-6">
                                        <input type="text" class="form-control" placeholder="Nombre" v-model="medic.name">
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control" placeholder="Apellido" v-model="medic.surname">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <input type="text" class="form-control" placeholder="País" v-model="medic.country">
                                    </div>
                                    <div class="col-12 mt-3">
                                        <select class="custom-select" v-model="medic.code">
                                            <option selected>Código del colegio médico</option>
                                            <option v-for="option in options" :value="option.value">{{ option.name }}</option>
                                        </select>
                                    </div>
                                    <div class="col-12 mt-3">
                                        <input type="text" class="form-control" placeholder="DNI" v-model="medic.dni">
                                    </div>
                                </div>
                            </form>
                            <button href="#" class="btn btn-primary btn-block mt-3" @click="register(medic)">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

    </div>
    `,
    data() {
        return {
            text: `¿Tienes otra especialidad? Inscribete GRATIS! Y trabaja desde la comodidad de tu hogar`,
            button: 'Estoy interesado',
            medic: {},
            options: [{
                    value: 'codValue1',
                    name: '1 Código'
                },
                {
                    value: 'codValue2',
                    name: '2 Código'
                }
            ],
            dialog: false
        }
    },
    methods: {
        register(medic) {
            console.log(medic)
        },
    },

})