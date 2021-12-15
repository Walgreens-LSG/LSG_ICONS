//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHealthDashboard } from "../component/HealthDashboard";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Health Dashboard",
  component: WagIconHealthDashboard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHealthDashboard
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHealthDashboard
  />
);

export const Larger_Size = () => (
  <WagIconHealthDashboard
    size="sixty-four"
  />
);




