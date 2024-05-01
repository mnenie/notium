import { describe, afterEach, vi, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import _cpt from '../../pages/about.vue';
import { global_components } from './config/components';

const useAuthStore = defineStore('auth', () => {});
import { EditorKey } from '../../utils/symbols';

describe('page about tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const pinia = createTestingPinia();
  const authStore = useAuthStore(pinia);

  const editorValue = { selectedText: '', content: '' };

  test('about.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: {
        provide: {
          [EditorKey as symbol]: editorValue
        },
        plugins: [pinia],
        ...global_components(['EditorTiptap', 'UiSkeleton'])
      }
    });

    expect(_cpt).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
    expect(authStore).toBeTruthy();
  });

  test('about.vue use a correct middleware', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: {
        provide: {
          [EditorKey as symbol]: editorValue
        },
        plugins: [pinia],
        ...global_components(['EditorTiptap', 'UiSkeleton'])
      }
    });

    expect(pageMeta).toBeCalledWith({middleware: 'auth'})
  })

  test('about.vue use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: {
        provide: {
          [EditorKey as symbol]: editorValue
        },
        plugins: [pinia],
        ...global_components(['EditorTiptap', 'UiSkeleton'])
      }
    });

    expect(seoMeta).toBeCalledWith({title: 'Notium - cloud app of your notes'})
  })
});
