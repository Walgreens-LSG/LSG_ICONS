//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconArrowLeftUp } from "../component/Arrow_LeftUp";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows/ Arrow left Up",
  component: WagIconArrowLeftUp,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconArrowLeftUp
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
  <WagIconArrowLeftUp
  />
);

export const Larger_Size = () => (
  <WagIconArrowLeftUp
    size="sixty-four"
  />
);




