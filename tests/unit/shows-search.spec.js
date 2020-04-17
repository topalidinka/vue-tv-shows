import { shallowMount, createLocalVue } from '@vue/test-utils';
import ShowsTable from '@/components/ShowsTable.vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(ElementUI);

describe('ShowsTable.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      'shows/searchShows': jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('change search input and call api', () => {
    const wrapper = shallowMount(ShowsTable, { store, localVue });
    const input = wrapper.find('#search');
    input.element.value = 'the theory';
    input.trigger('input');
    expect(actions['shows/searchShows']).toHaveBeenCalled();
  })

});
