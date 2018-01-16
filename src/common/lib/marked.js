import marked from 'marked';
import 'highlight.js/styles/monokai-sublime.css'


marked.setOptions({
  renderer: new marked.Renderer(),
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


let install = function(Vue){
	/* istanbul ignore if */
	if (install.installed) return;
	Vue.directive('marked',function(el,binding,vnode){
        let html = el.innerHTML;
        if(el.classList.contains('css')||el.classList.contains('javascript')){
            html.replace(/&lt;/,'<');
            html = html.replace(/&lt;/,'<').replace(/&gt;/,'>');
        }
		el.innerHTML = marked(html);
	})
}

export default install;