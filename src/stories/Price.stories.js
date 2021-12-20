//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconPrice } from "../component/Price";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert Icons/ Price",
  component: WagIconPrice,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconPrice
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
  <WagIconPrice
  />
);

export const Larger_Size = () => (
  <WagIconPrice
    size="sixty-four"
  />
);




