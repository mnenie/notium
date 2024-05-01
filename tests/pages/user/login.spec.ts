import { describe, afterEach, vi, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import _cpt from '../../../pages/user/login.vue';
import { global_components } from '../config/components';

describe('page login tests', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test('login.vue can be mounted', () => {
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', vi.fn());
    const wrapper = mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });
    expect(_cpt).toBeTruthy();
    expect(wrapper.html()).toContain('Welcome back')
  });

  test('login.vue use a correct page meta', () => {
    const pageMeta = vi.fn();
    vi.stubGlobal('definePageMeta', pageMeta);
    vi.stubGlobal('useSeoMeta', vi.fn());
    mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });

    expect(pageMeta).toBeCalledWith({ layout: 'auth', middleware: 'sign-in' });
  });

  test('login.vue use a correct seo meta', () => {
    const seoMeta = vi.fn();
    vi.stubGlobal('definePageMeta', vi.fn());
    vi.stubGlobal('useSeoMeta', seoMeta);
    mount(_cpt, {
      global: { ...global_components(['AuthForm', 'AuthLine', 'AuthGithub', 'AuthPolicy']) }
    });
    
    expect(seoMeta).toBeCalledWith({ title: 'Login | Notium' });
  });
});
