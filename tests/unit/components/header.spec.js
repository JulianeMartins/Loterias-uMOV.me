import { mount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header", () => {
  test("match snapshot", () => {
    const wrapper = mount(Header);
    expect(wrapper.element).toMatchSnapshot();
  });
});
