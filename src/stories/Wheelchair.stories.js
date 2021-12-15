//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconWheelchair } from "../component/Wheelchair";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Activity Icons/ Wheelchair",
  component: WagIconWheelchair,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconWheelchair
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconWheelchair
  />
);

export const Larger_Size = () => (
  <WagIconWheelchair
    size="sixty-four"
  />
);




