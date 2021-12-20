//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconOrderPrintsConfirm } from "../component/OrderPrints_Confirm";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Order Prints - confirm",
  component: WagIconOrderPrintsConfirm,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconOrderPrintsConfirm
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
    </div>
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconOrderPrintsConfirm
  />
);

export const Larger_Size = () => (
  <WagIconOrderPrintsConfirm
    size="sixty-four"
  />
);




