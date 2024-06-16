import { describe, afterEach, vi, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import _cpt from '../../pages/index.vue';
import { global_components } from './config/components';

describe('page index tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('index.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: {
        ...global_components([
          'WelcomeAbout',
          'WelcomeWrite',
          'WelcomeRead',
          'WelcomePriorities',
          'WelcomeAi'
        ])
      }
    });

    expect(_cpt).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
  });

  test('index.vue  use a correct layout', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: {
        ...global_components([
          'WelcomeAbout',
          'WelcomeWrite',
          'WelcomeRead',
          'WelcomePriorities',
          'WelcomeAi'
        ])
      }
    });

    expect(pageMeta).toBeCalledWith({ layout: 'welcome' });
  });

  test('index.vue  use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: {
        ...global_components([
          'WelcomeAbout',
          'WelcomeWrite',
          'WelcomeRead',
          'WelcomePriorities',
          'WelcomeAi'
        ])
      }
    });
    
    expect(seoMeta).toBeCalledWith({
      title: 'Notium - smart cloud app for your notes',
      description:
        'Notium is a cloud app allowing users to create and store notes based on their priorities, also using the built-in AI, assistant NotiumAI'
    });
  });
});
