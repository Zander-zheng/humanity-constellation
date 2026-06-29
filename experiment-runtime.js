/**
 * Shared experiment flow primitives for FIELD prototypes.
 * Host pages (Application Workspace, Constellation) supply:
 *   - target slots & bundles (_expBundles / _expApplyBundle)
 *   - live projection (_expRouteToTarget / preview map)
 * UI templates stay in each .dc.html right panel; logic patterns live here.
 */
(function (global) {
  function initialExperimentState() {
    return {
      step: 'hunch',
      hunch: '',
      clarifyIdx: 0,
      answers: {},
      chosen: [],
      previewFocus: 0,
      activeBundle: null,
      refiningBundle: null,
      refineInput: '',
      bundleOverrides: {},
      steerInput: '',
      steer: '',
    };
  }

  function enrichActualized(base, instruction) {
    const b = String(base || '').trim();
    const note = String(instruction || '').trim();
    if (!note) return b;
    if (!b) return note;
    if (b.toLowerCase().includes(note.toLowerCase().slice(0, 12))) return b;
    return b + ' ' + note;
  }

  function whyShift(label, locate, hunch) {
    const lead = hunch ? 'Because you said \u201C' + hunch + '\u201D — ' : '';
    const loc = locate || 'this field';
    if (label === 'SHARPER') return lead + 'tightening ' + loc + ' to one unforgettable claim.';
    if (label === 'WARMER') return lead + 'pulling ' + loc + ' toward lived texture, not r\u00e9sum\u00e9.';
    if (label === 'BOLDER') return lead + 'making the stake explicit in ' + loc + '.';
    if (label === 'YOUR STEER') return lead + 'your steer becomes the actualized text.';
    return lead + 'reframing ' + loc + '.';
  }

  const steerScaffold = {
    hunch: { label: 'TYPE YOUR HUNCH', placeholder: 'e.g. feels flatter than reality…' },
    clarify: { label: 'STEER IN YOUR OWN WORDS', placeholder: 'or tell me where to take it…' },
  };

  global.ExperimentCore = {
    initialExperimentState,
    enrichActualized,
    whyShift,
    steerScaffold,
  };
})(typeof window !== 'undefined' ? window : globalThis);
