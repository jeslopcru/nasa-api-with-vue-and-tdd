import {shallowMount} from "@vue/test-utils";
import Gallery from "@/components/Gallery"

test('Should print empty message when no result found', () => {
    const component = shallowMount(Gallery, {
        propsData: {
            results: []
        }
    });

    expect(component.text()).toContain('No items found');
});

test('Should print each result item', () => {
    const firstItem = 'http://una-url.com';
    const secondItem = 'http://dos-url.com';
    const component = shallowMount(Gallery,
        {
            propsData: {
                results: [
                    firstItem,
                    secondItem
                ]
            }
        });

    expect(component.text()).toContain(firstItem);
    expect(component.text()).toContain(secondItem);
});
