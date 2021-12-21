//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPin } from "../component/Pin";
import { WagIconRestricted } from "../component/Restricted";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc / Restricted",
  component: WagIconRestricted,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconRestricted
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
  <WagIconRestricted
  />
);

export const Larger_Size = () => (
  <WagIconRestricted
    size="sixty-four"
  />
);




