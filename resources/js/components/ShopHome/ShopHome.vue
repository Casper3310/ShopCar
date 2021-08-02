<template>
    <div>
        <Navigation></Navigation>
        <Section></Section>
        <Footer></Footer>
    </div>
</template>
<script>
import Navigation from "./Navigation.vue";
import Header from "./Header.vue";
import Section from "./Section.vue";
import Footer from "./Footer.vue";

export default {
    components: {
        Navigation,
        Header,
        Section,
        Footer
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    destroy() {}
};
</script>
