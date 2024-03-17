import { createDirectus, rest } from '@directus/sdk';

export interface Links {
    id: string;
    user_created: string;
    date_created: Date;
    user_updated: null;
    date_updated: null;
    Display: string;
    Url: string;
    Portofolio: string;
}

export interface Projects {
    id: string;
    user_created: string;
    date_created: Date;
    user_updated: null;
    date_updated: null;
    ProjectName: string;
    Image: string;
    Url: string;
    Portofolio: string;
}

export interface Experiences {
    id: string;
    user_created: string;
    date_created: Date;
    user_updated: string;
    date_updated: Date;
    Name: string;
    CompanyName: string;
    Current: boolean;
    Portofolio: string;
    StartDate: string;
    EndDate: string;
}

export interface Portofolio {
    id: string;
    user_created: string;
    date_created: Date;
    user_updated: string;
    date_updated: Date;
    Fullname: string;
    Title: string;
    AboutMe: string;
    Skills: string[];
    Photo: string;
    HeaderLogoLight: string;
    HeaderLogoDark: string;
    Links: Links[];
    Projects: Projects[];
    Experiences: Experiences[];
}

interface Schema {
    portofolio: Portofolio[];
}

export const baseUrl = 'http://85.113.71.176:8055'

// Client with REST support
export const client = createDirectus<Schema>(baseUrl).with(rest());
