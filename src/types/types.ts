import type { ComponentPropsWithoutRef } from 'react';

interface Destination {
    name: string;
}

interface Policy {
    policyNumber: string;
    destinations: Destination[];
    type: "Single Trip" | string; // Using a union type for safety
    policyStart: string;
    policyEnd: string;
    maxTripDuration?: number | string; // Optional because it only displays for Single Trip
    planName: string;
    excess: number | string;
}

export interface PolicyCardProps {
    policy: Policy;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}