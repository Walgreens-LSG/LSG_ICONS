//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconArrowDown } from "../component/Arrow_Down";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows/ Arrow Down",
  component: WagIconArrowDown,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconArrowDown
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
  <WagIconArrowDown
  />
);

export const Larger_Size = () => (
  <WagIconArrowDown
    size="sixty-four"
  />
);




