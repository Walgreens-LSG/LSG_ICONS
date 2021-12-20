//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconArrowUp } from "../component/Arrow_Up";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows/ Arrow Up",
  component: WagIconArrowUp,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconArrowUp
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
  <WagIconArrowUp
  />
);

export const Larger_Size = () => (
  <WagIconArrowUp
    size="sixty-four"
  />
);




