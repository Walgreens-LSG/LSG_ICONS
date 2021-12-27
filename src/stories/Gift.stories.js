//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconGift } from "../component/Gift";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Gamification Icons/ Gift",
  component: WagIconGift,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconGift
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
  <WagIconGift
  />
);

export const Larger_Size = () => (
  <WagIconGift
    size="sixty-four"
  />
);




