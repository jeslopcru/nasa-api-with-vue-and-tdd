import {shallowMount} from "@vue/test-utils";
import Gallery from "@/components/Gallery"

test('Should print empty message when no result found', () => {
    const component = shallowMount(Gallery);

    expect(component.text()).toContain('No items found');
});