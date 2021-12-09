import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconAvatarAlt } from "../component/AvatarAlt";

//👇 This default export determines where your story goes in the story list
export default {
  title: "General Icons/ Avatar Alt",
  component: WagIconAvatarAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconAvatarAlt 
      size={args.size}
      alt={args.alt}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconAvatarAlt
  />
);

export const Larger_Size = () => (
  <WagIconAvatarAlt
    size="sixty-four"
  />
);




