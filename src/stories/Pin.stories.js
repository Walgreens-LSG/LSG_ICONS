//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPin } from "../component/Pin";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc / Pin",
  component: WagIconPin,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconPin
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
  <WagIconPin
  />
);

export const Larger_Size = () => (
  <WagIconPin
    size="sixty-four"
  />
);




