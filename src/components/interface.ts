export type labelObject = { label?: string; value?: string };

export type journeyAssignmentPayload = { journeyId?: number, car?: string, driver?: string, groupId?: string, groupPax?: number};

export type mockJourneyList =  {
    journeyId: string;
    date: string;
    time: number;
    totalPax: number;
    pickup: string[];
    dropoff: string[];
    assignment: journeyAssignmentPayload[];
};