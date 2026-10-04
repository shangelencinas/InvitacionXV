/**
 * Procedural gentle waltz & ambient harp music synthesized via Web Audio API.
 * High fidelity, romantic, lightweight and 100% self-contained with no external dependencies.
 */

class LuxurySoundtrack {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private listeners: ((playing: boolean) => void)[] = [];
  private step = 0;

  // Romantic Waltz progression (in key of C / A minor / F / G)
  // Frequencies in Hz for gentle harp / music box timbre
  private readonly melodyNotes = [
    // Measure 1 (C maj7)
    523.25, 659.25, 783.99, 987.77,
    // Measure 2 (A min9)
    440.00, 523.25, 659.25, 880.00,
    // Measure 3 (F maj9)
    349.23, 440.00, 523.25, 659.25,
    // Measure 4 (G sus - G7)
    392.00, 493.88, 587.33, 783.99,
    // Measure 5 (E min7)
    329.63, 392.00, 493.88, 587.33,
    // Measure 6 (D min7)
    293.66, 349.23, 440.00, 523.25,
    // Measure 7 (F/G)
    349.23, 392.00, 523.25, 783.99,
    // Measure 8 (C add9 resolve)
    261.63, 329.63, 392.00, 587.33
  ];

  private readonly bassNotes = [
    130.81, // C3
    110.00, // A2
    87.31,  // F2
    98.00,  // G2
    82.41,  // E2
    73.42,  // D2
    98.00,  // G2
    130.81  // C3
  ];

  public subscribe(fn: (playing: boolean) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn(this.isPlaying));
  }

  public getStatus() {
    return this.isPlaying;
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, time: number, duration: number, isBass = false) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Use sine + subtle triangle for delicate music box / harp resonance
    osc.type = isBass ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, time);

    // Warm envelope
    const attack = isBass ? 0.08 : 0.02;
    const peak = isBass ? 0.22 : 0.15;
    
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(peak, time + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    // Soft low-pass filter for intimacy
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBass ? 450 : 2400, time);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  private scheduleNext() {
    if (!this.isPlaying || !this.ctx) return;

    const now = this.ctx.currentTime;
    const tempo = 104; // BPM (waltz feel)
    const beatDuration = 60 / tempo; // ~0.57s per beat

    // Play bass on beat 1 of each 4-beat cycle
    if (this.step % 4 === 0) {
      const bassIndex = Math.floor(this.step / 4) % this.bassNotes.length;
      this.playTone(this.bassNotes[bassIndex], now, beatDuration * 3.5, true);
    }

    // Play arpeggiated melodic harp notes
    const note = this.melodyNotes[this.step % this.melodyNotes.length];
    this.playTone(note, now, beatDuration * 2.2, false);

    this.step++;

    // Schedule next beat
    this.timerId = window.setTimeout(() => {
      this.scheduleNext();
    }, beatDuration * 1000);
  }

  public play() {
    try {
      this.initContext();
      if (this.isPlaying) return;
      this.isPlaying = true;
      this.scheduleNext();
      this.notify();
    } catch {
      // Audio context may require user gesture
      this.isPlaying = false;
      this.notify();
    }
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.notify();
  }

  public toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}

export const soundTrack = new LuxurySoundtrack();
