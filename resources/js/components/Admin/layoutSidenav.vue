<template>
    <div id="layoutSidenav">
        <layoutSidenavNav></layoutSidenavNav>
        <layoutSidenavContent></layoutSidenavContent>
    </div>
</template>
<script>
import layoutSidenavNav from "./layoutSidenavNav.vue";
import layoutSidenavContent from "./layoutSidenavContent.vue";

export default {
    components: {
        layoutSidenavNav,
        layoutSidenavContent
    }
};
</script>
