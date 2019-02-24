import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.recent().getDate()}
                    content={faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.recent().getDate()}
                    content={faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.recent().getDate()}
                    content={faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.recent().getDate()}
                    content={faker.random.words()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.recent().getDate()}
                    content={faker.random.words()}
                />
            </ApprovalCard>
        </div>    
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));