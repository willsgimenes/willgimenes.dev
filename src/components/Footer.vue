<template>
    <div id="footer">
        <p>Brazilian Software Developer based in São Paulo (BR).Senior Front-end engineer at <a href="https://www.gympass.com/" target="_blank">@gympass</a></p>
        <p><a href="https://www.github.com/willsgimenes" target="_blank">Github</a> <a href="https://www.linkedin.com/in/william-gimenes/" target="_blank">Linkedin</a></p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style scoped>
    div#footer {
        text-align: left;
        bottom: 0;
        font-size: 14px;
        left: 20px;
        height: 80px;
        padding-top: 16px;
        position: absolute;
        width: 100%;
    }

    p {
        line-height: 1;
    }
</style>
