import{e as n}from"./app.808106a9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="php-docs" tabindex="-1"><a class="header-anchor" href="#php-docs" aria-hidden="true">#</a> Php docs</h1><h2 id="basics" tabindex="-1"><a class="header-anchor" href="#basics" aria-hidden="true">#</a> basics</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
	<span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;Hello world!&#39;</span><span class="token punctuation">;</span>


	<span class="token comment">/* comments */</span>
	<span class="token comment"># comment</span>
	<span class="token comment">// comment</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;Hello world!&quot;</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> Static</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token comment">// A static variable exists only in a local function scope, but it does not lose its value when program execution leaves this scope.</span>
	<span class="token keyword">function</span> <span class="token function-definition function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">static</span> <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
		<span class="token variable">$a</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="globals" tabindex="-1"><a class="header-anchor" href="#globals" aria-hidden="true">#</a> $GLOBALS</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
	<span class="token variable">$mess</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;hello&#39;</span><span class="token punctuation">;</span>

	<span class="token keyword">function</span> <span class="token function-definition function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	 	<span class="token keyword">echo</span> <span class="token variable">$GLOBALS</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;mess&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="constant-variable" tabindex="-1"><a class="header-anchor" href="#constant-variable" aria-hidden="true">#</a> Constant variable</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
	<span class="token function">define</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Ali&#39;</span><span class="token punctuation">)</span>
	<span class="token comment">// constants are automatically global you can call it from function without global key.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data types</h3><ul><li>string</li><li>Integer</li><li>Float</li><li>Boolean</li><li>Array</li><li>Object</li><li>Null</li><li>Resource</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$text</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;text here&#39;</span><span class="token punctuation">;</span>

	<span class="token function">var_dump</span><span class="token punctuation">(</span><span class="token variable">$text</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// return the data type and value</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="string-methods" tabindex="-1"><a class="header-anchor" href="#string-methods" aria-hidden="true">#</a> String methods</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
	<span class="token function">strlen</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// string length</span>

	<span class="token function">str_word_count</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">strrev</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// reverse string </span>

	<span class="token function">strpos</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;string&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;g&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// search for a text within a string</span>

	<span class="token function">str_repeat</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;text&#39;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// repeat the text</span>

    <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;word&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;new_word&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;string with word&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="number-methods" tabindex="-1"><a class="header-anchor" href="#number-methods" aria-hidden="true">#</a> Number methods</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token constant">PHP_INT_SIZE</span><span class="token punctuation">;</span> <span class="token comment">// SIZE of integer in bytes</span>
	<span class="token constant">PHP_INT_MAX</span><span class="token punctuation">;</span>
	<span class="token constant">PHP_INT_MIN</span><span class="token punctuation">;</span>


	<span class="token function">is_int</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">is_integer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alias of is_int()</span>
	<span class="token function">is_long</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// alias of is_int()</span>

	<span class="token function">is_float</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">is_finite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">is_infinite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">is_nan</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">is_numeric</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;399&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// string to number</span>
	<span class="token punctuation">(</span><span class="token keyword type-casting">int</span><span class="token punctuation">)</span> <span class="token string single-quoted-string">&#39;333&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">(</span><span class="token keyword type-casting">integer</span><span class="token punctuation">)</span> <span class="token string single-quoted-string">&#39;3333&#39;</span><span class="token punctuation">;</span>
	<span class="token function">intval</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;4ddd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="math-methods" tabindex="-1"><a class="header-anchor" href="#math-methods" aria-hidden="true">#</a> Math methods</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">Pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">min</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">max</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">abs</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">sqrt</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">round</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">rand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// random numbers. rand(min, max);</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3><table><thead><tr><th>type</th><th>operator</th><th>operator</th></tr></thead><tbody><tr><td>Arithmetic</td><td>+ - * / % **</td><td></td></tr><tr><td>Assignment</td><td>= += -= *= /= %=</td><td></td></tr><tr><td>Comparison</td><td>== === !== &gt; &lt; &lt;= &gt;=</td><td><code>not equal &lt;&gt;</code> <code>spaceship &lt;=&gt;</code></td></tr><tr><td>Increment / Decrement</td><td>++$var $var++ $var-- --$var</td><td></td></tr><tr><td>Logical operators</td><td>and or xor &amp;&amp; \`</td><td></td></tr><tr><td>String operators</td><td><code>concatenation of x,y</code> $x . $y</td><td><code>append y to x</code> $x .= $y</td></tr><tr><td>Array</td><td>+ == === != &lt;&gt; !==</td><td></td></tr><tr><td>Conditional assignment</td><td><code>Ternary</code> $isOnline ? &quot;yes&quot; : &#39;No&#39; ;</td><td></td></tr><tr><td>Conditional assignment</td><td><code>Null coalescing</code> $x = exp1 ?? exp2</td><td></td></tr></tbody></table><h3 id="if-else-statements" tabindex="-1"><a class="header-anchor" href="#if-else-statements" aria-hidden="true">#</a> if..else statements</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span> <span class="token keyword">elseif</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// code</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">switch</span> <span class="token punctuation">(</span>variable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;value&#39;</span><span class="token punctuation">:</span>
			<span class="token comment">// code...</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		
		<span class="token keyword">default</span><span class="token punctuation">:</span>
			<span class="token comment">// code...</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> loops</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span>

	
	<span class="token keyword">do</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span>


	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$variable</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span>


	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 	
		<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token keyword">continue</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> functions</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">function</span> <span class="token function-definition function">FunctionName</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token operator">=</span><span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
	<span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> Array</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$cars</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;v2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$cars</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// array length</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="indexed-arrays" tabindex="-1"><a class="header-anchor" href="#indexed-arrays" aria-hidden="true">#</a> Indexed Arrays</h4><p>call by index</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$cars</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;v2&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$cars</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// array length</span>

	<span class="token keyword">echo</span> <span class="token variable">$cars</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="associative-array" tabindex="-1"><a class="header-anchor" href="#associative-array" aria-hidden="true">#</a> Associative Array</h4><p>named keys</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$students</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;Peter&quot;</span><span class="token operator">=&gt;</span> <span class="token number">40</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;Ahmed&quot;</span> <span class="token operator">=&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$students</span> <span class="token keyword">as</span> <span class="token variable">$key</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// code...</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">echo</span> <span class="token variable">$students</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Peter&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="multidimensional-array" tabindex="-1"><a class="header-anchor" href="#multidimensional-array" aria-hidden="true">#</a> Multidimensional Array</h4><p>one or more array</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$cars</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span>
		<span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ahmed&#39;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;ali&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Cocks&#39;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="sort-arrays" tabindex="-1"><a class="header-anchor" href="#sort-arrays" aria-hidden="true">#</a> Sort arrays</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>
	<span class="token function">rsort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>

	<span class="token comment">// sort according to value</span>
	<span class="token function">asort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>
	<span class="token function">arsort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>

	<span class="token comment">// sort according to key</span>
	<span class="token function">ksort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>
	<span class="token function">krsort</span><span class="token punctuation">(</span><span class="token keyword type-casting">array</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="super-globals" tabindex="-1"><a class="header-anchor" href="#super-globals" aria-hidden="true">#</a> Super globals</h3><ul><li>$GLOBALS</li><li>$SERVER</li><li>$REQUEST</li><li>$POST</li><li>$GET</li><li>$FILES</li><li>$ENV</li><li>$COOKIE</li><li>$SESSION</li></ul><h4 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> SERVER</h4><p>hold information about</p><blockquote><p>paths, script locations</p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;PHP_SELF&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;REMOTE_ADDR&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token variable">$_SERVER</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;REQUEST_METHOD&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="request" tabindex="-1"><a class="header-anchor" href="#request" aria-hidden="true">#</a> REQUEST</h4><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token variable">$_REQUEST</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;fname&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &lt;input name=fname /&gt;</span>

 	<span class="token variable">$_POST</span><span class="token punctuation">[</span><span class="token string double-quoted-string">&quot;fname&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

 	<span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="regex" tabindex="-1"><a class="header-anchor" href="#regex" aria-hidden="true">#</a> Regex</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">preg_match</span><span class="token punctuation">(</span><span class="token variable">$pattern</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span> <span class="token comment">// 1 | 0</span>

	<span class="token function">preg_match_all</span><span class="token punctuation">(</span><span class="token variable">$pattern</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; how many time matches found</span>

	<span class="token function">preg_replace</span><span class="token punctuation">(</span><span class="token variable">$pattern</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">&quot;new word&quot;</span><span class="token punctuation">,</span> <span class="token variable">$str</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="form-handling" tabindex="-1"><a class="header-anchor" href="#form-handling" aria-hidden="true">#</a> Form handling</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">htmlspecialchars</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;html code here&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// print save html</span>

	<span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token keyword">var</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">stripslashes</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">filter_var</span><span class="token punctuation">(</span><span class="token variable">$variable</span><span class="token punctuation">,</span> <span class="token constant">FILTER</span><span class="token operator">-</span><span class="token constant">VALIDATE</span><span class="token operator">-</span><span class="token constant">EMAIL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="date-and-time" tabindex="-1"><a class="header-anchor" href="#date-and-time" aria-hidden="true">#</a> Date and time</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	
	<span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;format&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;time stamp&#39;</span><span class="token punctuation">)</span> 
	<span class="token doc-comment comment">/**
	 * Format ====&gt; 
	 	d &#39;day&#39;, m &#39;month&#39;, y &#39;year&#39;,
	 	l &#39;day of the week&#39;, H &#39;hours 24&#39;, h &#39;hours 12&#39;,
	    i &#39;minutes&#39;, s &#39;second&#39;, a &#39;am or pm&#39;
	 * 
	 *<span class="token keyword">@example</span> 
	 * date(&#39;y-m-d&#39;) // return the current date|time
	 * 
	 * */</span>


	<span class="token function">date_default_timezone_set</span><span class="token punctuation">(</span>timezone_identifier<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">date_default_timezone_get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token variable">$date</span> <span class="token operator">=</span> <span class="token function">mktime</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hour, minutes, second, month, day, year&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">date</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token variable">$date</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// get the year from specific date using date()</span>


	<span class="token comment">//Parse about any English textual datetime description into a Unix timestamp</span>
	<span class="token function">strtotime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
	
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files" aria-hidden="true">#</a> Include files</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">require</span> <span class="token string single-quoted-string">&#39;footer.php&#39;</span><span class="token punctuation">;</span> <span class="token comment">// script will stop if there any error</span>

	<span class="token keyword">include</span> <span class="token string single-quoted-string">&#39;footer.php&#39;</span><span class="token punctuation">;</span> <span class="token comment">// if there any error will only produce a warning</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="file-handling" tabindex="-1"><a class="header-anchor" href="#file-handling" aria-hidden="true">#</a> File handling</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">readfile</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;filename.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token variable">$file</span> <span class="token operator">=</span> <span class="token function">fopen</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;filename.txt&quot;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;mode&#39;</span><span class="token punctuation">)</span>
	<span class="token doc-comment comment">/**
	 * fopen() will create new file if it doesn&#39;t exist.
	 * 
	 * Mode ====&gt; 
	 	r  &#39;read only&#39;
	 	w  &#39;write only remove old content&#39;
	 	a  &#39;write only add at the last&#39;
	 	x  &#39;new file write only&#39;
	 	r+ &#39;read/write&#39;
	 	w+ &#39;read/write remove old content&#39;
	 	a+ &#39;read/write add at the last&#39;
	 	x+ &#39;read/write new file&#39;
	 * */</span>


	<span class="token function">fread</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">,</span> <span class="token function">filesize</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;file.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">fclose</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// important</span>

	<span class="token function">fgets</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// used to read single line after call it pointer move to next line.</span>

	<span class="token function">feof</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// check if the end of the file has been reached</span>

	<span class="token function">fwrite</span><span class="token punctuation">(</span><span class="token variable">$file</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;new text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="cookies" tabindex="-1"><a class="header-anchor" href="#cookies" aria-hidden="true">#</a> Cookies</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">setcookie</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;cookie-name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">/*

		setcookie(name, value, expire  &#39;time to expire&#39;, path, domain, secure, http_only)

		// must be call before &lt;html&gt;

		// to delete cookies use the setcookie() with an expiration date in the past
	*/</span>

	<span class="token variable">$_COOKIE</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cookie-name&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="sessions" tabindex="-1"><a class="header-anchor" href="#sessions" aria-hidden="true">#</a> Sessions</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">session_start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// must be the first thing in your document.</span>

	<span class="token variable">$_SESSION</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;color&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;green&#39;</span><span class="token punctuation">;</span>
	<span class="token comment">//session variables are not passed individually to each new page.</span>

	<span class="token function">session_unset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// remove all session</span>

	<span class="token function">session_destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// destroy the session</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> Filter</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">filter_list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">filter_var</span><span class="token punctuation">(</span><span class="token variable">$var</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;type of check&#39;</span><span class="token punctuation">)</span>
	<span class="token doc-comment comment">/**
	 * type of check ===&gt;
	 	FILTER_SANITIZE_STRING
	 	FILTER_SANITIZE_EMAIL_URL
	 	FILTER_SANITIZE_URL

	 	FILTER_VALIDATE_INT
	 	FILTER_VALIDATE_IP
	 	FILTER_VALIDATE_EMAIL
	 
	 * */</span>
	
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="callback" tabindex="-1"><a class="header-anchor" href="#callback" aria-hidden="true">#</a> Callback</h3><p>Php support callback function</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">array_map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token variable">$list</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> Json</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;value&#39;</span><span class="token punctuation">)</span> <span class="token comment">// object|array to json</span>

	<span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token string double-quoted-string">&quot;{&#39;name&#39;: &#39;json&#39;}&quot;</span><span class="token punctuation">)</span> <span class="token comment">// json to object|array</span>
	<span class="token doc-comment comment">/**
	 * return object by default
	 * if you set second parament to true it will return &#39;Array associative&#39;
	 * 
	 *<span class="token keyword">@example</span> json_decode(&quot;<span class="token punctuation">{</span>&#39;name&#39;: &#39;json&#39;<span class="token punctuation">}</span>&quot;, true);
	 * */</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="php-exceptions" tabindex="-1"><a class="header-anchor" href="#php-exceptions" aria-hidden="true">#</a> Php Exceptions</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>
	<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Error message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="oop" tabindex="-1"><a class="header-anchor" href="#oop" aria-hidden="true">#</a> OOP</h2><p>A class is a template for objects, and an object is an instance of a class.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token doc-comment comment">/**
	 * 
	 */</span>
	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span>
	<span class="token punctuation">{</span>

		<span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span>

		<span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// code...</span>
			<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">set_name</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span>
		<span class="token punctuation">{</span>
			<span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token variable">$name</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

	<span class="token variable">$apple</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fruit</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token variable">$apple</span><span class="token operator">-&gt;</span><span class="token function">set_name</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Red Apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token variable">$apple</span><span class="token operator">-&gt;</span><span class="token property">name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Green Apple&#39;</span><span class="token punctuation">;</span>


	<span class="token variable">$apple</span> <span class="token keyword">instanceof</span> <span class="token class-name">Fruit</span> <span class="token comment">// 0 | 1</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="destructor" tabindex="-1"><a class="header-anchor" href="#destructor" aria-hidden="true">#</a> Destructor</h3><p>function will automatically called at the end of the script.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Cars</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">function</span> <span class="token function-definition function">__destruct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">{</span>	
	      <span class="token keyword">echo</span> <span class="token string single-quoted-string">&#39;done&#39;</span><span class="token punctuation">;</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="access-modifiers" tabindex="-1"><a class="header-anchor" href="#access-modifiers" aria-hidden="true">#</a> Access Modifiers</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Cars</span>
	<span class="token punctuation">{</span>
		<span class="token keyword">public</span> <span class="token variable">$name</span><span class="token punctuation">;</span> <span class="token comment">// accessed from every where</span>

		<span class="token keyword">protected</span> <span class="token variable">$age</span><span class="token punctuation">;</span>	<span class="token comment">// accessed within the class and by classes derived from that class.</span>

		<span class="token keyword">private</span> <span class="token variable">$number</span><span class="token punctuation">;</span> <span class="token comment">// accessed within the class</span>

	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="inheritance" tabindex="-1"><a class="header-anchor" href="#inheritance" aria-hidden="true">#</a> Inheritance</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
	
	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Strawberry</span> <span class="token keyword">extends</span> <span class="token class-name">Fruit</span> <span class="token punctuation">{</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Cars</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// prevent class inheritance to prevent method overriding</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="class-constants" tabindex="-1"><a class="header-anchor" href="#class-constants" aria-hidden="true">#</a> Class constants</h3><p>use <code>self::</code> to access const variables.</p><p><code>::</code> called <code>scope resolution operator</code></p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token constant">BYE_MESS</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;Bye bro&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">bey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
		<span class="token punctuation">{</span>
			<span class="token keyword">echo</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">BYE_MESS</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="abstract-class" tabindex="-1"><a class="header-anchor" href="#abstract-class" aria-hidden="true">#</a> Abstract Class</h3><p>Abstract classes and methods are when the parent class has a named method, but need its child <code>class(es)</code> to fill out the task.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Fruit</span> <span class="token punctuation">{</span>
 		<span class="token keyword">abstract</span> <span class="token keyword">function</span> <span class="token function-definition function">set_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">string</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="interfaces" tabindex="-1"><a class="header-anchor" href="#interfaces" aria-hidden="true">#</a> Interfaces</h3><p>Allow you to specify what methods a class should implement.</p><blockquote><p>when one or more classes use the same interface it is referred to as <code>polymorphism</code></p></blockquote><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">interface</span> <span class="token class-name-definition class-name">ChatInterface</span> <span class="token punctuation">{</span>
 		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">string</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>

 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Chat</span> <span class="token keyword">implements</span> <span class="token class-name">ChatInterface</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="traits" tabindex="-1"><a class="header-anchor" href="#traits" aria-hidden="true">#</a> Traits</h3><p>Declare methods that can be used in multiple classes.</p><ul><li>Can have methods or abstract method</li><li>Can have any access modifier <code>public</code> <code>private</code> <code>protected</code></li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">trait</span> <span class="token class-name-definition class-name">Auth</span> <span class="token punctuation">{</span>
 		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword return-type">string</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>

 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Chat</span> <span class="token punctuation">{</span>
 		<span class="token keyword">use</span> <span class="token package">Auth</span><span class="token punctuation">;</span>
 	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="static-methods" tabindex="-1"><a class="header-anchor" href="#static-methods" aria-hidden="true">#</a> Static methods</h3><p>Static methods can be called directly, without creating an instance of the class.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token punctuation">{</span>
 		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">get_name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

 		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get_names</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 			<span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">get_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// access static method</span>
 		<span class="token punctuation">}</span>
 	<span class="token punctuation">}</span>

 	<span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token function">get_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


 	<span class="token comment">// access static method from child class.</span>
 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Admin</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
 		<span class="token keyword">function</span> <span class="token function-definition function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 			<span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">get_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 		<span class="token punctuation">}</span>
 	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="static-properties" tabindex="-1"><a class="header-anchor" href="#static-properties" aria-hidden="true">#</a> Static Properties</h3><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token punctuation">{</span>
 		<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;User Name here&#39;</span><span class="token punctuation">;</span>

 		<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">get_names</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 			<span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">get_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// access static method</span>
 		<span class="token punctuation">}</span>
 	<span class="token punctuation">}</span>

 	<span class="token class-name static-context">User</span><span class="token operator">::</span><span class="token variable">$name</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>use <code>self::</code> to access static properties inside methods. use <code>parent::</code> if you want to access it in child class.</p><h3 id="name-spaces" tabindex="-1"><a class="header-anchor" href="#name-spaces" aria-hidden="true">#</a> Name Spaces</h3><p>They allow for better organization by grouping classes that work together to perform a task.</p><ul><li>They allow the same name to be used for more than one class.</li><li>A <code>namespace</code> must be the first things in the php file.</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code> 	<span class="token keyword">namespace</span> <span class="token package">Auth</span><span class="token punctuation">;</span>

 	<span class="token keyword">class</span> <span class="token class-name-definition class-name">Login</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>To access classes from outside a namespace the class needs to have the namespace attached to it.</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code>	<span class="token variable">$Login</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name class-name-fully-qualified">Auth<span class="token punctuation">\\</span>Login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// class inside Auth.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="php-iterables" tabindex="-1"><a class="header-anchor" href="#php-iterables" aria-hidden="true">#</a> php Iterables.</h3><p>Is any value which can be looped through with a foreach()</p>`,113);function p(t,c){return e}var i=s(a,[["render",p]]);export{i as default};