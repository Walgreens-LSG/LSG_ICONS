//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconBlood } from "../component/Blood";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Blood",
  component: WagIconBlood,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconBlood
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconBlood
  />
);

export const Larger_Size = () => (
  <WagIconBlood
    size="sixty-four"
  />
);




