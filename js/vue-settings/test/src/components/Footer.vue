<template>
    <footer>
        {{ date }} &copy; All Rights Reserved, Photon Development
    </footer>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                date: `${new Date().getFullYear()}`
            }
        }
    }

</script>