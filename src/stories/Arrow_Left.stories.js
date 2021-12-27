//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconArrowLeft } from "../component/Arrow_Left";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Arrows Icons/ Arrow Left",
  component: WagIconArrowLeft,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconArrowLeft
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
  <WagIconArrowLeft
  />
);

export const Larger_Size = () => (
  <WagIconArrowLeft
    size="sixty-four"
  />
);




