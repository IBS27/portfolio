function About() {
  return (
    <section>
      <h1 className="terminal-copy section-command">
        <span className="terminal-prompt">&gt; user@portfolio:~$</span> cat about.ts
      </h1>
      <div className="about-blocks">
        <div className="code-card">
          <pre className="terminal-copy" aria-label="About code snippet">
            <code>
              <span className="code-line"><span className="line-number">1</span><span className="token-keyword">const</span> <span className="token-variable">srinivas</span> <span className="token-punctuation">= {'{'}</span></span>
              <span className="code-line"><span className="line-number">2</span>  <span className="token-property">role</span><span className="token-punctuation">:</span> <span className="token-string">'CS Student & Builder'</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">3</span>  <span className="token-property">location</span><span className="token-punctuation">:</span> <span className="token-string">'Madison, WI'</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">4</span>  <span className="token-property">focus</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'Applied ML'</span><span className="token-punctuation">,</span> <span className="token-string">'Systems'</span><span className="token-punctuation">,</span> <span className="token-string">'AI Agents'</span><span className="token-punctuation">]</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">5</span>  <span className="token-property">stack</span><span className="token-punctuation">:</span> <span className="token-punctuation">{'{'}</span></span>
              <span className="code-line"><span className="line-number">6</span>    <span className="token-property">frontend</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'React'</span><span className="token-punctuation">,</span> <span className="token-string">'Next.js'</span><span className="token-punctuation">,</span> <span className="token-string">'Flutter'</span><span className="token-punctuation">]</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">7</span>    <span className="token-property">backend</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'FastAPI'</span><span className="token-punctuation">,</span> <span className="token-string">'Node.js'</span><span className="token-punctuation">]</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">8</span>    <span className="token-property">ml</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'vLLM'</span><span className="token-punctuation">,</span> <span className="token-string">'PyTorch'</span><span className="token-punctuation">,</span> <span className="token-string">'Modal'</span><span className="token-punctuation">,</span> <span className="token-string">'Agents SDK'</span><span className="token-punctuation">]</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">9</span>    <span className="token-property">web3</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'Solana'</span><span className="token-punctuation">]</span><span className="token-punctuation">,</span></span>
              <span className="code-line"><span className="line-number">9</span>  <span className="token-punctuation">{'}'},</span></span>
              <span className="code-line"><span className="line-number">12</span>  <span className="token-property">interests</span><span className="token-punctuation">:</span> <span className="token-punctuation">[</span><span className="token-string">'F1'</span><span className="token-punctuation">,</span> <span className="token-string">'Film'</span><span className="token-punctuation">,</span> <span className="token-string">'Basketball'</span><span className="token-punctuation">,</span> <span className="token-string">'Ping Pong'</span><span className="token-punctuation">,</span> <span className="token-string">'Marvel Rivals'</span><span className="token-punctuation">,</span> <span className="token-string">'Ballroom Dancing'</span><span className="token-punctuation">]</span></span>
              <span className="code-line"><span className="line-number">13</span><span className="token-punctuation">{'}'};</span></span>
            </code>
          </pre>
        </div>

        <p className="terminal-copy section-command">
          <span className="terminal-prompt">&gt; user@portfolio:~$</span> cat philosophy.md
        </p>
        <div className="code-card">
          <pre className="terminal-copy" aria-label="Philosophy markdown snippet">
            <code>
              <span className="code-line"><span className="line-number">1</span><span className="token-comment"># how I think about building</span></span>
              <span className="code-line"><span className="line-number">2</span><span className="token-string">&nbsp;</span></span>
              <span className="code-line"><span className="line-number">3</span><span className="token-string">I care about shipping things that work. Most of my projects start at hackathons or from problems</span></span>
              <span className="code-line"><span className="line-number">4</span><span className="token-string">I want to solve — 2x hackathon winner and counting.</span></span>
              <span className="code-line"><span className="line-number">5</span><span className="token-string">&nbsp;</span></span>
              <span className="code-line"><span className="line-number">6</span><span className="token-string">I like working across the stack — from GPU inference and serverless compute to mobile apps and</span></span>
              <span className="code-line"><span className="line-number">7</span><span className="token-string">on-chain programs. Whatever the problem needs. I'd rather learn a new tool in a weekend than</span></span>
              <span className="code-line"><span className="line-number">8</span><span className="token-string">force the wrong one into a project.</span></span>
              <span className="code-line"><span className="line-number">9</span><span className="token-string">&nbsp;</span></span>
              <span className="code-line"><span className="line-number">10</span><span className="token-string">Right now I'm deep into applied ML and AI agents — building systems that reason, act, and learn</span></span>
              <span className="code-line"><span className="line-number">11</span><span className="token-string">from the real world.</span></span>
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default About
