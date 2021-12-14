//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconInsuranceCard } from "../component/InsuranceCard";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Shopping Icons / Card - Insurance",
  component: WagIconInsuranceCard,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconInsuranceCard
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconInsuranceCard
  />
);

export const Larger_Size = () => (
  <WagIconInsuranceCard
    size="sixty-four"
  />
);




