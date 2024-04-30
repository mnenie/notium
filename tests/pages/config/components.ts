import mock_component from '../../mock-component.vue';

export const global_components = (componentNames: string[]): Record<string, any> => {
  const components: Record<string, Component> = {};
  componentNames.forEach((name) => {
    components[name] = mock_component as Component;
  });
  return { components };
};
