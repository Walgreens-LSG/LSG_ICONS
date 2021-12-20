//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconImage } from "../component/Image";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Image",
  component: WagIconImage,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconImage
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
  <WagIconImage
  />
);

export const Larger_Size = () => (
  <WagIconImage
    size="sixty-four"
  />
);




