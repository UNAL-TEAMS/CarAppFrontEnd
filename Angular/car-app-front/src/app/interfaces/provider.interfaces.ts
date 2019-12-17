export interface Service {
    has: boolean;
    description: string;
}

export interface Provider {
    email: string;
    phone: number;
    name: string;
    password: string;
    NIT: number;
    avatar: string;
    services: {
        Soat: Service;
        RevTec: Service;
        Rev5k: Service;
    };
}
