//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHearing } from "../component/Hearing";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Services Icons / Hearing",
  component: WagIconHearing,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHearing
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHearing
  />
);

export const Larger_Size = () => (
  <WagIconHearing
    size="sixty-four"
  />
);




