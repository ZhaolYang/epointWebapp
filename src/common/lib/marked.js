import marked from 'marked';
import 'highlight.js/styles/vs.css'

// 重写渲染方法，将md语法中的所有内容进行转义
let mdRenderer = new marked.Renderer();
// mdRenderer.code = function(code, lang){

//   let html = [];
//   code = encodeHtml(code);
//   html.push('<pre>');
//   html.push('<code class="'+ lang +'">'+code+'</code>');
//   html.push('</pre>');
//   let str = html.join().replace(/&lt;/,'<').replace(/&gt;/,'>');
//   console.log(str)
//   if (this.options.highlight) {
//     var out = this.options.highlight(code);
//     if (out != null && out !== code) {
//       // escaped = true;
//       code = out;
//     }
//   }
//   return str;

//   // return html.join('');
// }

// function encodeHtml(str) {
//   var div = document.createElement("div");
//       div.appendChild(document.createTextNode(str));
//       return div.innerHTML;
// }

marked.setOptions({
  renderer: mdRenderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

let install = function (Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  Vue.directive('marked', function (el, binding, vnode) {

    let html = el.innerHTML;
    if (el.classList.contains('css') || el.classList.contains('javascript')) {
      html = html.replace(/&lt;/, '<').replace(/&gt;/, '>');
    }
    el.innerHTML = marked(html);
  })
}

export default install;