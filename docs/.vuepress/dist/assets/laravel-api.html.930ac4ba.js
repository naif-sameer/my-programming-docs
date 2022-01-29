import{e as a}from"./app.808106a9.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const s={},e=a(`<p>what is REST?</p><blockquote><p><strong>Re</strong>presentational <strong>S</strong>tate Transfer</p></blockquote><p>Put</p><blockquote><p>if you want to replace all data of a specific resource.</p></blockquote><p>PATCH</p><blockquote><p>Whenever you want to update or modify a part of your request.</p></blockquote><h2 id="status-range" tabindex="-1"><a class="header-anchor" href="#status-range" aria-hidden="true">#</a> Status Range</h2><h3 id="_2xx" tabindex="-1"><a class="header-anchor" href="#_2xx" aria-hidden="true">#</a> 2xx</h3><blockquote><p>tells the client a request was successful</p></blockquote><h4 id="_200" tabindex="-1"><a class="header-anchor" href="#_200" aria-hidden="true">#</a> 200</h4><blockquote><p>means ok</p></blockquote><h4 id="_201" tabindex="-1"><a class="header-anchor" href="#_201" aria-hidden="true">#</a> 201</h4><blockquote><p>Created</p></blockquote><h4 id="_204" tabindex="-1"><a class="header-anchor" href="#_204" aria-hidden="true">#</a> 204</h4><blockquote><p>No content</p></blockquote><h3 id="_3xx" tabindex="-1"><a class="header-anchor" href="#_3xx" aria-hidden="true">#</a> 3xx</h3><blockquote><p>Tell the client about redirection</p></blockquote><h4 id="_301" tabindex="-1"><a class="header-anchor" href="#_301" aria-hidden="true">#</a> 301</h4><blockquote><p>moved permanently</p></blockquote><h4 id="_307" tabindex="-1"><a class="header-anchor" href="#_307" aria-hidden="true">#</a> 307</h4><blockquote><p>temporary redirect</p></blockquote><h4 id="_308" tabindex="-1"><a class="header-anchor" href="#_308" aria-hidden="true">#</a> 308</h4><blockquote><p>permanent redirect</p></blockquote><h3 id="_4xx" tabindex="-1"><a class="header-anchor" href="#_4xx" aria-hidden="true">#</a> 4xx</h3><blockquote><p>tells the client that there has been an error</p></blockquote><h4 id="_400" tabindex="-1"><a class="header-anchor" href="#_400" aria-hidden="true">#</a> 400</h4><blockquote><p>bad request server only tells that rhe request can&#39;t be processed</p></blockquote><h4 id="_401" tabindex="-1"><a class="header-anchor" href="#_401" aria-hidden="true">#</a> 401</h4><blockquote><p>Unauthorized</p></blockquote><h4 id="_403" tabindex="-1"><a class="header-anchor" href="#_403" aria-hidden="true">#</a> 403</h4><blockquote><p>forbidden</p></blockquote><h4 id="_404" tabindex="-1"><a class="header-anchor" href="#_404" aria-hidden="true">#</a> 404</h4><blockquote><p>Not found</p></blockquote><h4 id="_405" tabindex="-1"><a class="header-anchor" href="#_405" aria-hidden="true">#</a> 405</h4><blockquote><p>Method not allowed when you perform a GET when it expects a POST</p></blockquote><h4 id="_422" tabindex="-1"><a class="header-anchor" href="#_422" aria-hidden="true">#</a> 422</h4><blockquote><p>unprocessable entity Invalid data has been sent</p></blockquote><h3 id="_5xx" tabindex="-1"><a class="header-anchor" href="#_5xx" aria-hidden="true">#</a> 5xx</h3><blockquote><p>Statuses that deal with the server</p></blockquote><h4 id="_500" tabindex="-1"><a class="header-anchor" href="#_500" aria-hidden="true">#</a> 500</h4><blockquote><p>Internal Server error</p></blockquote><h4 id="_501" tabindex="-1"><a class="header-anchor" href="#_501" aria-hidden="true">#</a> 501</h4><blockquote><p>Not implemented Server does not know how to handle the request Might be available in the future</p></blockquote><h4 id="_502-bad-gateway-invalid-response" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway-invalid-response" aria-hidden="true">#</a> 502 Bad gateway invalid response</h4><h4 id="_503-service-unavailable-down-for-maintenance" tabindex="-1"><a class="header-anchor" href="#_503-service-unavailable-down-for-maintenance" aria-hidden="true">#</a> 503 service unavailable down for maintenance</h4><h4 id="_504-gateway-timeout" tabindex="-1"><a class="header-anchor" href="#_504-gateway-timeout" aria-hidden="true">#</a> 504 Gateway timeout</h4><h2 id="json-api-specifications" tabindex="-1"><a class="header-anchor" href="#json-api-specifications" aria-hidden="true">#</a> Json api specifications</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token string">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;books&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;attributes&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hi new year&quot;</span><span class="token punctuation">,</span>
		<span class="token string">&quot;publication_year&quot;</span><span class="token operator">:</span> <span class="token number">2010</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token doc-comment comment">/**
	 * Relationships members
	 * - Links
	 * 	 - Self
	 * 	 - Related
	 * - Data
	 * - Meta
	 * 
	 * */</span>
	<span class="token string">&quot;relationships&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">// data</span>
		<span class="token string">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bla&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">{</span>
				<span class="token string">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
				<span class="token string">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bla&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>

		<span class="token doc-comment comment">/**
		 * - Pagination
		 * 	- first
		 * 	- last
		 * 	- prev
		 * 	- next
		 */</span>
		<span class="token string">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string">&quot;first&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com/books?page=1&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;last&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com/books?page=10&quot;</span><span class="token punctuation">,</span>
			<span class="token string">&quot;prev&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
			<span class="token string">&quot;next&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com/books?page=2&quot;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="setup-laravel-passport" tabindex="-1"><a class="header-anchor" href="#setup-laravel-passport" aria-hidden="true">#</a> setup laravel passport</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">composer</span> require laravel/passport

<span class="token comment"># run passport</span>
php artisan migrate
php artisan passport:install

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,50);function t(p,r){return e}var c=n(s,[["render",t]]);export{c as default};
