<template>
    <div class="todos-container">
        <div class="todos-header">
            {{ todoTitle }}
        </div>
        <div>
            <ul class="list-group">
                <li
                    v-bind:class="{ active: item.complete }"
                    class="list-group-item"
                    v-for="item in list"
                    v-bind:key="item.id">
                    {{ item.description }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Todos",
        data() {
            return {
                todoTitle: "List of Todos"
            }
        },
        props: ["list"],
    }
</script>