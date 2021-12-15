//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconBloodGlucose } from "../component/BloodGlucose";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Blood glucose",
  component: WagIconBloodGlucose,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconBloodGlucose
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconBloodGlucose
  />
);

export const Larger_Size = () => (
  <WagIconBloodGlucose
    size="sixty-four"
  />
);




