<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="heading my-3">
                    <h4>
                        {{ test }}
                    </h4>
                </div>
                <div class="content">
                    <Todos v-bind:list="todos"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Todos from "./Todos"

    export default {
        name: "Layout",
        components: {
            Todos
        },
        data() {
            return {
                test: "This is just a simple layout",
                todos: [
                    {
                        id: 1,
                        description: "Go to the park",
                        complete: false
                    },
                    {
                        id: 2,
                        description: "Work at home",
                        complete: true
                    },
                    {
                        id: 3,
                        description: "Visit Grand Pa",
                        complete: false
                    }
                ]
            }
        }
    }
</script>