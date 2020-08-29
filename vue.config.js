module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                  @import "@/sass/abstracts/_variables.scss";
                  @import "@/sass/abstracts/_mixins.scss";
                  @import "@/sass/abstracts/_functions.scss";
                  @import "@/sass/abstracts/_placeholders.scss";
                  @import "@/sass/components/_label.scss";
                  @import "@/sass/components/_price.scss";
                  @import "@/sass/components/_fav.scss";
                  @import "@/sass/components/_link.scss";
                  @import "@/sass/components/_headings.scss";
                  @import "@/sass/components/_img-group.scss";
                `
            }

        }
    }
};