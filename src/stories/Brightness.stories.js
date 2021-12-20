//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconBrightness } from "../component/Brightness";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Brightness",
  component: WagIconBrightness,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconBrightness
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
  <WagIconBrightness
  />
);

export const Larger_Size = () => (
  <WagIconBrightness
    size="sixty-four"
  />
);




