

export interface CreateUserPayload {
    address: string;
    account: string;
    referrer?: string;
}

export interface User {
    address: string;
    account: string;
    referrer: string;
    topSponsorReward: number;
    whalePoolReward: number;
}