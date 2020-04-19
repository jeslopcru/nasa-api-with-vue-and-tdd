import {shallowMount} from "@vue/test-utils";
import Search from "@/components/Search"

test('Renders a found images message', () => {
    const component = shallowMount(Search);
    expect(component.text()).toContain('Found Images (0)');
});

test('Renders a found images message with a provide value', async () => {
    const component = shallowMount(Search);
    const currentNumberOfImages = 32;
    component.setData({
        numberOfImages: currentNumberOfImages
    });
    await component.vm.$nextTick();
    expect(component.text()).toContain('Found Images (' + currentNumberOfImages + ')');
});