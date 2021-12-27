//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconMinimize } from "../component/Minimize";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows Icons/ Minimize",
  component: WagIconMinimize,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconMinimize
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
  <WagIconMinimize
  />
);

export const Larger_Size = () => (
  <WagIconMinimize
    size="sixty-four"
  />
);




