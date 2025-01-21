import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import { useUsersStore } from '@/stores/users';
import { createRouter, createWebHistory } from 'vue-router'; 
import InitialPageView from '@/views/InitialPageView.vue';
import RegisterView from '@/views/RegisterView.vue';
import { expect } from 'vitest';

const routes = [
  { path: '/', component: InitialPageView },
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

test('interage com a store e navega corretamente', async () => {
  
  setActivePinia(createPinia());
  const usersStore = useUsersStore();

  
  expect(usersStore.users).toEqual(expect.arrayContaining([ 
    { id: 1, name: 'Mariana' }]));

 
  router.push('/');
  await router.isReady();

  const wrapper = mount(InitialPageView, {
    global: {
      plugins: [router, createPinia()],
    },
  });


  await wrapper.find('router-link[to="/register"]').trigger('click');
  expect(router.currentRoute.value.fullPath).toBe('/register');
});
