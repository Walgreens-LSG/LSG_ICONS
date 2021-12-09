import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCommunity } from "../component/Community";

//👇 This default export determines where your story goes in the story list
export default {
  title: "General Icons/ Community",
  component: WagIconCommunity,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconCommunity
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCommunity
  />
);

export const Larger_Size = () => (
  <WagIconCommunity
    size="sixty-four"
  />
);




