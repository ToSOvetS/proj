<script>
    export default {
        data() {
            image: 'src/assets/hide.png',
            type: 'password'
        },

        methods: {
            toggle(){
                if (this.type == "password"){
                    this.image = "src/assets/show.png";
                    this.type = "text"; 
                } else{
                    this.image = "src/assets/hide.png";
                    this.type = "password";
                }

            }
        }
    }
</script>

<template>
    <div class="password-input">
        <div class="input-group mb-3">          
            <input :type="type" value="1234" class="form-control" >
            <button class="btn btn-outline-secondary" @click="toggle">
                <img :src="image">
            </button>
        </div>
    </div>
</template>


<style>
.password-input img {
    height: 24px;
}
</style>
