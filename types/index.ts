import { ComponentType } from "react";
export type linkTypes = {
  name: string;
  href: string;
};

export type SocialLinkTypes = {
  name: string;
  href: string;
  icon: ComponentType<any>; // React component type for the icon
};

export type userTypes = {
     name: string; 
    email: string;
    imageUrl: string;
}