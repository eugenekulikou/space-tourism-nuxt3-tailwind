export interface IApiData {
  home: THomePageResponse[];
  destinations: TDestinationsPageResponse[];
  crew: TCrewPageResponse[];
  technology: TTechnologyPageResponse[];
}

export type TResponseData =
  | THomePageResponse[]
  | TDestinationsPageResponse[]
  | TCrewPageResponse[]
  | TTechnologyPageResponse[];

export type THomePageResponse = IPageResponse<IHomePageContent>;
export type TCrewPageResponse = IPageResponse<ICrewPageContent>;
export type TTechnologyPageResponse = IPageResponse<ITechnologyPageContent>;
export type TDestinationsPageResponse = IPageResponse<IDestinationsPageContent>;

interface IPageResponse<T> extends IPageData, IPageMeta {
  content: T;
}

interface IHomePageContent {
  heading: string;
  button: ILink;
  description: string;
}

interface IDestinationsPageContent {
  heading: string;
  images: IImageSrc;
  description: string;
  info: IDestinationInfo[];
}

interface ICrewPageContent {
  heading: string;
  images: IImageSrc;
  role: string;
  bio: string;
}

interface ITechnologyPageContent {
  heading: string;
  subheading: string;
  images: {
    portrait: string;
    landscape: string;
    alt: string;
  };
  description: string;
}

interface IPageData {
  slug: string;
  name: string;
}

interface IPageMeta {
  title: string;
  keywords: string;
  description: string;
}

interface IDestinationInfo {
  [key: string]: string;
}

export interface ILink {
  to: string;
  label: string;
}

interface IImageSrc {
  webp: string;
  png: string;
  alt: string;
}

export type TNavigation = Record<string, ILink[] | SerializedObject<ILink[]>>;
