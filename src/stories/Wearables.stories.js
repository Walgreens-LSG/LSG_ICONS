//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconWearables } from "../component/Wearables";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Device Icons / Wearables",
  component: WagIconWearables,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconWearables
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconWearables
  />
);

export const Larger_Size = () => (
  <WagIconWearables
    size="sixty-four"
  />
);




