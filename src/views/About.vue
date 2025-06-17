<template>
    <div>
        <h2>Users  about info</h2>
        <p>User about ID: {{ id }}</p>
    </div>
</template>

<script>
    export default{
        props: ["id"]
    }
</script>