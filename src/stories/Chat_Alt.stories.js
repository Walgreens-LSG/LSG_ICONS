//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconChatAlt } from "../component/ChatAlt";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Chat Icons/ Chat Alt",
  component: WagIconChatAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconChatAlt 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconChatAlt
  />
);

export const Larger_Size = () => (
  <WagIconChatAlt
    size="sixty-four"
  />
);




