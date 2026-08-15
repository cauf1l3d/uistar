/* USTAR ACADEMY — prototype.js
   Demo-only interactivity. No real API calls, no secrets. */

document.addEventListener('DOMContentLoaded', () => {

  /* Quiz option selection (demo state) */
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      opt.closest('.quiz-question')
         .querySelectorAll('.quiz-option')
         .forEach(o => o.classList.remove('quiz-option--selected'));
      opt.classList.add('quiz-option--selected');
    });
  });

  /* Filter chips (visual toggle only) */
  document.querySelectorAll('.filterbar .chip[data-toggle]').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      chip.closest('.filterbar')
          .querySelectorAll('.chip')
          .forEach(c => c.classList.remove('chip--active'));
      chip.classList.add('chip--active');
    });
  });

  /* Demo state switcher: [data-state-target] shows states (loading/empty/error/content) */
  document.querySelectorAll('[data-state-switch]').forEach(sw => {
    sw.addEventListener('click', (e) => {
      e.preventDefault();
      const group = sw.dataset.stateSwitch;
      const state = sw.dataset.state;
      document.querySelectorAll(`[data-state-group="${group}"]`).forEach(el => {
        el.hidden = el.dataset.stateName !== state;
      });
      sw.closest('.filterbar').querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      sw.classList.add('chip--active');
    });
  });

  /* Progressive disclosure: [data-disclose] toggles next sibling */
  document.querySelectorAll('[data-disclose]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(btn.dataset.disclose);
      if (target) {
        const open = !target.hidden;
        target.hidden = open;
        btn.setAttribute('aria-expanded', String(!open));
      }
    });
  });
});
