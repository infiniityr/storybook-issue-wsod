import HelloWorld from './HelloWorld.vue'
import md from './HelloWorld.md'
import { genereTemplate } from '../../../.storybook/util/helpers'

export default {
  title: 'UI/HelloWorld',
  component: HelloWorld,
  parameters: {
    docs: {
      description: {
        component: md
      }
    }
  }
}

const Template = genereTemplate({
  components: { HelloWorld },
  template: '<HelloWorld v-bind="$props"/>'
})

export const Default = Template.bind({})
Default.args = {
  text: 'My Hello-World'
}

export const OtherStory = Template.bind({})
OtherStory.args = {
  ...Default.args,
  text: 'My other hello-world'
}
