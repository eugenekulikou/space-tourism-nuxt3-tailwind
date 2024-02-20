export interface ILink {
  to: string;
  label: string;
}

interface IImage {
  webpSrc: string;
  pngSrc: string;
  alt: string;
}

interface IDestinationMeta {
  [key: string]: string;
}

export interface IDestinationPageProps {
  slug: string;
  heading: string;
  name: string;
  links: ILink[];
  images: any;
  description: string;
  meta: IDestinationMeta[];
}

export type TNavigation = Record<
  string,
  INavLink[] | SerializedObject<INavLink[]>
>;

export interface INavLink {
  to: string;
  label: string;
}
