import{_ as s,c as n,o as a,b as l}from"./app.1e894563.js";const C=JSON.parse('{"title":"Npm docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basics","slug":"basics"},{"level":2,"title":"Package.json","slug":"package-json"}],"relativePath":"tools/npm.md","lastUpdated":1656144524000}'),p={name:"tools/npm.md"},o=l(`<h1 id="npm-docs" tabindex="-1">Npm docs <a class="header-anchor" href="#npm-docs" aria-hidden="true">#</a></h1><h2 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	npm help-search update</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	npm -v</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	npm </span><span style="color:#82AAFF;">help</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm </span><span style="color:#82AAFF;">help</span><span style="color:#A6ACCD;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	npm list</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm list --global </span><span style="color:#82AAFF;">true</span><span style="color:#A6ACCD;"> --depth 0</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># remove unused package from node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm prune</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	npm init</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm init -y</span></span>
<span class="line"></span></code></pre></div><p>Edit default config init</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	npm config </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> init-author-name </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Naif</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> init-license </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MIT</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># reset init to default</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm config delete init-author-name</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># we use --save to add package to package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm install lodash --save</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># add to dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm install gulp --save-dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># install to global</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm install -g nodemon</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># Does&#39;t install devDependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm install --production</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#676E95;font-style:italic;"># remove packages</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm uninstall gulp --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm remove gulp --save-dev</span></span>
<span class="line"><span style="color:#A6ACCD;">	npm rm gulp --save-dev</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">	npm install loadash@4.17.3 --save</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>Update packages</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">	npm update lodash</span></span>
<span class="line"></span></code></pre></div><h2 id="package-json" tabindex="-1">Package.json <a class="header-anchor" href="#package-json" aria-hidden="true">#</a></h2><p>working with packages version</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">4.17.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">^4.17.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">~4.17.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li><code>4.17.4</code> install exact version</li><li><code>^4.17.4</code> update only to minor</li><li><code>~4.17.4</code> update only patch</li><li><code>*</code> install last version <code>not recommend</code></li></ul><p>add new Script</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node app.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,15),e=[o];function c(t,r,i,D,y,F){return a(),n("div",null,e)}var A=s(p,[["render",c]]);export{C as __pageData,A as default};
