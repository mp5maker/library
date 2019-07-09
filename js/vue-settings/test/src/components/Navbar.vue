<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark text-white">
        <a class="navbar-brand">
            {{ title }}
        </a>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                title: "Vue Testing"
            }
        }
    }
</script>