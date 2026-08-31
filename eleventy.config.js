const markdownIt = require("markdown-it")();

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addGlobalData("layout", "base.njk");
  eleventyConfig.addFilter("markdownInline", (content) =>
    markdownIt.renderInline(content || "")
  );
  eleventyConfig.addFilter("markdown", (content) =>
    markdownIt.render(content || "")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    pathPrefix: "/herz-und-hilfe/",
  };
};
