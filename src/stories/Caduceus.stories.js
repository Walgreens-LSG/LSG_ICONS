//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCaduceus } from "../component/Caduceus";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Caduceus",
  component: WagIconCaduceus,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconCaduceus
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCaduceus
  />
);

export const Larger_Size = () => (
  <WagIconCaduceus
    size="sixty-four"
  />
);




