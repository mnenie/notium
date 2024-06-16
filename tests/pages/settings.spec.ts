import { describe, afterEach, vi, test, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import _cpt from '../../pages/settings.vue';
import { global_components } from './config/components';

describe('page settings tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('settings.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: { ...global_components(['SettingsContacts', 'SettingsAppearence']) }
    });
    expect(_cpt).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
  });

  test('settings.vue use a correct middleware', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: { ...global_components(['SettingsContacts', 'SettingsAppearence']) }
    });

    expect(pageMeta).toBeCalledWith({ middleware: 'auth' });
  });

  test('settings.vue use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: { ...global_components(['SettingsContacts', 'SettingsAppearence']) }
    });
    
    expect(seoMeta).toBeCalledWith({ title: 'Notium - smart cloud app for your notes' });
  });
});
