//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconPharmacist } from "../component/Pharmacist";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Avatar Icons/ Pharmacist",
  component: WagIconPharmacist,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPharmacist
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPharmacist
  />
);

export const Larger_Size = () => (
  <WagIconPharmacist
    size="sixty-four"
  />
);




