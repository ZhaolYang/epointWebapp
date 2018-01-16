import marked from 'marked';
import highlight from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

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
        return highlight.highlightAuto(code).value;
    }
});

let install = function(Vue){
    /* istanbul ignore if */
    if (install.installed) return;
    Vue.directive('marked',{
      //注意，这儿得使用bind钩子函数，因为我们使用此指令主要是为了写文档，
      //文档里不会有变量且一次性生成,而update在自定义指令所在模板变化时就会重新执行，
      //会影响渲染文档的方法，所以不能使用update钩子，也不能使用函数简写
      bind:function(el,binding,vnode){
        el.innerHTML = marked(el.innerText);
      }
    })
}

export default install;