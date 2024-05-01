import { describe, afterEach, vi, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import _cpt from '../../../pages/user/registration.vue';
import { global_components } from '../config/components';

describe('page registration tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('registration.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });
    expect(_cpt).toBeTruthy();
    expect(wrapper.html()).toContain('Get started')
  });

  test('registration.vue use a correct page meta', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });

    expect(pageMeta).toBeCalledWith({ layout: 'auth', middleware: 'sign-in' });
  });

  test('registration.vue use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });
    
    expect(seoMeta).toBeCalledWith({ title: 'Registration | Notium' });
  });
});
