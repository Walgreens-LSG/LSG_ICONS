//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconTrophy } from "../component/Trophy";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Gamification Icons/ Trophy",
  component: WagIconTrophy,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconTrophy
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
  <WagIconTrophy
  />
);

export const Larger_Size = () => (
  <WagIconTrophy
    size="sixty-four"
  />
);




