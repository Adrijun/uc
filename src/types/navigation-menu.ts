export interface NavigationMenuResponse {
  mobileMenu: any[];
  desktopMenu: DesktopMenu;
  notificationsMessages: NotificationsMessages;
}

export interface DesktopMenu {
  products: Products;
  article: Article;
  category: Article;
  teaserImages: TeaserImages;
  helpLink: string;
  loginLink: string;
}

export interface Article {
  title: string;
  menuItems: MenuItem[];
}

export interface MenuItem {
  url: string;
  title: string;
  name: string;
  fontAwesomeClass: null | string;
  teaserText: null | string;
}

export interface Products {
  first: Article;
  second: Article;
}

export interface TeaserImages {
  first: TeaserImage[];
  second: TeaserImage[];
}

export interface TeaserImage {
  FACode: null;
  Heading: string;
  BackgroundTheme: string;
  TextColorTheme: string;
  BackgroundImage: string;
  CardSize: string;
  VerticalAlign: string;
  SectionTextAlign: string;
  SectionText: string;
  ButtonBlocks: ButtonBlock[];
}

export interface ButtonBlock {
  NDSButtonSize: string;
  NDSButtonVariant: string;
  NDSOnBg: string;
  Heading: string;
  IsSubHeading: boolean;
  SubHeading: null;
  CtaUrl: string;
  ButtonSize: string;
  ColourTheme: string;
  IsBadge: boolean;
  BadgeColour: string;
  BadgeTopText: null;
  BadgeMidText: null;
  BadgeBottomText: null;
  ButtonText: string;
}

export interface NotificationsMessages {
  loggedInNotificationMessage: NotificationMessage;
  notificationMessage: NotificationMessage;
}

export interface NotificationMessage {
  title: string;
  theme: string;
  description: string;
  icon: string;
  showNotifications: boolean;
}
