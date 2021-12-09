import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconChatRx } from "../component/ChatRx";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Chat Icons/ Chat Rx",
  component: WagIconChatRx,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconChatRx 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconChatRx
  />
);

export const Larger_Size = () => (
  <WagIconChatRx
    size="sixty-four"
  />
);




