import{_ as n,c as s,o as a,d as t}from"./app.57808683.js";const _='{"title":"node \u9879\u76EE","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9879\u76EE\u642D\u5EFA","slug":"\u4E00\u3001\u9879\u76EE\u642D\u5EFA"},{"level":3,"title":"1. \u9879\u76EE\u76EE\u5F55\u7ED3\u6784","slug":"_1-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784"},{"level":3,"title":"2. \u521B\u5EFA\u9879\u76EE","slug":"_2-\u521B\u5EFA\u9879\u76EE"}],"relativePath":"node/coderhub.md"}',e={},o=t(`<h1 id="node-\u9879\u76EE" tabindex="-1">node \u9879\u76EE <a class="header-anchor" href="#node-\u9879\u76EE" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u9879\u76EE\u642D\u5EFA" tabindex="-1">\u4E00\u3001\u9879\u76EE\u642D\u5EFA <a class="header-anchor" href="#\u4E00\u3001\u9879\u76EE\u642D\u5EFA" aria-hidden="true">#</a></h2><h3 id="_1-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" tabindex="-1">1. \u9879\u76EE\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#_1-\u9879\u76EE\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-"><pre><code>coderhub
\u251C\u2500 package-lock.json
\u251C\u2500 package.json
\u251C\u2500 src
\u2502  \u251C\u2500 app
\u2502  \u251C\u2500 controller
\u2502  \u251C\u2500 main.ts
\u2502  \u251C\u2500 router
\u2502  \u251C\u2500 service
\u2502  \u2514\u2500 utils
\u2514\u2500 tsconfig.json
</code></pre></div><h3 id="_2-\u521B\u5EFA\u9879\u76EE" tabindex="-1">2. \u521B\u5EFA\u9879\u76EE <a class="header-anchor" href="#_2-\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a></h3><h4 id="_2-1-\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939" tabindex="-1">2.1 \u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939 <a class="header-anchor" href="#_2-1-\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token function">mkdir</span> coderhub
<span class="token function">npm</span> init -y
<span class="token function">git</span> init 
<span class="token function">npm</span> <span class="token function">install</span> koa -D
<span class="token function">npm</span> <span class="token function">install</span> @types/koa -D
</code></pre></div><h4 id="_2-4\u521D\u59CB\u5316tsconfig-json" tabindex="-1">2.4\u521D\u59CB\u5316tsconfig.json <a class="header-anchor" href="#_2-4\u521D\u59CB\u5316tsconfig-json" aria-hidden="true">#</a></h4><div class="language-js"><pre><code># \u{1F447}\uFE0F If you got permissions error<span class="token punctuation">,</span> run <span class="token keyword">with</span> sudo
sudo npm install typescript@latest <span class="token operator">-</span>g

tsc <span class="token operator">--</span>init

tsc <span class="token operator">--</span>version
</code></pre></div><h4 id="_2-3\u914D\u7F6Epackage-json" tabindex="-1">2.3\u914D\u7F6Epackage.json <a class="header-anchor" href="#_2-3\u914D\u7F6Epackage-json" aria-hidden="true">#</a></h4><div class="language-shell"><pre><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
  <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo <span class="token entity" title="\\&quot;">\\&quot;</span>Error: no test specified<span class="token entity" title="\\&quot;">\\&quot;</span> &amp;&amp; exit 1&quot;</span>,
  <span class="token string">&quot;start&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;nodemon --watch src/**/*.ts --exec <span class="token entity" title="\\&quot;">\\&quot;</span>ts-node<span class="token entity" title="\\&quot;">\\&quot;</span> ./src/main.ts&quot;</span>
<span class="token punctuation">}</span>,
</code></pre></div><h4 id="_2-4-\u5B8C\u5584main-ts\uFF0C\u751F\u6210\u670D\u52A1" tabindex="-1">2.4 \u5B8C\u5584main.ts\uFF0C\u751F\u6210\u670D\u52A1 <a class="header-anchor" href="#_2-4-\u5B8C\u5584main-ts\uFF0C\u751F\u6210\u670D\u52A1" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;koa&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;koa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="_2-5-\u542F\u52A8\u9879\u76EE" tabindex="-1">2.5 \u542F\u52A8\u9879\u76EE <a class="header-anchor" href="#_2-5-\u542F\u52A8\u9879\u76EE" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code>npm run start
</code></pre></div>`,15),p=[o];function c(i,r,l,u,d,k){return a(),s("div",null,p)}var g=n(e,[["render",c]]);export{_ as __pageData,g as default};
