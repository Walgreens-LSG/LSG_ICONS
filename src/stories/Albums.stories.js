//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconAlbums } from "../component/Albums";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo / Albums",
  component: WagIconAlbums,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconAlbums
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
  <WagIconAlbums
  />
);

export const Larger_Size = () => (
  <WagIconAlbums
    size="sixty-four"
  />
);




