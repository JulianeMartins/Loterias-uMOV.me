import { mount } from "@vue/test-utils";
import Toggle from "@/components/Toggle.vue";

const options = [
  {
    label: "Option 0",
    value: 0,
  },
  {
    label: "Option 1",
    value: 1,
  },
];

describe("Toggle", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Toggle, {
      props: { options },
    });
  });
  test("match snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("set default option", () => {
    expect(wrapper.vm.selected).toBe(options[0].value);
  });
  [];
  test("emit change on change", () => {
    const label = wrapper.find('[datatestid = "label-0"]');
    label.trigger("change");
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
