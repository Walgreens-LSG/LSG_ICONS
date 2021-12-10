//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconChat } from "../component/Chat";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Chat Icons/ Chat",
  component: WagIconChat,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconChat 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconChat
  />
);

export const Larger_Size = () => (
  <WagIconChat
    size="sixty-four"
  />
);




