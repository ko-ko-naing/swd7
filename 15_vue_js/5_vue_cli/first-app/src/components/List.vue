<template>
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>I'm List {{ count }}</span>
        <div>
            <button class="btn btn-sm btn-primary mr-2" @click="like()">like</button>
            <button class="btn btn-sm btn-danger" @click="dislike()">Dislike</button>
        </div>
    </li>
</template>

<script>
    export default {
        name : "List",
        data() {
            return {
                count: 0
            }
        },
        methods: {
            like() {
               return ++this.count
            },

            dislike(){
                return --this.count
            }


        },
    }
</script>

<style scoped>

</style>