import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import InitialPageView from '@/views/InitialPageView.vue';
import RegisterView from '@/views/RegisterView.vue';

const routes = [
  { path: '/', component: InitialPageView },
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

test('navega para About ao clicar no link', async () => {
  router.push('/');
  await router.isReady();

  const wrapper = mount(InitialPageView, {
    global: {
      plugins: [router],
    },
  });

  await wrapper.find('router-link[to="/register"]').trigger('click');
  expect(router.currentRoute.value.fullPath).toBe('/register');
});
