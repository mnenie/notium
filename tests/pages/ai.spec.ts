import { afterEach, describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { useNotesStore } from '../../store/notes.store';
import _cpt from '../../pages/ai.vue';
import { global_components } from './config/components';

describe('page ai tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const pinia = createTestingPinia();
  const notesStore = useNotesStore(pinia);

  test('ai.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: {
        plugins: [pinia],
        ...global_components(['AiContent', 'AiMessage'])
      }
    });

    expect(_cpt).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
    expect(notesStore).toBeTruthy();
  });

  test('ai.vue use a correct middleware', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: {
        plugins: [pinia],
        ...global_components(['AiContent', 'AiMessage'])
      }
    });
    expect(pageMeta).toBeCalledWith({ middleware: 'auth' });
  });

  test('ai.vue use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: {
        plugins: [pinia],
        ...global_components(['AiContent', 'AiMessage'])
      }
    });
    expect(seoMeta).toBeCalledWith({ title: 'Notium - smart cloud app for your notes' });
  });
});
