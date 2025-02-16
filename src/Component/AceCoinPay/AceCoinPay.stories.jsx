import AceCoinPay from "./AceCoinPay";

export default {
  title: "Component/AceCoinPay/AceCoinPay Page",
  component: AceCoinPay,
};

const Template = (args) => <AceCoinPay {...args} />;

export const Default = Template.bind({});
Default.args = {};
