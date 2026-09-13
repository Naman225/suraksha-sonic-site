# Suraksha Sonic 🛡️

### Enterprise In-Stream Voice Clone Defense & Telephony Fraud Prevention
**Official Product Showcase & Architecture Overview**

[![Live Demo](https://img.shields.io/badge/Live_Prototype-Available-00C781?style=for-the-badge&logo=render)](https://voice-shield-kf0h.onrender.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 📌 Executive Summary

Modern telephony networks and banking contact centres are under unprecedented threat from generative AI voice cloning (ElevenLabs, XTTS, HiFi-GAN, VALL-E). Fraudsters can replicate a customer or executive's voice from a 3-second audio snippet to authorize high-value wire transfers and account takeovers.

**Suraksha Sonic** is an in-stream, real-time voice biometric defense platform. Unlike traditional forensic tools that generate post-mortem PDF reports the next morning, Suraksha Sonic evaluates raw telephony audio every single second, catches synthetic vocoder artifacts in under 90 milliseconds, and **autonomously freezes transactions before money moves**.

---

## 🏗️ System Architecture & Defense Flow

![Suraksha Sonic System Architecture](architecture.png)

1. **Step 1: Audio Normalizer** — Ingests telephony / VoIP streams, downmixes to 16 kHz mono float32, and runs an RMS VAD energy gate (`RMS < 0.012`) to eliminate ambient silence false alarms.
2. **Step 2: Snippet Front-End** — SincNet learnable bandpass filterbanks analyze raw sound waves directly without lossy spectrogram compression.
3. **Step 3A: Spectral Graph (Frequency Check)** — Graph Attention Network detects robotic pitch jumps, phase discontinuities, and high-frequency vocoder spikes (>4 kHz).
4. **Step 3B: Temporal Graph (Timing Check)** — Graph Attention Network catches unnatural speech speed, missing micro-breaths, and synthetic cadence.
5. **Step 4: Decision Head** — Fuses spectral and temporal representations into a real-time posterior probability $P(\text{Spoof})$.
6. **Step 5: Dynamic Risk Smoother (EMA)** — Applies $R_t = 0.70 R_{t-1} + 0.30 S_t$ to ensure ambient coughs or line pops do not cause false alarms.
7. **Autonomous 3-Tier Gate**:
   - 🟢 **GREEN (< 40%)**: Fast-path approved. Legitimate human voice verified.
   - 🟡 **AMBER (40% – 74.9%)**: Step-up 2FA challenge (SMS OTP / spoken security question).
   - 🔴 **RED (≥ 75%)**: Critical clone detected. Instant call auto-cut, account frozen, and SHA-256 forensic audit hash generated.

---

## 📊 Enterprise Benchmarks

- **Acoustic Robustness**: 100.0% accuracy on Clean audio, 100.0% on Light Noise (20 dB SNR), 100.0% on Heavy Noise (10 dB SNR).
- **Inference Latency**: ~13 ms on GPU / ~80 ms on CPU per 4-second window.
- **Real-Time Factor (RTF)**: 0.0032 (308× faster than real-time audio).
- **Compliance**: 100% compliant with India's DPDP Act and RBI Master Directions (zero audio persistence; SHA-256 evidence hashes only).

---

## 🔗 Live Deployments

- 🖥️ **Live Operator SOC Console (Render)**: [https://voice-shield-kf0h.onrender.com/](https://voice-shield-kf0h.onrender.com/)
- 🌐 **Marketing Showcase Site (Vercel)**: Deployed via this repository.
- 📦 **Backend ML & Ingestion Engine**: [github.com/Naman225/voice-shield](https://github.com/Naman225/voice-shield)

---

## 📂 Repository Structure

```
suraksha-sonic-site/
├── index.html        # Main landing page with live SVG risk gauge and team card
├── styles.css        # Enterprise dark cybersecurity design system
├── script.js         # Interactive gauge animation & smooth scroll logic
├── architecture.png  # End-to-end neural & DSP pipeline diagram
├── og-banner.png     # Social sharing Open Graph preview card
├── robots.txt        # Production search engine crawler directives
└── sitemap.xml       # SEO sitemap index
```

---

## 📄 License & Attribution

Released under the **MIT License**.
