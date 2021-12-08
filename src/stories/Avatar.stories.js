import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconAvatar } from "../component/Avatar";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Component/ Avatar",
  component: WagIconAvatar,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconAvatar 
      size={args.size}
      alt={args.alt}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconAvatar
  />
);

export const Larger_Size = () => (
  <WagIconAvatar
    size="sixty-four"
  />
);




