export interface HmCategoriesResponse {
    type: Type;
    departmentName: string;
    departmentAliasPath: string;
    departmentTargetPath: string;
    links: Link[];
}

export interface Link {
    title: string;
    preamble: Preamble;
    imagePath: string;
    imageText: string;
    path: string;
    aliasPath: string;
    trackingLabel: string;
    targetTemplate: TargetTemplate;
    targetPath: string;
}

export enum Preamble {
    Empty = "",
    The02A = "0-2a",
    The28A = "2-8a",
    The914A = "9-14a",
    VerTodo = "Ver todo",
}

export enum TargetTemplate {
    AppsHmTemplatesContentEditorialcampaignpage = "/apps/hm/templates/content/editorialcampaignpage",
    AppsHmTemplatesContentSubdepartment = "/apps/hm/templates/content/subdepartment",
}

export enum Type {
    HmComponentsNavigationNavigationcarousel = "hm/components/navigation/navigationcarousel",
}
