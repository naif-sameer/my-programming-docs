import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="laravel-docs" tabindex="-1"><a class="header-anchor" href="#laravel-docs" aria-hidden="true">#</a> laravel docs</h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> install</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	<span class="token function">composer</span> create-project laravel/laravel example-app

<span class="token comment"># if you want to create a Git repository</span>
	laravel new example-app --git

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="serve-the-application" tabindex="-1"><a class="header-anchor" href="#serve-the-application" aria-hidden="true">#</a> serve the application</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>	php artisan serve			
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="working-with-env-file" tabindex="-1"><a class="header-anchor" href="#working-with-env-file" aria-hidden="true">#</a> working with .env file</h2><blockquote><p>Laravel&#39;s .env file contains configuration values. These values are then retrieved from various Laravel configuration files within the config directory using Laravel&#39;s <code>env</code> function.</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;SERVER_NAME&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;default value here&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>The second value passed to the env function is the &quot;default value&quot;. This value will be returned if no environment variable exists for the given key.</p></blockquote><h2 id="print-to-the-page" tabindex="-1"><a class="header-anchor" href="#print-to-the-page" aria-hidden="true">#</a> print to the page</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">print_r</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment"># var or array to print it on the page;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="route" tabindex="-1"><a class="header-anchor" href="#route" aria-hidden="true">#</a> route</h2><blockquote><p>The web.php file contains routes that the RouteServiceProvider places in the web middleware group, which provides session state, CSRF protection, and cookie encryption. If your application does not offer a stateless, RESTful API then it is likely that all of your routes will most likely be defined in the web.php file.</p></blockquote><blockquote><p>The api.php file contains routes that the RouteServiceProvider places in the api middleware group. These routes are intended to be stateless, so requests entering the application through these routes are intended to be authenticated via tokens and will not have access to session state.</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment"># route to send res</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/users&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

	<span class="token comment">// blade templates </span>
	<span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;users&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// string</span>
	<span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;users page &#39;</span><span class="token punctuation">;</span>

	<span class="token comment">// laravel auto convert array to json</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;user 1&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;user 2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// res a json obj</span>
	<span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;ali&#39;</span><span class="token punctuation">,</span>
		<span class="token string single-quoted-string">&#39;age&#39;</span><span class="token operator">=&gt;</span> <span class="token number">30</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// function</span>
	<span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>


<span class="token comment"># working with controller *new in laravel 8*</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">NameController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># or</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;App\\Http\\Controller\\NameController@index&#39;</span><span class="token punctuation">)</span>


