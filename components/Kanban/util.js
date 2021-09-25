import { Bug, Emergency, High, Low, Middle, Renwu, ShiShi, Xuqiu } from "./assets/Svg";
export function getKanbanTitle(index) {
    switch (index) {
        case 0:
            return '未开始';
        case 1:
            return '开发中';
        case 2:
            return '测试中';
        case 3:
            return '已完成';
        default:
            return '未知';
    }
}
export function switchIssuePriority(issueType) {
    switch (issueType) {
        case "emergency":
            return Emergency;
        case "high":
            return High;
        case "middle":
            return Middle;
        case "low":
            return Low;
        default:
            return Bug;
    }
}
export var switchIssueType = function (issueType) {
    switch (issueType) {
        case "shishi":
            return ShiShi;
        case "xuqiu":
            return Xuqiu;
        case "bug":
            return Bug;
        case "renwu":
            return Renwu;
        default:
            return ShiShi;
    }
};
