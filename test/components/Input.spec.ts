import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Input from '@/components/Input.vue';

// @vitest-environment jsdom
describe('Input', () => {
  it('Should be able to mount with no value', () => {
    const wrapper = mount(Input);
    expect(wrapper).toBeTruthy();
    const input = wrapper.find('input');
    expect(input).toBeTruthy();
    expect(input.element.value).toBe('');
    expect(input.element.type).toBe('text');
    expect(input.element.id).toBeTruthy();
  });

  it('Should be able to do a numeric input', () => {
    const wrapper = mount(Input, {
      attrs: {
        type: 'number',
      },
      props: {
        modelValue: 5,
      }
    });
    const input = wrapper.find('input');
    expect(input.element.value).toBe('5');
    expect(input.element.type).toBe('number');
    expect(input.element.id).toBeTruthy();
  })
});
