/// <reference types="react" />
import { IssueType, Priority } from "./kanban";
export declare function getKanbanTitle(index: number): "未开始" | "开发中" | "测试中" | "已完成" | "未知";
export declare function switchIssuePriority(issueType: Priority): JSX.Element;
export declare const switchIssueType: (issueType: IssueType) => JSX.Element;
