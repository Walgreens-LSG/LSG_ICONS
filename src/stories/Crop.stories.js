//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconCrop } from "../component/Crop";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Crop",
  component: WagIconCrop,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconCrop
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
  <WagIconCrop
  />
);

export const Larger_Size = () => (
  <WagIconCrop
    size="sixty-four"
  />
);




