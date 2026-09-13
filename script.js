// Hero: radial waveform illustration cycles through GREEN / AMBER / RED
// scenarios, with a needle pointing at the current position on the ring
// and a readout panel showing the running-risk number.
(function () {
  const needle = document.getElementById('needle');
  const riskEl = document.getElementById('riskVal');
  const labEl = document.getElementById('riskLab');
  const pillEl = document.getElementById('tierPill');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // angle: 180deg = far left (green/calm), 0deg = far right (red/danger)
  const scenarios = [
    { risk: 4.8,  angle: 180, label: 'GREEN · SAFE',         color: '#33C481' },
    { risk: 52.1, angle: 90,  label: 'AMBER · STEP-UP 2FA',  color: '#E3A008' },
    { risk: 88.7, angle: 0,   label: 'RED · CLONE DETECTED', color: '#E5484D' },
  ];

  let idx = 0;

  function paint() {
    const s = scenarios[idx];
    if (needle) {
      needle.setAttribute('transform', `rotate(${s.angle} 240 240)`);
      needle.querySelectorAll('line, circle').forEach(el => {
        if (el.tagName === 'line') el.setAttribute('stroke', s.color);
        if (el.tagName === 'circle') el.setAttribute('fill', s.color);
      });
    }
    if (riskEl) {
      riskEl.textContent = s.risk.toFixed(1) + '%';
      riskEl.style.color = s.color;
    }
    if (labEl) labEl.textContent = 'RUNNING RISK';
    if (pillEl) {
      pillEl.textContent = s.label;
      pillEl.style.borderColor = s.color;
      pillEl.style.color = s.color;
    }
  }

  paint();
  if (!reduced) {
    setInterval(() => {
      idx = (idx + 1) % scenarios.length;
      paint();
    }, 3400);
  }
})();
