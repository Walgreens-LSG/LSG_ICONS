//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconYouTube } from "../component/YouTube";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Social Icons / YouTube",
  component: WagIconYouTube,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconYouTube
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconYouTube
  />
);

export const Larger_Size = () => (
  <WagIconYouTube
    size="sixty-four"
  />
);




