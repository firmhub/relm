export default class OverridesPlugin {
  apply (component, source) {
    if (!source.overrides) return;

    const originalUpdate = component.update;

    component.update = function update (state, action) {
      // TODO: implement overrides
      return originalUpdate(state, action);
    };
  }
}
