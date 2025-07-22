export {};

export type Roles = 'admin' | 'moderator';

declare global {
    interface CustomJwtSessionClaims {
        metadata: {
            roles?: Roles;
        }
    }
}