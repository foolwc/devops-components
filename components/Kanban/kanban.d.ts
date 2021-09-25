import React from "react";
export declare type Status = 'notStarted' | 'dev' | 'test' | 'done';
export declare type Priority = 'emergency' | 'high' | 'middle' | 'low';
export declare type IssueType = 'shishi' | 'xuqiu' | 'renwu' | 'bug';
export interface Issue {
    id: number;
    title: string;
    status: Status;
    priority: Priority;
    issueType: IssueType;
    deadline?: string;
}
export interface KanbanProps {
    onIssueClick?: (issue: Issue) => void;
    records?: Issue[];
    onIssueDragEnd?: (issue: Issue, targetStatus: number) => void;
    height?: string;
}
declare const Kanban: React.FC<KanbanProps>;
export default Kanban;
