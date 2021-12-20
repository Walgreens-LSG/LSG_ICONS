//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconAutoEnhance } from "../component/AutoEnhance";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Auto Enhance",
  component: WagIconAutoEnhance,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconAutoEnhance
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
  <WagIconAutoEnhance
  />
);

export const Larger_Size = () => (
  <WagIconAutoEnhance
    size="sixty-four"
  />
);




