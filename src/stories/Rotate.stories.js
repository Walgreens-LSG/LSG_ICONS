//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRotate } from "../component/Rotate";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo Icons/Rotate",
  component: WagIconRotate,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconRotate
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
  <WagIconRotate
  />
);

export const Larger_Size = () => (
  <WagIconRotate
    size="sixty-four"
  />
);




