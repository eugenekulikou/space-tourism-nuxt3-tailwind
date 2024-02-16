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
  heading: string;
  name: string;
  images: IImage[];
  destinationsLinks: ILink[];
  description: string;
  meta: IDestinationMeta[];
}
