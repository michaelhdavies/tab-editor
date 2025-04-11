declare namespace Express {
    interface Request {
        tab?: {
            tabContent: number[][];
            createdAt: Date;
            updatedAt: Date;
        };
    }}