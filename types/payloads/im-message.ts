export interface InteractiveMessagePayload {
    type: string;
    team: Team;
    user: User;
    api_app_id: string;
    token: string;
    container: Container;
    trigger_id: string;
    response_url: string;
    actions: any[];
}

export interface Container {
    type: string;
    text: string;
}

export interface Team {
    id: string;
    domain: string;
}

export interface User {
    id: string;
    username: string;
    name: string;
    team_id: string;
}
