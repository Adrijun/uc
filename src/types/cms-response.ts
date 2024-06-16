export interface CmsResponse {
  contentLink: ContentLink;
  name: string;
  language: Language;
  existingLanguages: Language[];
  masterLanguage: Language;
  contentType: string[];
  parentLink: ContentLink;
  routeSegment: string;
  url: string;
  changed: Date;
  created: Date;
  startPublish: Date;
  stopPublish: null;
  saved: Date;
  status: string;
  category: CmsProperty;
  categoryList: CmsProperty;
  useWidgetBottomSticky: CmsProperty;
  heading: CmsProperty;
  isViewStandardPage: CmsProperty;
  showLeftMenu: CmsProperty;
  teaserDescription: CmsProperty;
  stickyHeading: CmsProperty;
  image: CmsProperty;
  price: CmsProperty;
  description: CmsProperty;
  topContentArea: CmsProperty;
  mainContentArea: MainContentArea;
  button1Text: CmsProperty;
  relatedPagesHeading: CmsProperty;
  relatedPagesContentArea: CmsProperty;
  button1Url: CmsProperty;
  metaTitle: CmsProperty;
  metaDescription: CmsProperty;
  disableIndexing: CmsProperty;
  hidePageFromNav: CmsProperty;
  customCanonicalUrl: CmsProperty;
  subMenuEnabled: CmsProperty;
  subMenuHeadline: CmsProperty;
  subMenuIcon: CmsProperty;
  hideChatBotForPage: CmsProperty;
  stickyBodyText: CmsProperty;
  button2Text: CmsProperty;
  button2Url: CmsProperty;
}

export interface CmsProperty {
  value: ValueValue[] | boolean | ContentLink | number | null | string;
  propertyDataType: string;
}

export interface ValueValue {
  id?: number;
  name?: string;
  description?: string;
  displayOption?: string;
  tag?: null;
  contentLink?: ContentLink;
}

export interface ContentLink {
  id: number;
  workId: number;
  guidValue: string;
  providerName: null;
  url: null | string;
  expanded: null;
}

export interface Language {
  link: null | string;
  displayName: string;
  name: string;
}

export interface MainContentArea {
  expandedValue: ExpandedValue[];
  value: MainContentAreaValue[];
  propertyDataType: string;
}

export interface ExpandedValue {
  contentLink: ContentLink;
  name: string;
  language: Language;
  existingLanguages: Language[];
  masterLanguage: Language;
  contentType: string[];
  parentLink: ContentLink;
  routeSegment: null;
  url: null;
  changed: Date;
  created: Date;
  startPublish: Date;
  stopPublish: null;
  saved: Date;
  status: string;
  category: CmsProperty;
  backgroundImageDesktop?: CmsProperty;
  backgroundImageMobile?: CmsProperty;
  textAlign?: CmsProperty;
  paddingTopBot?: CmsProperty;
  heading: CmsProperty;
  headingColor?: CmsProperty;
  text?: CmsProperty;
  buttonContentArea: CmsProperty;
  transparentButtonContentArea?: CmsProperty;
  formContentArea?: CmsProperty;
  signupLinkContentArea?: CmsProperty;
  backgroundTheme?: CmsProperty;
  isFullScreenMode?: CmsProperty;
  contentHorizontalAlignment?: CmsProperty;
  description?: CmsProperty;
  columnCount?: CmsProperty;
  columnDistribution?: CmsProperty;
  isAutoResizableHeight?: CmsProperty;
  paddingTopZero?: CmsProperty;
  firstContentArea?: CmsProperty;
  secondContentArea?: CmsProperty;
  thirdContentArea?: CmsProperty;
}

export interface MainContentAreaValue {
  displayOption: string;
  tag: null;
  contentLink: ContentLink;
}
