<template>
    <div>
        <AdminNavigation></AdminNavigation>
        <layoutSidenav></layoutSidenav>
    </div>
</template>
<script>
import AdminNavigation from "./AdminNavigation.vue";
import layoutSidenav from "./layoutSidenav.vue";

export default {
    components: {
        AdminNavigation,
        layoutSidenav
    }
};
</script>
