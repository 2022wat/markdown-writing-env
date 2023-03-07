module.exports = {
  title: 'markdown-writing-env', // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'wat2022 <kushida98@gmail.com>', // default to `author` in `package.json` or undefined.
  language: 'ja', // default to undefined.
  size: 'JIS-B5', // paper size.
  theme: 'theme', // .css or local dir or npm package. default to undefined.
  entryContext: './articles',
  entry: [
    {
      // 扉ページ
      path: "index.md",
      // path: "index.html", // htmlファイルを使用する場合
      title: "目次"
    },

    // 第1部
    {
      // 第1部の扉ページ
      path: "01_title/index.md",
      // path: "01_title/index.html", // htmlファイルを使用する場合
      title: "第1部 タイトル"
    },
    // 以下、第1部が続く
    "01_title/01.md",
    "01_title/02.md",
    "01_title/03.md",

    // 第2部
    {
      // 第2部の扉ページ
      path: "02_title/index.md",
      // path: "02_title/index.html", // htmlファイルを使用する場合
      title: "第2部 タイトル"
    },
    // 以下、第2部が続く
    "02_title/01.md",
    "02_title/02.md",
    "02_title/03.md",

    // 第3部
    {
      // 第3部の扉ページ
      path: "03_title/index.md",
      // path: "03_title/index.html", // htmlファイルを使用する場合
      title: "第3部 タイトル"
    },
    // 以下、第3部が続く
    "03_title/01.md",
    "03_title/02.md",
    "03_title/03.md",

    // あとがき、奥付
    "colophon.md"
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  output: [ // path to generate draft file(s). default to '{title}.pdf'
    './output.pdf', // the output format will be inferred from the name.
    {
      path: './dist',
      format: 'webpub',
    },
  ],
  // workspaceDir: '.vivliostyle', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  // cover: './cover.png', // cover image. default to undefined.
  // vfm: { // options of VFM processor
  //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
  //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  // },
}
