//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconStarAlt } from "../component/StarAlt";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Gamification / Star - alt",
  component: WagIconStarAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconStarAlt
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
  <WagIconStarAlt
  />
);

export const Larger_Size = () => (
  <WagIconStarAlt
    size="sixty-four"
  />
);




