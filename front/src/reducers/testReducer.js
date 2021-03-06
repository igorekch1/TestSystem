import {    TEST_RESULT, 
            FETCH_TESTS, 
            CREATE_TEST, 
            DELETE_TEST, 
            SET_CURRENT_TEST, 
            UPDATE_TEST, 
            CREATE_QUESTION, 
            FETCH_QUESTIONS,
            RESET_TEST_RESULT
        } from "../actions/types";

const initialState = {
    allTests: [],
    testItem: {},
    currentTest: null,
    allQuestions: [],
    questionItem: {},
    testResult: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_TESTS:
            return {
                ...state,
                allTests: action.payload
            }

        case CREATE_TEST:
            return {
                ...state,
                testItem: action.payload,
                currentTest: null
            }

        case DELETE_TEST:
            if (action.payload.removed) {
                state.allTests = state.allTests.filter(({id}) => id != action.payload.id)
                return {
                    ...state,
                    currentTest: null
                }
            }

        case SET_CURRENT_TEST:
            return {
                ...state,
                currentTest: action.payload,
                testItem: {}
            }
        
        case UPDATE_TEST:
            state.allTests.map(test => {
                if (test.id === action.payload.id) {
                    test.name = action.payload.name
                }
            })
            return {
                ...state
            } 
        
        case FETCH_QUESTIONS:
            return {
                ...state,
                allQuestions: action.payload
            }
        
        case CREATE_QUESTION:
            return {
                ...state,
                questionItem: action.payload
            }

        case TEST_RESULT: 
        console.log(action.payload)
            return {
                ...state,
                testResult: action.payload   
            }

        case RESET_TEST_RESULT:
        console.log("reseted")
        return {
            ...state,
            testResult: null
        }
        
        default:
            return state;
    }
}
