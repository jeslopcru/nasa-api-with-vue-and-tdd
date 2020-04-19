import { shallowMount } from "@vue/test-utils";
import Search from "@/components/Search"

test('Renders a found images message', () => {
    const component = shallowMount(Search)
    expect(component.text()).toContain('Found Images (0)');
});