export interface DataType {
    key: string;
    name: string;
    duration: string;
    startTime: string;
    endTime: string;
    dueHours: string;
    department: string;
    project: string;
    notes: string;
    status: "pending" | "approved" | "rejected";
}