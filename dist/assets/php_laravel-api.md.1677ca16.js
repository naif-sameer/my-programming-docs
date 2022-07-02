import{_ as s,c as a,o as n,b as e}from"./app.1e894563.js";const D=JSON.parse('{"title":"Status Range","description":"","frontmatter":{},"headers":[{"level":2,"title":"Status Range","slug":"status-range"},{"level":3,"title":"2xx","slug":"_2xx"},{"level":3,"title":"3xx","slug":"_3xx"},{"level":3,"title":"4xx","slug":"_4xx"},{"level":3,"title":"5xx","slug":"_5xx"},{"level":2,"title":"Json api specifications","slug":"json-api-specifications"},{"level":2,"title":"setup laravel passport","slug":"setup-laravel-passport"}],"relativePath":"php/laravel-api.md","lastUpdated":1656758789000}'),l={name:"php/laravel-api.md"},t=e(`<p>what is REST?</p><blockquote><p><strong>Re</strong>presentational <strong>S</strong>tate Transfer</p></blockquote><p>Put</p><blockquote><p>if you want to replace all data of a specific resource.</p></blockquote><p>PATCH</p><blockquote><p>Whenever you want to update or modify a part of your request.</p></blockquote><h2 id="status-range" tabindex="-1">Status Range <a class="header-anchor" href="#status-range" aria-hidden="true">#</a></h2><h3 id="_2xx" tabindex="-1">2xx <a class="header-anchor" href="#_2xx" aria-hidden="true">#</a></h3><blockquote><p>tells the client a request was successful</p></blockquote><h4 id="_200" tabindex="-1">200 <a class="header-anchor" href="#_200" aria-hidden="true">#</a></h4><blockquote><p>means ok</p></blockquote><h4 id="_201" tabindex="-1">201 <a class="header-anchor" href="#_201" aria-hidden="true">#</a></h4><blockquote><p>Created</p></blockquote><h4 id="_204" tabindex="-1">204 <a class="header-anchor" href="#_204" aria-hidden="true">#</a></h4><blockquote><p>No content</p></blockquote><h3 id="_3xx" tabindex="-1">3xx <a class="header-anchor" href="#_3xx" aria-hidden="true">#</a></h3><blockquote><p>Tesll the client about redirection</p></blockquote><h4 id="_301" tabindex="-1">301 <a class="header-anchor" href="#_301" aria-hidden="true">#</a></h4><blockquote><p>moved permanently</p></blockquote><h4 id="_307" tabindex="-1">307 <a class="header-anchor" href="#_307" aria-hidden="true">#</a></h4><blockquote><p>temporary redirect</p></blockquote><h4 id="_308" tabindex="-1">308 <a class="header-anchor" href="#_308" aria-hidden="true">#</a></h4><blockquote><p>permanent redirect</p></blockquote><h3 id="_4xx" tabindex="-1">4xx <a class="header-anchor" href="#_4xx" aria-hidden="true">#</a></h3><blockquote><p>tells the client that there has been an error</p></blockquote><h4 id="_400" tabindex="-1">400 <a class="header-anchor" href="#_400" aria-hidden="true">#</a></h4><blockquote><p>bad request server only tells that rhe request can&#39;t be processed</p></blockquote><h4 id="_401" tabindex="-1">401 <a class="header-anchor" href="#_401" aria-hidden="true">#</a></h4><blockquote><p>Unauthorized</p></blockquote><h4 id="_403" tabindex="-1">403 <a class="header-anchor" href="#_403" aria-hidden="true">#</a></h4><blockquote><p>forbidden</p></blockquote><h4 id="_404" tabindex="-1">404 <a class="header-anchor" href="#_404" aria-hidden="true">#</a></h4><blockquote><p>Not found</p></blockquote><h4 id="_405" tabindex="-1">405 <a class="header-anchor" href="#_405" aria-hidden="true">#</a></h4><blockquote><p>Method not allowed when you perform a GET when it expects a POST</p></blockquote><h4 id="_422" tabindex="-1">422 <a class="header-anchor" href="#_422" aria-hidden="true">#</a></h4><blockquote><p>unprocessable entity Invalid data has been sent</p></blockquote><h3 id="_5xx" tabindex="-1">5xx <a class="header-anchor" href="#_5xx" aria-hidden="true">#</a></h3><blockquote><p>Statuses that deal with the server</p></blockquote><h4 id="_500" tabindex="-1">500 <a class="header-anchor" href="#_500" aria-hidden="true">#</a></h4><blockquote><p>Internal Server error</p></blockquote><h4 id="_501" tabindex="-1">501 <a class="header-anchor" href="#_501" aria-hidden="true">#</a></h4><blockquote><p>Not implemented Server does not know how to handle the request Might be available in the future</p></blockquote><h4 id="_502-bad-gateway-invalid-response" tabindex="-1">502 Bad gateway invalid response <a class="header-anchor" href="#_502-bad-gateway-invalid-response" aria-hidden="true">#</a></h4><h4 id="_503-service-unavailable-down-for-maintenance" tabindex="-1">503 service unavailable down for maintenance <a class="header-anchor" href="#_503-service-unavailable-down-for-maintenance" aria-hidden="true">#</a></h4><h4 id="_504-gateway-timeout" tabindex="-1">504 Gateway timeout <a class="header-anchor" href="#_504-gateway-timeout" aria-hidden="true">#</a></h4><h2 id="json-api-specifications" tabindex="-1">Json api specifications <a class="header-anchor" href="#json-api-specifications" aria-hidden="true">#</a></h2><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">books</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">attributes</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hi new year</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">publication_year</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2010</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * Relationships members</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * - Links</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * 	 - Self</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * 	 - Related</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * - Data</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * - Meta</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">	 * */</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">relationships</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">		</span><span style="color:#676E95;font-style:italic;">// data</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bla</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">				</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">bla</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">		]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 * - Pagination</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 * 	- first</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 * 	- last</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 * 	- prev</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 * 	- next</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">		 */</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">links</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">first</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com/books?page=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">last</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com/books?page=10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">prev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">			</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">next</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example.com/books?page=2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="setup-laravel-passport" tabindex="-1">setup laravel passport <a class="header-anchor" href="#setup-laravel-passport" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">composer require laravel/passport</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># run passport</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"><span style="color:#A6ACCD;">php artisan passport:install</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,50),o=[t];function p(r,c,i,F,y,d){return n(),a("div",null,o)}var u=s(l,[["render",p]]);export{D as __pageData,u as default};
