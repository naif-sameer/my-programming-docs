import{_ as s,c as o,o as n,b as a}from"./app.1e894563.js";const u=JSON.parse('{"title":"Mongodb docs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install MongoDB","slug":"install-mongodb"},{"level":2,"title":"Json and Bson","slug":"json-and-bson"},{"level":2,"title":"mongodb documents","slug":"mongodb-documents"}],"relativePath":"database/mongodb.md","lastUpdated":1656758789000}'),e={name:"database/mongodb.md"},l=a(`<h1 id="mongodb-docs" tabindex="-1">Mongodb docs <a class="header-anchor" href="#mongodb-docs" aria-hidden="true">#</a></h1><p>Mongodb editions</p><ul><li>MongoDb community server (free) <strong>download it for your pc</strong></li><li>mongodb enterprise server (paid)</li><li>MongoDb Atlas (cloud)</li></ul><h2 id="install-mongodb" tabindex="-1">Install MongoDB <a class="header-anchor" href="#install-mongodb" aria-hidden="true">#</a></h2><ol><li>download <strong>mongodb community server</strong></li><li>install the application <ul><li>install mongodb as a service</li></ul></li><li>install <strong>Mongodb compass community version (free)</strong></li></ol><h2 id="json-and-bson" tabindex="-1">Json and Bson <a class="header-anchor" href="#json-and-bson" aria-hidden="true">#</a></h2><p><strong>Bson</strong> Stands for Binary JSON, which is a binary-coded serialization of JSON-like documents</p><h2 id="mongodb-documents" tabindex="-1">mongodb documents <a class="header-anchor" href="#mongodb-documents" aria-hidden="true">#</a></h2><p>mongodb stores data records as BSON documents, which are simply called documents.</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#FFCB6B;">_id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ObjectId</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">398948384989f9090duf09uf09du9df</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my title</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>value can <code>numbers</code>, <code>string</code>, <code>objects</code>, <code>arrays</code>, ...etc.</p>`,11),t=[l];function d(r,c,i,p,m,g){return n(),o("div",null,t)}var h=s(e,[["render",d]]);export{u as __pageData,h as default};
