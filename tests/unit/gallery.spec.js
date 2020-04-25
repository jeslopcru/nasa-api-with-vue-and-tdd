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
    const firstUrl = 'http://una-url.com';
    const secondUrl = 'http://dos-url.com';

    const dataResult = [
        {
            links: [
                {
                    href: firstUrl
                }
            ]
        },
        {
            links: [
                {
                    href: secondUrl
                }
            ]
        }
    ];
    const component = shallowMount(Gallery,
        {
            propsData: {
                results: dataResult
            }
        });


    expect(component.findAll('img').at(0).attributes().src).toContain(firstUrl);
    expect(component.findAll('img').at(1).attributes().src).toContain(secondUrl);
});
