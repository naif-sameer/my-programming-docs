import{_ as s,c as a,o as l,b as n}from"./app.1e894563.js";const h=JSON.parse('{"title":"Css","description":"","frontmatter":{},"headers":[{"level":2,"title":"li with display flex","slug":"li-with-display-flex"},{"level":3,"title":"not work \u274C","slug":"not-work-\u274C"},{"level":3,"title":"work \u2705","slug":"work-\u2705"}],"relativePath":"issues/css.md","lastUpdated":1656758789000}'),o={name:"issues/css.md"},p=n(`<h1 id="css" tabindex="-1">Css <a class="header-anchor" href="#css" aria-hidden="true">#</a></h1><h2 id="li-with-display-flex" tabindex="-1">li with display flex <a class="header-anchor" href="#li-with-display-flex" aria-hidden="true">#</a></h2><p>if you use <code>display:flex</code> with <code>li</code> it will hide the list <code>:marker</code></p><h3 id="not-work-\u274C" tabindex="-1">not work \u274C <a class="header-anchor" href="#not-work-\u274C" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex gap-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">One</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Two</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="work-\u2705" tabindex="-1">work \u2705 <a class="header-anchor" href="#work-\u2705" aria-hidden="true">#</a></h3><div class="language-html"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex gap-2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">One</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Two</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(c,r,i,D,F,y){return l(),a("div",null,e)}var C=s(o,[["render",t]]);export{h as __pageData,C as default};
