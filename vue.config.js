module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/sass/abstracts/_variables.scss";
                  @import "@/sass/abstracts/_mixins.scss";
                  @import "@/sass/abstracts/_functions.scss";
                  @import "@/sass/abstracts/_placeholders.scss";

                `
            }

        }
    }
};