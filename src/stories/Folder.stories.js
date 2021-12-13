//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconFolder } from "../component/Folder";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Folder",
  component: WagIconFolder,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconFolder
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconFolder
  />
);

export const Larger_Size = () => (
  <WagIconFolder
    size="sixty-four"
  />
);