<span class="token comment"># ---------- old laravel syntax before 8 not working anymore ------</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;HomeController@index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="route-parameters" tabindex="-1"><a class="header-anchor" href="#route-parameters" aria-hidden="true">#</a> Route Parameters</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># route file</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home/{id}&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HomeController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;show&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># controller file</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#--------- make the user only input the id as an integer -------</span>
<span class="token comment"># using where method</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home/{id}&#39;</span><span class="token punctuation">,</span>
 <span class="token punctuation">[</span><span class="token class-name static-context">HomeController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
 <span class="token string single-quoted-string">&#39;show&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;[0-9]+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># where method on multiple routes</span>
<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home/{name}/{id}&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span><span class="token class-name static-context">HomeController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;show&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;[a-z]+&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;id&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;[0-9]+&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="named-routes" tabindex="-1"><a class="header-anchor" href="#named-routes" aria-hidden="true">#</a> Named Routes</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HomeController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;index&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="routes-with-resource" tabindex="-1"><a class="header-anchor" href="#routes-with-resource" aria-hidden="true">#</a> routes with resource</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment"># web.php</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controller<span class="token punctuation">\\</span>HomeController</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token class-name static-context">HomeController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># HomeController.php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">HomeController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
<span class="token doc-comment comment">/**
     * Display a listing of the resource.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">dd</span><span class="token punctuation">(</span><span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Show the form for creating a new resource.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">create</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$req</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Store a newly created resource in storage.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>  <span class="token parameter">$request</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>


        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;{done: true}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Display the specified resource.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">int</span></span>  <span class="token parameter">$id</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">show</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;test show&#39;</span> <span class="token operator">.</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Show the form for editing the specified resource.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">int</span></span>  <span class="token parameter">$id</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">edit</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;test edit &#39;</span> <span class="token operator">.</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Update the specified resource in storage.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span>  <span class="token parameter">$request</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">int</span></span>  <span class="token parameter">$id</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$arr</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$arr</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Remove the specified resource from storage.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">int</span></span>  <span class="token parameter">$id</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Response</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;test destroy &#39;</span> <span class="token operator">.</span> <span class="token variable">$id</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>	

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br></div></div><h3 id="routes-accessing-the-request" tabindex="-1"><a class="header-anchor" href="#routes-accessing-the-request" aria-hidden="true">#</a> routes <em>Accessing the request</em></h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    	<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    		<span class="token string single-quoted-string">&#39;username&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|unique:users&#39;</span><span class="token punctuation">,</span>
    		<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">,</span>
    		<span class="token string single-quoted-string">&#39;age&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|integer|min:0|max:100&#39;</span><span class="token punctuation">,</span>
    	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;{done: true}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


<span class="token comment"># in the view file</span>
    @<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$errors</span><span class="token operator">-&gt;</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    		@<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$errors</span><span class="token operator">-&gt;</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token variable">$error</span><span class="token punctuation">)</span> 
    			<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
    				<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token variable">$error</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
    			<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    		@<span class="token keyword">endforeach</span>
    	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    @<span class="token keyword">endif</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="add-new-rule" tabindex="-1"><a class="header-anchor" href="#add-new-rule" aria-hidden="true">#</a> add new rule</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:rule Uppercase

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment"># rule file	</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Uppercase</span> <span class="token keyword">implements</span> <span class="token class-name">Rule</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Create a new rule instance.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Determine if the validation rule passes.
     *
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">string</span></span>  <span class="token parameter">$attribute</span>
     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token keyword">mixed</span></span>  <span class="token parameter">$value</span>
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">passes</span><span class="token punctuation">(</span><span class="token variable">$attribute</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token variable">$value</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Get the validation error message.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">message</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string single-quoted-string">&#39;The :attribute must be Uppercase&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



<span class="token comment"># validate function </span>
<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	name<span class="token operator">-&gt;</span> <span class="token property">new</span> <span class="token class-name">Uppercase</span><span class="token punctuation">;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h4 id="form-requests" tabindex="-1"><a class="header-anchor" href="#form-requests" aria-hidden="true">#</a> form requests</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:request CreateValidate
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment"># request file</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">CreateValidation</span> <span class="token keyword">extends</span> <span class="token class-name">FormRequest</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Determine if the user is authorized to make this request.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Get the validation rules that apply to the request.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
			<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required&#39;</span><span class="token punctuation">,</span>
			<span class="token string single-quoted-string">&#39;age&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|min:10|max:50&#39;</span><span class="token punctuation">,</span>        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment"># use the function</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">CreateValidation</span> <span class="token variable">$request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token variable">$request</span> <span class="token operator">-&gt;</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h4 id="images-upload" tabindex="-1"><a class="header-anchor" href="#images-upload" aria-hidden="true">#</a> images upload</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;image&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|mimes:jpg,png,jpeg|max:5046&#39;</span> <span class="token comment"># max in kilobits</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span>


	<span class="token comment"># methods we can use on $request</span>
	<span class="token variable">$request</span>
		<span class="token operator">-&gt;</span><span class="token function">file</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;image&#39;</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">gussExtension</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># return file extension ex.. jpeg</span>
			<span class="token operator">-&gt;</span><span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># return file mime type ex.. image/jpeg</span>
			<span class="token operator">-&gt;</span><span class="token function">store</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">asStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">storePublickly</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">getClientOriginalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">getClientMimeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">getError</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">isValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token operator">-&gt;</span><span class="token property">image</span>
			<span class="token operator">-&gt;</span><span class="token function">move</span><span class="token punctuation">(</span><span class="token function">public_path</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;images name here&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="the-http-directory" tabindex="-1"><a class="header-anchor" href="#the-http-directory" aria-hidden="true">#</a> The Http Directory</h2><blockquote><p>The Http directory contains your controllers, middleware, and form requests. Almost all of the logic to handle requests entering your application will be placed in this directory.</p></blockquote><h2 id="artisan-command" tabindex="-1"><a class="header-anchor" href="#artisan-command" aria-hidden="true">#</a> Artisan command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># change serve port</span>
php artisan serve --port<span class="token operator">=</span><span class="token number">8081</span>


<span class="token comment">#----- artisan make: -----</span>
php artisan make:controller NameController


<span class="token comment"># to create methods automatically</span>
php artisan make:controller NameController --resource


<span class="token comment"># To view the available commands,</span>
php artisan list


<span class="token comment"># Remove the compiled class file    </span>
php artisan clear-compiled


php artisan down

php artisan Uppercase


php artisan <span class="token builtin class-name">help</span>


<span class="token comment"># Cache the framework bootstrap files</span>
php artisan optimize


php artisan cache:clear


php artisan auth:clear-resets

php artisan key:generate

<span class="token comment"># create session migration file</span>
php artisan session:table



php artisan view:clear

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h2 id="working-with-view" tabindex="-1"><a class="header-anchor" href="#working-with-view" aria-hidden="true">#</a> working with View</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># ------------------- working with file path ----------</span>
<span class="token doc-comment comment">/**
 * if you have file like this; 
 *	view/
 * 		products/
 * 			index.blade.php 
 */</span>

<span class="token comment"># you can user point</span>
<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;products.index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># ------------------- send data to view file ----------</span>

<span class="token comment"># compact method</span>
	<span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;some ble here&#39;</span><span class="token punctuation">;</span>
	<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token function">compact</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># With method</span>
	<span class="token variable">$title</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Hello every one on my chanel&#39;</span>
	<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;home&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token variable">$title</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment"># Directly in the view </span>
	<span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;value&#39;</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="blade-template" tabindex="-1"><a class="header-anchor" href="#blade-template" aria-hidden="true">#</a> Blade template</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * 
 * create a folder called *layouts*
 * 
 * */</span>

<span class="token doc-comment comment">/**

*parent*
	&lt;header /&gt; 

	@yield(&#39;content&#39;)

	&lt;footer /&gt;

*child*
	@include(&#39;layouts.file-name&#39;)

 	@section
		&lt;div&gt; you content here &lt;/div&gt;
 	@endsection
 
*/</span>

<span class="token comment">#----------- active class -------------</span>
<span class="token comment"># add active class to link</span>
 <span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;{{ request()-&gt;is(&#39;</span><span class="token operator">/</span><span class="token string single-quoted-string">&#39;) ? &#39;</span>active<span class="token string single-quoted-string">&#39; : &#39;</span><span class="token string single-quoted-string">&#39; }}&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>

<span class="token comment"># add active class to link on nested route</span>
<span class="token operator">&lt;</span>a <span class="token keyword">class</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;{{ request()-&gt;is(&#39;</span>home<span class="token operator">/</span><span class="token operator">*</span><span class="token string single-quoted-string">&#39;) ? &#39;</span>active<span class="token string single-quoted-string">&#39; : &#39;</span><span class="token string single-quoted-string">&#39; }}&#39;</span><span class="token operator">&gt;</span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>


<span class="token comment">#----------- Public image -------------</span>
<span class="token comment"># you must have the images on the public folder;</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ URL(&#39;images/icon-box.jpg&#39;) }}&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token comment"># or</span>
<span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string double-quoted-string">&quot;{{ asset(&#39;images/icon-box.jpg&#39;) }}&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>


<span class="token comment"># if you need to secret the images use *storage* folder</span>
<span class="token doc-comment comment">/**
	php artisan storage:link

	# next step you need to move your images to storage folder
*/</span>


<span class="token comment">#----------- if -------------</span>

@<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

@<span class="token keyword">elseif</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

@<span class="token keyword">else</span> 

@<span class="token keyword">endif</span>

<span class="token comment">#--- unless != if</span>
@<span class="token function">unless</span> <span class="token punctuation">(</span><span class="token constant boolean">false</span><span class="token punctuation">)</span>
	<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>this will show when the condition is <span class="token constant boolean">false</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
@endunless


<span class="token comment">#----------- empty -------------</span>
@<span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>

@<span class="token function">endempty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#----------- isset -------------</span>
@<span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$var_name</span><span class="token punctuation">)</span>
	
@endisset


<span class="token comment">#----------- comparing multiple possible conditions -------------</span>
@<span class="token keyword">switch</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
	@<span class="token keyword">case</span> <span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ali&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment">// code...</span>
		@<span class="token keyword">break</span><span class="token punctuation">;</span>
	
	@<span class="token keyword">default</span><span class="token punctuation">:</span>
		<span class="token comment">// code...</span>
		@<span class="token keyword">break</span><span class="token punctuation">;</span>
@<span class="token keyword">endswitch</span>


<span class="token comment">#----------- loops -------------</span>

<span class="token comment"># loop and check if the item array is empty </span>
@<span class="token function">forelse</span> <span class="token punctuation">(</span><span class="token variable">$names</span> <span class="token keyword">as</span> <span class="token variable">$name</span><span class="token punctuation">)</span>
	<span class="token comment"># &lt;div&gt; {{ $name }} &lt;/div&gt;</span>
@<span class="token keyword">empty</span> 
	<span class="token comment"># &lt;h3&gt;there no names&lt;/h3&gt;</span>
@endforelse

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><h2 id="working-with-assets" tabindex="-1"><a class="header-anchor" href="#working-with-assets" aria-hidden="true">#</a> working with assets</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment"># laravel frontend presets</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="databases-migrations" tabindex="-1"><a class="header-anchor" href="#databases-migrations" aria-hidden="true">#</a> Databases &amp; migrations</h2><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> database</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan migrate


<span class="token comment"># restart</span>
php artisan migrate:reset


<span class="token comment"># Reset and re-run all migrations</span>
php artisan migrate:refresh


<span class="token comment"># Show the status of each migration</span>
php artisan migrate:status
 

<span class="token comment"># you can quickly apply new schema </span>
php artisan migrate:fresh


<span class="token comment">#create table [use make:model instead of this]</span>
php artisan make:migration create_propjet_table


<span class="token comment"># create new model with factory</span>
php artisan make:model --factory File_name



</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><blockquote><p><em>on the migration folder</em> up function mean to create the table down() mean to clean what you do before.</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">mediumText</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;body&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">#the time when the post is created</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="factory" tabindex="-1"><a class="header-anchor" href="#factory" aria-hidden="true">#</a> factory</h3><blockquote><p>add fake data to your dbs</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan make:factory PostFactory
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># add Post model and call factory from it</span>
<span class="token class-name static-context">Post</span><span class="token operator">::</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="query-builder" tabindex="-1"><a class="header-anchor" href="#query-builder" aria-hidden="true">#</a> Query builder</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># non fluent [not good]</span>
<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;table&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;where&#39;</span><span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token operator">=&gt;</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token comment"># Fluent [good]</span>
<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># select query</span>
<span class="token variable">$post</span> <span class="token operator">=</span> <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;select * from posts&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># select and where query </span>
  
<span class="token variable">$post</span> <span class="token operator">=</span> <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;select * from posts where id = :id&#39;</span><span class="token punctuation">,</span>
		 <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token operator">=&gt;</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment"># using methods</span>
<span class="token variable">$id</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token variable">$post</span> <span class="token operator">=</span> <span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;!=&#39;</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span> <span class="token comment"># where with operators</span>

	<span class="token operator">-&gt;</span><span class="token function">orWhere</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;body&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;bla bla&#39;</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">whereBetween</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">whereNotNull</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">whereRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;body&#39;</span><span class="token punctuation">)</span> <span class="token comment"># not good to use it</span>

	<span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span> <span class="token comment"># select column</span>

	<span class="token operator">-&gt;</span><span class="token function">distinct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># get unique value used with select</span>

	<span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;asc&#39;</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">latest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#Add an &quot;order by&quot; clause for a timestamp to the query.</span>

	<span class="token operator">-&gt;</span><span class="token function">oldest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">inRandomOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">#------------- get methods ----------</span>

	<span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">#Retrieve the &quot;count&quot; result of the query.</span>

	<span class="token operator">-&gt;</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:id&#39;</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:id&#39;</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:id&#39;</span><span class="token punctuation">)</span>
	<span class="token operator">-&gt;</span><span class="token function">avg</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token operator">-&gt;</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># Execute a query for a single record by ID.</span>

	<span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">#------------- working with the data methods ----------</span>


	<span class="token operator">-&gt;</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;title&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;hello world&#39;</span><span class="token punctuation">,</span>
        <span class="token string single-quoted-string">&#39;body&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;hi every one this is my first db query&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span>


	<span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
		<span class="token string single-quoted-string">&#39;title&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;new title&#39;</span><span class="token punctuation">,</span>
		<span class="token string single-quoted-string">&#39;body&#39;</span><span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;fresh body content&#39;</span>
	<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># return 1 if updated or 0 if not updated</span>

	
	<span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;55&#39;</span><span class="token punctuation">)</span> <span class="token comment"># return init count of how much deleted item</span>


<span class="token class-name static-context">DB</span><span class="token operator">::</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;posts&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;title&#39;</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div><h3 id="eloquent" tabindex="-1"><a class="header-anchor" href="#eloquent" aria-hidden="true">#</a> Eloquent</h3><blockquote><p>why --&gt; simplicity</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token comment"># test.php model file</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Test</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span> <span class="token punctuation">{</span>
	<span class="token keyword">use</span> <span class="token package">HasFactory</span><span class="token punctuation">;</span>

	<span class="token keyword">protected</span> <span class="token variable">$table</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;test&#39;</span><span class="token punctuation">;</span>


	<span class="token keyword">protected</span> <span class="token variable">$primaryKey</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">;</span> <span class="token comment"># column | false</span>


	<span class="token keyword">protected</span> <span class="token variable">$timestamps</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;</span> <span class="token comment"># true</span>


	<span class="token keyword">protected</span> <span class="token variable">$dateFormat</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;h:m:s&#39;</span><span class="token punctuation">;</span>


	<span class="token keyword">protected</span> <span class="token variable">$hidden</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">,</span><span class="token string single-quoted-string">&#39;update_at&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


	<span class="token keyword">protected</span> <span class="token variable">$visible</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;username&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>


	<span class="token comment">#protected $ = &#39;test&#39;;</span>
<span class="token punctuation">}</span>


<span class="token comment"># TestController.php</span>
<span class="token keyword">use</span> <span class="token package">App<span class="token punctuation">\\</span>Model<span class="token punctuation">\\</span>Test</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">TestController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token comment"># SELECT * FROM test</span>
		<span class="token variable">$test</span> <span class="token operator">=</span> <span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

				<span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
					<span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

					<span class="token operator">-&gt;</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

					<span class="token operator">-&gt;</span><span class="token function">firstOrFail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

				
				<span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;amount of rows&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token variable">$cars</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">// code here</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">store</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>

		<span class="token comment"># first way</span>
		<span class="token variable">$test</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$test</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$test</span><span class="token operator">-&gt;</span><span class="token property">desc</span> <span class="token operator">=</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;desc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$car</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


		<span class="token comment"># another way </span>
		<span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
			<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">## you need to add this line in your model file </span>
		<span class="token doc-comment comment">/***
		 	protected $fileable = [&#39;name&#39;]; 
		 */</span>

		<span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>	


	 <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">update</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>

        <span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token variable">$id</span><span class="token punctuation">)</span>
        	<span class="token operator">-&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            	<span class="token string single-quoted-string">&#39;name&#39;</span><span class="token operator">=&gt;</span><span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">input</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span>
        	<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">destroy</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Test</span> <span class="token variable">$test</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$test</span><span class="token operator">-&gt;</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br></div></div><h3 id="eloquent-serialization" tabindex="-1"><a class="header-anchor" href="#eloquent-serialization" aria-hidden="true">#</a> Eloquent serialization</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token variable">$test</span> <span class="token operator">=</span> <span class="token class-name static-context">Test</span><span class="token operator">::</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">#collection to array</span>

		<span class="token operator">-&gt;</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// for api</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="eloquent-one-to-many" tabindex="-1"><a class="header-anchor" href="#eloquent-one-to-many" aria-hidden="true">#</a> Eloquent one to many</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># migrations file</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">up</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">longText</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;description&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>

	<span class="token class-name static-context">Schema</span><span class="token operator">::</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;car_models&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token class-name type-declaration">Blueprint</span> <span class="token variable">$table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">increments</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">unsignedInteger</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;car_id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token keyword type-declaration">string</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;model_name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token variable">$table</span><span class="token operator">-&gt;</span><span class="token function">foreign</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;car_id&#39;</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">references</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cars&#39;</span><span class="token punctuation">)</span>
			<span class="token operator">-&gt;</span><span class="token function">onDelete</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cascade&#39;</span><span class="token punctuation">)</span> <span class="token comment"># || &#39;set null&#39;</span>

	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment"># test model</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Cars</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
	
	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">carDowels</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> this<span class="token operator">-&gt;</span><span class="token function">hasMany</span><span class="token punctuation">(</span><span class="token class-name static-context">CarModel</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">headquarter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">return</span> this<span class="token operator">-&gt;</span><span class="token function">hasOne</span><span class="token punctuation">(</span><span class="token class-name static-context">Headquarter</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h4 id="many-to-many" tabindex="-1"><a class="header-anchor" href="#many-to-many" aria-hidden="true">#</a> Many to many</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="authentication-authorization" tabindex="-1"><a class="header-anchor" href="#authentication-authorization" aria-hidden="true">#</a> Authentication &amp; Authorization</h2><p><em>Authentication</em></p><blockquote><p>Verbifying who someone is, and allowing them to act as that person in your system</p></blockquote><p><em>Authorization</em></p><blockquote><p>Determining whether the authenticated user is allowed (authorized) to perform a specific behavior.</p></blockquote>`,66);function e(t,o){return p}var r=s(a,[["render",e]]);export{r as default};
