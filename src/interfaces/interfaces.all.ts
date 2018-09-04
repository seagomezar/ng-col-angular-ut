export interface IEnvironment {
    STS_AUTHORIZATION_ENDPOINT: string;
    PROFILE_URL: string;
    PRODUCTS_URL: string;
    STS_CLIENT_SECRET: string;
    STS_CLIENT_NAME: string;
    IS_BROWSER?: boolean;
  }
  
  // Conferences
  export interface IConferenceItemLocation {
    city: string;
    country: string;
    emoji_country: string;
  }
  
  export interface IConferenceItemDate {
    start: string;
    end: string;
  }
  
  export interface IConferenceItemCFP {
    has_cfp: boolean;
    link: string;
  }
  
  export interface IConferenceItemCoC {
    has_coc: boolean;
    link: string;
  }
  
  export interface IConferenceLike {
    userId: number | string;
    userName: string;
    date?: Date;
  }
  
  export interface IConferenceComment {
    userId: number | string;
    userName: string;
    userAvatar: string;
    comment: string;
    date: Date;
  }
  
  export interface IConferenceItem {
    id?: string | number;
    name: string;
    url: string;
    location: IConferenceItemLocation;
    date: IConferenceItemDate;
    tags?: string[];
    cfp: IConferenceItemCFP;
    coc: IConferenceItemCoC;
    likes?: IConferenceLike[];
    comments?: IConferenceComment[];
  }
  
  export interface IConferences {
    [month: string]: IConferenceItem[];
  }
  
  export interface IKeyTransform<T> {
    [key: string]: any;
    value: T[];
  }
  
  export interface ILoginToken {
    access_token: string;
    refresh_token: string;
  }
  
  export interface IUserCredentials {
    email: string;
    password: string;
  }
  
  export interface IUserProfile {
    id?: string | number;
    name: string;
    email: string;
    password: string;
    company?: string;
    avatar?: string;
  }
  
  export interface IOkResponse {
    ok: boolean;
  }
  
  export interface IDataResponse<T> {
    data: T;
  }
  