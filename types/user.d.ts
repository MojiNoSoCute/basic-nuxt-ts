interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipCode: string;
        geo: {
            lat: string;
            lng: string;
        }
    }
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}