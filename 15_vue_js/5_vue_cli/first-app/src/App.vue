<template>
    <div class="p-3">

        <Title></Title>

       <ul class="list-group">

           <List></List>
           <List></List>
           <List></List>
           <List></List>
           <List></List>
           <List></List>
       </ul>

    </div>
</template>

<script>
    // component call
    // import
    // component property ကြေငြာပေးရမယ်
    import List from "./components/List";
    import Title from "./components/Title";
    export default {
        name : "App",
        components: {Title, List},
    }
</script>

<style scoped>

</style>