import { mount } from '@vue/test-utils';
import InitialPageView from '@/views/InitialPageView.vue';
import router from '@/router/index';

describe('InitialPageView - Botão Register', () => {
  it('navega para  /register ', async () => {
    const wrapper = mount(InitialPageView, {
      global: {
        plugins: [router],
      },
    });

    const registerButton = wrapper.find('a.nav-link.active'); 
    expect(registerButton.exists()).toBe(true);

    await registerButton.trigger('click');
    await router.isReady();

    expect(wrapper.vm.$route.path).toBe('/register');
  });
});
