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

test('Should update found images when the query is changed with the query size', async () => {
    const component = shallowMount(Search);
    const query = 'moon';
    await component.vm.doRequest(query);

    expect(component.text()).toContain('Found Images (' + query.length + ')');
});

test('Should update the Found Images on submit with the query size', async () => {
    const component = shallowMount(Search);
    const query = 'moon';

    component.setData({query});
    await component.find('form').trigger('submit');

    expect(component.text()).toContain('Found Images (' + query.length + ')')
});