import{_ as a,c as s,o as e,b as n}from"./app.cccf0617.js";const F=JSON.parse('{"title":"laravel-php.md","description":"","frontmatter":{},"headers":[{"level":2,"title":"Laravel PATCH and PUT Request Does not Working with JS form-data","slug":"laravel-patch-and-put-request-does-not-working-with-js-form-data"},{"level":2,"title":"SQLSTATE[23000]: Integrity constraint violation: 4025 CONSTRAINT","slug":"sqlstate-23000-integrity-constraint-violation-4025-constraint"}],"relativePath":"issues/laravel-php.md","lastUpdated":1656758789000}'),t={name:"issues/laravel-php.md"},o=n(`<h1 id="laravel-php-md" tabindex="-1"><a href="http://laravel-php.md" target="_blank" rel="noopener noreferrer">laravel-php.md</a> <a class="header-anchor" href="#laravel-php-md" aria-hidden="true">#</a></h1><h2 id="laravel-patch-and-put-request-does-not-working-with-js-form-data" tabindex="-1">Laravel PATCH and PUT Request Does not Working with JS form-data <a class="header-anchor" href="#laravel-patch-and-put-request-does-not-working-with-js-form-data" aria-hidden="true">#</a></h2><p>This is a known issue and the workaround suggestion as per the following Github comment is that when sending a PATCH / PUT requests you should do the following.</p><p>:: info You should send POST and set _method to PUT (same as sending forms) to make your files visible ::</p><p><a href="https://stackoverflow.com/a/50691997/19299063" target="_blank" rel="noopener noreferrer">source</a></p><h2 id="sqlstate-23000-integrity-constraint-violation-4025-constraint" tabindex="-1">SQLSTATE[23000]: Integrity constraint violation: 4025 CONSTRAINT <a class="header-anchor" href="#sqlstate-23000-integrity-constraint-violation-4025-constraint" aria-hidden="true">#</a></h2><p>if you save non-json into <code>$table-&gt;json(&#39;my-column&#39;)</code> field this error occurred like this:</p><div class="language-php"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">Address</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">=&gt;</span><span style="color:#82AAFF;">json_encode</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">request</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,8),r=[o];function l(p,i,c,d,h,u){return e(),s("div",null,r)}var _=a(t,[["render",l]]);export{F as __pageData,_ as default};