import { createTestingPinia } from "@pinia/testing";
import { afterEach, describe, expect, test, vi } from "vitest";
import { useNotesStore } from "../../store/notes.store";
import { useAuthStore } from "../../store/auth.store";
import { mount } from "@vue/test-utils";
import _cpt from '../../pages/ai.vue';
import { global_components } from './config/components';

describe('page notes tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const pinia = createTestingPinia();
  const notesStore = useNotesStore(pinia);
  const authStore = useAuthStore(pinia);

  test('notes page can be render', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: {
        plugins: [pinia],
        ...global_components(['HomeEmptyNotes', 'HomeNotes', 'HomeSkeletonNotes'])
      }
    });

    expect(_cpt).toBeTruthy();
    expect(wrapper.vm).toBeTruthy();
    // stores
    expect(notesStore).toBeTruthy();
    expect(authStore).toBeTruthy();
  });
})