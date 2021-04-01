import { createLocalVue, mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.vue'
import { vuetifyPlugin } from '@dematicv2/front.design'

describe('EtablissementForm.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = vuetifyPlugin()
  })

  it('should mount with text props', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      vuetify,
      propsData: {
        text: 'My title'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })
})
