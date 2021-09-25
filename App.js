import React from 'react';
import Button, { ButtonSize, ButtonType } from "./components/Button/button";
import './styles/index.scss';
import './App.css';
import Kanban from "./components/Kanban/kanban";
import { getKanbanTitle } from "./components/Kanban/util";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("h2", null, "Button\u7EC4\u4EF6"),
            React.createElement(Button, { btnType: ButtonType.Primary }, " \u6CE8 \u518C "),
            React.createElement(Button, { btnType: ButtonType.Default }, " \u767B \u5F55 "),
            React.createElement(Button, { btnType: ButtonType.Default, disabled: true }, " \u767B \u5F55(disabled) "),
            React.createElement(Button, { btnType: ButtonType.Danger }, " \u5220 \u9664 "),
            React.createElement(Button, { btnType: ButtonType.Danger, disabled: true }, " \u5220 \u9664 ")),
        React.createElement("div", null,
            React.createElement(Button, { size: ButtonSize.Small, btnType: ButtonType.Primary }, " \u6CE8 \u518C "),
            React.createElement(Button, { size: ButtonSize.Small, btnType: ButtonType.Default }, " \u767B \u5F55 "),
            React.createElement(Button, { size: ButtonSize.Small, btnType: ButtonType.Default, disabled: true }, " \u767B \u5F55(disabled) "),
            React.createElement(Button, { size: ButtonSize.Small, btnType: ButtonType.Danger }, " \u5220 \u9664 "),
            React.createElement(Button, { size: ButtonSize.Small, btnType: ButtonType.Danger, disabled: true }, " \u5220 \u9664 ")),
        React.createElement("div", null,
            React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonType.Primary }, " \u6CE8 \u518C "),
            React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonType.Default }, " \u767B \u5F55 "),
            React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonType.Default, disabled: true }, " \u767B \u5F55(disabled) "),
            React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonType.Danger }, " \u5220 \u9664 "),
            React.createElement(Button, { size: ButtonSize.Large, btnType: ButtonType.Danger, disabled: true }, " \u5220 \u9664 ")),
        React.createElement("div", null,
            React.createElement("h2", null, "\u770B\u677F\u7EC4\u4EF6"),
            React.createElement(Kanban, { records: [
                    {
                        id: 1,
                        title: 'test',
                        status: 'done',
                        priority: "emergency",
                        issueType: 'shishi',
                        deadline: '2021年9月10日'
                    },
                    {
                        id: 2,
                        title: '[示例任务]-增加邮件邀请成员弹窗并完成邀请成员交互功能',
                        status: 'notStarted',
                        priority: "high",
                        issueType: 'renwu',
                        deadline: '2021年9月10日'
                    }, {
                        id: 3,
                        title: '[示例需求]-通过访问邀请链接可注册成为团队成员',
                        status: 'notStarted',
                        priority: "middle",
                        issueType: 'shishi',
                        deadline: '2021年9月10日'
                    }, {
                        id: 4,
                        title: '需求2',
                        status: 'test',
                        priority: "emergency",
                        issueType: 'bug',
                        deadline: '2021年9月10日'
                    }, {
                        id: 5,
                        title: '需求2',
                        status: 'dev',
                        priority: "low",
                        issueType: 'xuqiu',
                        deadline: '2021年9月10日'
                    }, {
                        id: 6,
                        title: '需求2',
                        status: 'dev',
                        priority: "high",
                        issueType: 'bug',
                        deadline: '2021年9月10日'
                    }, {
                        id: 7,
                        title: '需求2',
                        status: 'notStarted',
                        priority: "middle",
                        issueType: 'xuqiu',
                        deadline: '2021年9月10日'
                    },
                ], onIssueDragEnd: function (issue, targetStatus) {
                    alert("Issue " + JSON.stringify(issue) + " \u88AB\u62D6\u653E\u81F3 " + getKanbanTitle(targetStatus));
                }, onIssueClick: function (issue) {
                    alert("Issue " + JSON.stringify(issue) + " \u88AB\u70B9\u51FB");
                } }))));
}
export default App;
