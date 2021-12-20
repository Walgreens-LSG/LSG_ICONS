//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconFavorite } from "../component/Favorite";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Gamification / Favortie",
  component: WagIconFavorite,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconFavorite
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
  <WagIconFavorite
  />
);

export const Larger_Size = () => (
  <WagIconFavorite
    size="sixty-four"
  />
);




