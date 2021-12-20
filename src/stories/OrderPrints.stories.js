//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconOrderPrints } from "../component/OrderPrints";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Order Prints",
  component: WagIconOrderPrints,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconOrderPrints
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
  <WagIconOrderPrints
  />
);

export const Larger_Size = () => (
  <WagIconOrderPrints
    size="sixty-four"
  />
);




