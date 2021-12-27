//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconLink } from "../component/Link";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc Icons / Link",
  component: WagIconLink,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconLink
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
  <WagIconLink
  />
);

export const Larger_Size = () => (
  <WagIconLink
    size="sixty-four"
  />
);




