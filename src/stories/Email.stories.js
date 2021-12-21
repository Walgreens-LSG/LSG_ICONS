//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconEmail } from "../component/Email";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc / Email",
  component: WagIconEmail,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconEmail
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
    </div>
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconEmail
  />
);

export const Larger_Size = () => (
  <WagIconEmail
    size="sixty-four"
  />
);




