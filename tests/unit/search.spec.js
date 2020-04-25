import {shallowMount} from "@vue/test-utils";
import Search from "@/components/Search"
import axios from "axios"

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

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({
        data: {
            collection: {
                items: [
                    {
                        links: [
                            {
                                href: 'http://una-url.com'
                            }
                        ]
                    },
                    {
                        links: [
                            {
                                href: 'http://dos-url.com'
                            }
                        ]
                    }
                ]
            }
        }
    }))
}));

test('Should call the API on submit', async () => {
    const component = shallowMount(Search);
    const query = 'moon';

    component.setData({query});
    await component.find('form').trigger('submit');

    expect(axios.get).toBeCalledWith('https://images-api.nasa.gov/search?media_type=image&q=' + query);
});

test('Should call the API on submit and update the result array', async () => {
    const component = shallowMount(Search);
    const query = 'moon';

    component.setData({query});
    await component.find('form').trigger('submit');

    expect(component.vm.numberOfImages).toBe(2)

});