const initialState = {
    questions: [
        {
            title:'سوال 1',
            options:[
                {
                key:1,
                title: 'گزینه 1'
                },
                {
                key:2,
                title: 'گزینه 2'
                },
                {
                    key:3,
                    title: 'گزینه 3'
                },
                {
                    key:4,
                    title: 'گزینه 4'
                }],
            answerKey:1,
            score:100
        },
        {
            title:'سوال 2',
            options:[
                {
                    key:1,
                    title: 'گزینه 1'
                },
                {
                    key:2,
                    title: 'گزینه 2'
                },
                {
                    key:3,
                    title: 'گزینه 3'
                },
                {
                    key:4,
                    title: 'گزینه 4'
                }],
            answerKey:1,
            score:100
        },
        {
            title:'سوال 3',
            options:[
                {
                    key:1,
                    title: 'گزینه 1'
                },
                {
                    key:2,
                    title: 'گزینه 2'
                },
                {
                    key:3,
                    title: 'گزینه 3'
                },
                {
                    key:4,
                    title: 'گزینه 4'
                }],
            answerKey:1,
            score:50
        },
        {
            title:'سوال 4',
            options:[
                {
                    key:1,
                    title: 'گزینه 1'
                },
                {
                    key:2,
                    title: 'گزینه 2'
                },
                {
                    key:3,
                    title: 'گزینه 3'
                },
                {
                    key:4,
                    title: 'گزینه 4'
                }],
            answerKey:1,
            score:20
        },
        {
            title:'سوال 5',
            options:[
                {
                    key:1,
                    title: 'گزینه 1'
                },
                {
                    key:2,
                    title: 'گزینه 2'
                },
                {
                    key:3,
                    title: 'گزینه 3'
                },
                {
                    key:4,
                    title: 'گزینه 4'
                }],
            answerKey:1,
            score:100
        }
    ],
};

const quiz = (state= initialState, action)=> {
     return state;
};

export default quiz;
