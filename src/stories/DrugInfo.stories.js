//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconDrugInfo } from "../component/DrugInfo";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Drug Info",
  component: WagIconDrugInfo,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconDrugInfo
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconDrugInfo
  />
);

export const Larger_Size = () => (
  <WagIconDrugInfo
    size="sixty-four"
  />
);




