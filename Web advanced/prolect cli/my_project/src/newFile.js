export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        HeaderMenuComp,
        HomePageComp,
        BlogPageComp,
        DetailsPageComp,
        ProjectComp,
        FooterComp
    }
});
