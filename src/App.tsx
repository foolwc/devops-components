import React from 'react';
import Button from "./components/Button/button";
import './styles/index.scss'
import './App.css'
import Kanban from "./components/Kanban/kanban";
import { getKanbanTitle } from "./components/Kanban/util";

function App() {
    return (
        <>
            <div>
                <h2>Button组件</h2>
                <Button btnType={'default'}> 注 册 </Button>
                <Button btnType={'default'}> 登 录 </Button>
                <Button btnType={'default'} disabled> 登 录(disabled) </Button>
                <Button btnType={'default'}> 删 除 </Button>
                <Button btnType={'default'} disabled> 删 除 </Button>
            </div>
            <div>
                <Button size={'sm'} btnType={'primary'}> 注 册 </Button>
                <Button size={'sm'} btnType={'default'}> 登 录 </Button>
                <Button size={'sm'} btnType={'default'} disabled> 登 录(disabled) </Button>
                <Button size={'sm'} btnType={'danger'}> 删 除 </Button>
                <Button size={'sm'} btnType={'danger'} disabled> 删 除 </Button>
            </div>
            <div>
                <Button size={'lg'} btnType={'primary'}> 注 册 </Button>
                <Button size={'lg'} btnType={'default'}> 登 录 </Button>
                <Button size={'lg'} btnType={'default'} disabled> 登 录(disabled) </Button>
                <Button size={'lg'} btnType={'danger'}> 删 除 </Button>
                <Button size={'lg'} btnType={'danger'} disabled> 删 除 </Button>
            </div>
            <div>
                <h2>看板组件</h2>
                <Kanban
                    records={[
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
                    ]}
                    onIssueDragEnd={(issue, targetStatus) => {
                        alert(`Issue ${JSON.stringify(issue)} 被拖放至 ${getKanbanTitle(targetStatus)}`);
                    }}
                    onIssueClick={(issue) => {
                        alert(`Issue ${JSON.stringify(issue)} 被点击`);
                    }}
                />
            </div>
        </>
    );
}

export default App;
