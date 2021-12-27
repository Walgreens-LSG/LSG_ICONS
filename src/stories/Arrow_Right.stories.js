//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconArrowRight } from "../component/Arrow_Right";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows Icons/ Arrow Right",
  component: WagIconArrowRight,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconArrowRight
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
  <WagIconArrowRight
  />
);

export const Larger_Size = () => (
  <WagIconArrowRight
    size="sixty-four"
  />
);




