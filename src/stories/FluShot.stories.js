//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconFluShot } from "../component/FluShot";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Flu shot",
  component: WagIconFluShot,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconFluShot
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconFluShot
  />
);

export const Larger_Size = () => (
  <WagIconFluShot
    size="sixty-four"
  />
);




