//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconStar } from "../component/Star";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Gamification Icons/ Star",
  component: WagIconStar,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconStar
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
  <WagIconStar
  />
);

export const Larger_Size = () => (
  <WagIconStar
    size="sixty-four"
  />
);




