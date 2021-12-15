//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconGiveAShot } from "../component/GiveAShot";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Give a shot",
  component: WagIconGiveAShot,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconGiveAShot
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconGiveAShot
  />
);

export const Larger_Size = () => (
  <WagIconGiveAShot
    size="sixty-four"
  />
);




