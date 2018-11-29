// @flow

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

type Props = {};
type State = {
    index: number,
    show_ans: boolean,
    right_no: Array<number>,
    wrong_no: Array<number>,
    finished_no: Array<number>,
    all_finished: boolean,
    show_wrong_ans: boolean,
    wrong_index: number
}


class Citizenship extends Component <Props, State> {

    static data = [
        {
            no: 1,
            q: "What is the supreme law of the land?",
            a: ["The Constitution"]
        },
        {
            no: 2,
            q: "What does the Constitution do?",
            a: ["set up the government",
                "defines the government",
                "protects basic rights of Americans"
            ]
        },
        {
            no: 3,
            q: "The idea of self-government is in the first three words of the Constitution. What are these words.",
            a: ["We the People"
            ]
        },
        {
            no: 4,
            q: "What is an amendment?",
            a: ["a change ( to the Constitution )",
                "an addition ( to the Constitution )"
            ]
        },
        {
            no: 5,
            q: "What do we call the first ten amendments to the Constitution?",
            a: ["the Bill of Rights"
            ]
        },
        {
            no: 6,
            q: "What is one right or freedom from the First Amendment?",
            a: ["speech",
                "religion",
                "assembly",
                "press",
                "petition the goverment"
            ]
        },
        {
            no: 7,
            q: "How many amendment does the Constitution have?",
            a: ["twenty-seven (27)"
            ]
        },
        {
            no: 8,
            q: "What did the Declaration of Independence do?",
            a: ["announced our independence ( from Great Britain )",
                "declared our independence ( from Great Britain )",
                "said that the United States is free ( from Great Britain )"
            ]
        },
        {
            no: 9,
            q: "What are two rights in the Declaration of Independence?",
            a: ["life",
                "liberty",
                "pursuit of happiness"
            ]
        },
        {
            no: 10,
            q: "What is freedom of religion?",
            a: ["You can practice any religion, or not practice a religion."
            ]
        },
        {
            no: 11,
            q: "What is the economic system in the United States?",
            a: ["capitalist economy.",
                "market economy."
            ]
        },
        {
            no: 12,
            q: 'What is the "rule of law"?',
            a: ["Everyone must follow the law.",
                "Leaders must obey the law.",
                "Government must obey the law",
                "No one is above the law"
            ]
        },
        {
            no: 13,
            q: "Name one branch or part of government?",
            a: ["Congress",
                "Legislative",
                "President",
                "executive",
                "the courts",
                "judicial"
            ]
        },
        {
            no: 14,
            q: "What stops one branch of government from becoming too powerful?",
            a: ["checks and balances",
                "separation of powers"
            ]
        },
        {
            no: 15,
            q: "Who is in charge of the executive branch?",
            a: ["the President"
            ]
        },
        {
            no: 16,
            q: "Who makes federal laws",
            a: ["Congress",
                "Senate and House ( of Representatives )",
                "(U.S. or national) legislature"
            ]
        },
        {
            no: 17,
            q: "What are the two parts of the U.S. Congress?",
            a: ["the Senate and House (of Representatives)"
            ]
        },
        {
            no: 18,
            q: "How many U.S. Senators are there?",
            a: ["one hundred (100)"
            ]
        },
        {
            no: 19,
            q: "We elect a U.S. Senator from how many years?",
            a: ["six (6)"
            ]
        },
        {
            no: 20,
            q: "Who is one of your state's U.S. Senators now?",
            a: ["Kamala Harris"
            ]
        },
        {
            no: 21,
            q: "The House of Representatives has how many voting members?",
            a: ["four hundred thirty-five(435)"
            ]
        },
        {
            no: 22,
            q: "We elect a U.S. Representative for how many years?",
            a: ["two(2)"
            ]
        },
        {
            no: 23,
            q: "Name your U.S. Representative.",
            a: [
                "Jackie Speir"
            ]
        },
        {
            no: 24,
            q: "Who does a U.S. Senator represent?",
            a: ["all people of the state"
            ]
        },
        {
            no: 25,
            q: "Why do some states have more Representatives than other state?",
            a: ["(because of) the state's population",
                "(because) they have more people",
                "(because) some states have more people"
            ]
        },
        {
            no: 26,
            q: "We elect a President for how many years?",
            a: ["four(4)"
            ]
        },
        {
            no: 27,
            q: "In what month do we vote for President?",
            a: ["November"
            ]
        },
        {
            no: 28,
            q: "What is the name of the President of the United States now?",
            a: ["Donald J. Trump",
                "Donald Trump",
                "Trump"
            ]
        },
        {
            no: 29,
            q: "What is the name of the Vice President of the United States now?",
            a: ["Michael R. Pence",
                "Make Pence",
                "Pence"
            ]
        },
        {
            no: 30,
            q: "If the President can no longer serve, who becomes President?",
            a: ["the Vice President"
            ]
        },
        {
            no: 31,
            q: "If both the President and the Vice President can no longer serve, who becomes President?",
            a: ["the Speaker of the House"
            ]
        },
        {
            no: 32,
            q: "Who is the Commander in Chief of the military?",
            a: ["the President"
            ]
        },
        {
            no: 33,
            q: "Who signs bills of become laws?",
            a: ["the President"
            ]
        },
        {
            no: 34,
            q: "Who vetoes bills?",
            a: ["the President"
            ]
        },
        {
            no: 35,
            q: "What does the President's Cabinet do?",
            a: ["advices the President"
            ]
        },
        {
            no: 36,
            q: "What are two Cabinet-level positions?",
            a: ["Secretary of Agriculture",
                "Secretary of Commerce",
                "Secretary of Defense",
                "Secretary of Education",
                "Secretary of Energy",
                "Secretary of Health and Human Services",
                "Secretary of Homeland Security",
                "Secretary of Housing and Urban Develoment",
                "Secretary of the Interior",
                "Secretary of Labor",
                "Secretary of State",
                "Secretary of Transportation",
                "Secretary of the Treasury",
                "Secretary of Veterans Affairs",
                "Attorney General",
                "Vice President",
            ]
        },
        {
            no: 37,
            q: "What does the judicial branch do?",
            a: ["reviews laws",
                "explains laws",
                "resolves disputes(disagreements)",
                "decides if a law goes against the Constitution"
            ]
        },
        {
            no: 38,
            q: "What is the highest court in the United States?",
            a: ["the Supreme Court"
            ]
        },
        {
            no: 39,
            q: "How many justices are on the Supreme Court?",
            a: ["nine(9)"
            ]
        },
        {
            no: 40,
            q: "Who is the Chief justice of the United States now?",
            a: ["John Roberts (John G. Roberts, Jr.)"
            ]
        },
        {
            no: 41,
            q: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
            a: ["to print money",
                "to declare war",
                "to create an army",
                "to make treaties"
            ]
        },
        {
            no: 42,
            q: "Under our Constitution, some powers belongs to the states. What is one power of the states?",
            a: ["provide schooling and education",
                "provide protection(police)",
                "provide safety(fire departments)",
                "give a driver's license",
                "approve zoning and land use"
            ]
        },
        {
            no: 43,
            q: "Who is the Governor of your state now?",
            a: ["Jerry Brown"
            ]
        },
        {
            no: 44,
            q: "What is the capital of your state?",
            a: ["Sacramento"
            ]
        },
        {
            no: 45,
            q: "What are the two major political parties in the United States?",
            a: ["Democratic and Republican"
            ]
        },
        {
            no: 46,
            q: "What is the political party of the President now?",
            a: ["Republican(party)"
            ]
        },
        {
            no: 47,
            q: "What is the name of the Speaker of the House of Representatives now?",
            a: ["Paul D. Ryan",
                "(Paul) Ryan"
            ]
        },
        {
            no: 48,
            q: "There are four amendments to the Constitution about who can vote. Describe one of them.",
            a: ["Citizen eighteen(18) and older (can vote).",
                "You don't have to pay (a poll tax) to vote",
                "Any citizen can vote. (Women and men can votes.)",
                "A male citizen of any race (can vote)."
            ]
        },
        {
            no: 49,
            q: "What is one responsibility that is only for United States citizens?",
            a: ["serve on a jury.",
                "vote in a federal election"
            ]
        },
        {
            no: 50,
            q: "Name one right only for United States citizens?",
            a: ["vote in a federal election.",
                "run for federal office"
            ]
        },
        {
            no: 51,
            q: "What are two rights of everyone living in the United States?",
            a: ["freedom of expression",
                "freedom of speech",
                "freedom of assembly",
                "freedom to petition the government",
                "freedom of religion",
                "the right to bear arms"
            ]
        },
        {
            no: 52,
            q: "What do we show loyalty to when we say the Pledge of Allegiance?",
            a: ["the United States",
                "the flag"
            ]
        },
        {
            no: 53,
            q: "What is one promise you make when you become a United States citizen?",
            a: ["give up loyalty to other countries",
                "defend the Constitution and laws of the United States",
                "obey the laws of the United States",
                "serve in the U.S. military (if needed)",
                "serve (do important work for) the nation (if needed)",
                "be loyal to the United States"
            ]
        },
        {
            no: 54,
            q: "How old do citizens have to be to vote for President?",
            a: ["eighteen(18) and older"
            ]
        },
        {
            no: 55,
            q: "What are two ways that Americans can participate in their democracy?",
            a: ["vote",
                "join a political party",
                "help with a campaign",
                "join a civic group",
                "join a community group",
                "give an elected official your opinion on an issue",
                "call Senators and Representatives",
                "publicly support or oppose an issue or policy",
                "run for office",
                "write to a newspaper"
            ]
        },
        {
            no: 56,
            q: "When is the last day you can send in federal income tax form?",
            a: ["April 15"
            ]
        },
        {
            no: 57,
            q: "When must all men register for the Selective Service?",
            a: ["at age eighteen(18)",
                "between eighteen(18) and twenty-six(26)"
            ]
        },
        {
            no: 58,
            q: "What is one reason colonists came to America?",
            a: ["freedom",
                "political liberty",
                "religious freedom",
                "economic opportunity",
                "practice their religion",
                "escape persecution"
            ]
        },
        {
            no: 59,
            q: "Who lived in America before the Europeans arrived?",
            a: ["American Indians",
                "Native Americans"
            ]
        },
        {
            no: 60,
            q: "What group of poeple was taken to America and sold as slaves?",
            a: ["Africans",
                "people from Africa"
            ]
        },
        {
            no: 61,
            q: "Why did the colonists fright the British?",
            a: ["because of high taxes (taxation without representation)",
                "because the British army stayed in their houses (boarding, quartering)",
                "because they didn't have self-government"
            ]
        },
        {
            no: 62,
            q: "Who wrote the Declaration of Independence?",
            a: ["(Thomas) Jefferson"
            ]
        },
        {
            no: 63,
            q: "When was the Declaration of Independence adopted?",
            a: ["July 4, 1776"
            ]
        },
        {
            no: 64,
            q: "There were 13 original states. Name three?",
            a: ["New Hampshire",
                "Delaware",
                "Massachusetts",
                "Maryland",
                "Rhode Island",
                "Virginia",
                "Connecticut",
                "North Carolina",
                "South Carolina",
                "New York",
                "New Jersey",
                "Georgia",
                "Pennsylvania"
            ]
        },
        {
            no: 65,
            q: "What happened at the Constitutional Convention?",
            a: ["The Constitution was written",
                "The Founding Fathers wrote the Constitution"
            ]
        },
        {
            no: 66,
            q: "When was the Constitution written?",
            a: ["1787"
            ]
        },
        {
            no: 67,
            q: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers?",
            a: ["(James) Madison",
                "(Alexander) Hamilton",
                "(John) Jay",
                "Publius"
            ]
        },
        {
            no: 68,
            q: "What is one thing Benjamin Franklin is famous for?",
            a: ["U.S. diplomat",
                "oldest member of the Constitutional Convention",
                "first Postmaster General of the United States",
                "writer of \"Poor Richard's Almanac\"",
                "started the first free libraries"
            ]
        },
        {
            no: 69,
            q: "Who is the \"Father of Our Country\"?",
            a: ["(George) Washington"
            ]
        },
        {
            no: 70,
            q: "Who was the first President?",
            a: ["(George) Washington"
            ]
        },
        {
            no: 71,
            q: "What territory did the United States buy from France in 1803?",
            a: ["the Louisiana Territory",
                "Louisiana"
            ]
        },
        {
            no: 72,
            q: "Name one war fought by the United States in the 1800s?",
            a: ["War of 1812",
                "Mexican-American War",
                "Civil War",
                "Spanish-American War"
            ]
        },
        {
            no: 73,
            q: "Name the U.S. war between the North and the South",
            a: ["the Civil War",
                "the War between the States"
            ]
        },
        {
            no: 74,
            q: "Name one problem that led to the Civil War",
            a: ["slavery",
                "economic reasons",
                "states' rights"
            ]
        },
        {
            no: 75,
            q: "What was one important thing that Abraham Lincoln did?",
            a: ["freed the slaves (Emancipation Proclamation)",
                "saved (or preserved) the Union",
                "Led the United States during the Civil War"
            ]
        },
        {
            no: 76,
            q: "What did the Emancipation Proclamation do?",
            a: ["freed the slaves",
                "freed slaves in the Confederacy",
                "freed slaves in the Confederate states",
                "freed slaves in most Southern states"
            ]
        },
        {
            no: 77,
            q: "What did Susan B. Anthony do?",
            a: ["fought for women's rights",
                "fought for civil rights"
            ]
        },
        {
            no: 78,
            q: "Name one war fought by the United States in the 1900s.",
            a: ["World War I",
                "World War II",
                "Korean War",
                "Vietnam War",
                "(Persian) Gulf War"
            ]
        },
        {
            no: 79,
            q: "Who was President during World War I?",
            a: ["(Woodrow) Wilson",
            ]
        },
        {
            no: 80,
            q: "Who was President during the Great Depression and World War II",
            a: ["(Franklin) Roosevelt",
            ]
        },
        {
            no: 81,
            q: "Who did the United States fight in World War II",
            a: ["Japan, Germany, and Italy",
            ]
        },
        {
            no: 82,
            q: "Before he was President, Eisenhower was a general. What war was he in",
            a: ["World War II",
            ]
        },
        {
            no: 83,
            q: "During the Cold War, what was the main concern of the United States",
            a: ["Communism",
            ]
        },
        {
            no: 84,
            q: "What movement tried to end racial discrimination?",
            a: ["civil rights (movement)",
            ]
        },
        {
            no: 85,
            q: "What did Margin Luther King, Jr. do?",
            a: ["fought for civil rights",
                "worked for equality for all Americans"
            ]
        },
        {
            no: 86,
            q: "What major event happened on September 11, 2001, in the United States?",
            a: ["Terrorists attacked the United States"
            ]
        },
        {
            no: 87,
            q: "Name one American Indian tribe in the United States?",
            a: ["Cherokee",
                "Navajo",
                "Sioux",
                "Chippewa",
                "Choctaw",
                "Pueblo",
                "Apache",
                "Iroquois",
                "Creek",
                "Blackfeet",
                "Seminole",
                "Cheyenne",
                "Arawak",
                "Shawnee",
                "Mohegan",
                "Huron",
                "Oneida",
                "Lakota",
                "Crow",
                "Teton",
                "Hopi",
                "Inuit"
            ]
        },
        {
            no: 88,
            q: "Name one of the two longest rivers in the United States?",
            a: ["Missouri (River)",
                "Mississippi (River)"
            ]
        },
        {
            no: 89,
            q: "What ocean is on the West Coast of the United States?",
            a: ["Pacific (Ocean)"
            ]
        },
        {
            no: 90,
            q: "What ocean is on the East Coast of the United States?",
            a: ["Atlantic (Ocean)"
            ]
        },
        {
            no: 91,
            q: "Name one U.S. territory",
            a: ["Puerto Rico",
                "U.S. Virgin Island",
                "American Samoa",
                "Northern Mariana Island",
                "Guam"
            ]
        },
        {
            no: 92,
            q: "Name one state that borders Canada",
            a: ["Maine",
                "New Hampshire",
                "Vermont",
                "New York",
                "Pennsylvania",
                "Ohio",
                "Michigan",
                "Minnesota",
                "North Dakota",
                "Montana",
                "Idaho",
                "Washington",
                "Alaska"
            ]
        },
        {
            no: 93,
            q: "Name one state that borders Mexico",
            a: ["California",
                "Arizona",
                "New Mexico",
                "Texas"
            ]
        },
        {
            no: 94,
            q: "What is the capital of the United States?",
            a: ["Washington, D.C."
            ]
        },
        {
            no: 95,
            q: "Where is the statue of liberty?",
            a: ["New York(Harbor)",
                "Liberty Island"
            ]
        },
        {
            no: 96,
            q: "Why does the flag have 13 stripes?",
            a: ["because there were 13 orignal colonies",
                "because the stripes represent the original colonies"
            ]
        },
        {
            no: 97,
            q: "Why does the flag have 50 stars?",
            a: ["because there is one star for each state",
                "because each start represents a state",
                "because there are 50 states"
            ]
        },
        {
            no: 98,
            q: "What is the name of the national anthem?",
            a: ["The Star-Spangled Banner"
            ]
        },
        {
            no: 99,
            q: "When do we celebrate Independence Day?",
            a: ["July 4"
            ]
        },
        {
            no: 100,
            q: "Name two national U.S. holidays.",
            a: ["New Year's Day",
                "Martin Luther King, Jr. Day",
                "Presidents' Day",
                "Memorial Day",
                "Independence Day",
                "Labor Day",
                "Columbus Day",
                "Veterans Day",
                "Thanksgiving",
                "Christmas"
            ]
        },
    ]

    state = {
        index: 0,
        show_ans: false,
        right_no: [],
        wrong_no: [],
        finished_no: [],
        all_finished: false,
        show_wrong_ans: false,
        wrong_index: 0
    }

    componentWillMount(){
        if( window.localStorage.getItem( 'citizenship_state' ) ){
            this.setState(JSON.parse( window.localStorage.getItem( 'citizenship_state' ) ), () => {
            })
        } else {
            this.select()
        }
    }

    componentDidMount(){
        document.title = "Citizenship Civics Practice"
    }

    select = () => {
        if( this.state.finished_no.length >= Citizenship.data.length ){
            this.setState({
                all_finished: true
            })
        } else {
            var index = null;
            while ( ( index === null || this.state.finished_no.indexOf( index ) > -1  ) ){
                index = Math.floor( Math.random() * Citizenship.data.length )
            }
            var finished_no = this.state.finished_no
            finished_no.push( index )
            this.setState({
                show_ans: false,
                index: index,
                finished_no: finished_no
            })
        }


    }

    handleCheckAnswer = () => {
        this.setState({
            show_ans: true
        })
    }

    handleRight = () => {
        let right_no = this.state.right_no;
        right_no.push( this.state.index )
        this.setState({
            right_no: right_no
        }, () => {
            this.select()
        })
    }

    handleWrong = () => {
        let wrong_no = this.state.wrong_no
        wrong_no.push(this.state.index)
        this.setState({
            wrong_no: wrong_no
        }, () => {
            this.select()
        })
    }

    handleCheckWrongAnswer = () => {
        this.setState({
            show_wrong_ans: true
        })
    }

    handleReset = () => {
        window.localStorage.removeItem("citizenship_state");
        location.reload()
    }

    renderQA = () => {

        return (
            <div className="app" style={ { textAlign: 'center', margin: "20px" } }>
                <div style={ {margin: "20px"} }>
                    <div style={ { textAlign: "left", float: "left" } }>
                        <Button
                            onClick={ this.handleReset }
                        >
                            Reset
                        </Button>
                    </div>

                    <div style={ { textAlign: "right", float: "right", marginTop: "10px" } } >{ this.state.finished_no.length } / { Citizenship.data.length }</div>
                    <div style={ { clear: "both" } }></div>
                    <Paper>
                        <div style={ { padding: "20px", textAlign: "left" } }>
                            <h4 style={ { marginTop: "0", marginBottom: "5px" } } >Question:</h4>
                            <div>{ Citizenship.data[this.state.index].q }</div>
                        </div>
                    </Paper>
                </div>
                <div style={ {margin: "20px"} } >
                    { ( () => {
                        if( this.state.show_ans ){
                            return <div>
                                <Paper>
                                    <div style={ { padding: "20px", textAlign: "left" } }>
                                        <h4 style={ { marginTop: "0", marginBottom: "5px" } } >Answer:</h4>
                                        <div>
                                            { ( () => {
                                                return Citizenship.data[this.state.index].a.map((ans, i) => {
                                                    return <div key={i}>{ ans }</div>
                                                })
                                            } )() }
                                        </div>
                                        <div style={ { marginTop: "10px", fontSize: "80%" } } >Question No: { Citizenship.data[this.state.index].no }</div>
                                    </div>
                                </Paper>

                                <Button
                                    style={{margin: "20px 10px", fontSize: "90%"}}
                                    variant="raised"
                                    onClick={ this.handleWrong }
                                >
                                    × DID Wrong
                                </Button>

                                <Button
                                    style={{margin: "20px 10px", fontSize: "90%"}}
                                    variant="raised"
                                    color="primary"
                                    onClick={ this.handleRight }
                                >
                                    ○ DID Right
                                </Button>
                            </div>
                        } else {
                            return <div>
                                <Button
                                    variant="raised"
                                    color="primary"
                                    onClick={ this.handleCheckAnswer }
                                >
                                    Check Answer
                                </Button>
                            </div>
                        }
                    } )() }
                </div>


            </div>

        )
    }

    render() {
        window.localStorage.setItem( 'citizenship_state', JSON.stringify(this.state) )

        if( this.state.all_finished ){
            if( this.state.show_wrong_ans ){
                return (<div className="app" style={ { textAlign: 'center', margin: "20px" } }>
                    <h4>Wrong Answers</h4>
                    { ( () => {
                        return this.state.wrong_no.sort().map( (windex, i) => {
                            return <div key={i} style={{margin: "20px"}}>
                                <Paper>
                                    <div style={ { padding: "20px", textAlign: "left" } }>
                                        <h4 style={ { marginTop: "0", marginBottom: "5px" } } >Question</h4>
                                        <div>{ Citizenship.data[windex].q }</div>
                                        <h4 style={ { marginTop: "20px", marginBottom: "5px" } } >Answer:</h4>
                                        <div>
                                            { ( () => {
                                                return Citizenship.data[windex].a.map((ans, i) => {
                                                    return <div key={i}>{ ans }</div>
                                                })
                                            } )() }
                                        </div>
                                        <div style={ { marginTop: "10px", fontSize: "80%" } } >Question No: { Citizenship.data[windex].no }</div>
                                    </div>
                                </Paper>
                            </div>
                        } )
                    } )() }
                    <div style={ { textAlign: "center", margin: "20px" } }>
                        <Button
                            variant="raised"
                            color="primary"
                            onClick={ this.handleReset }
                        >
                            Reset
                        </Button>
                    </div>
                </div>)
            } else {
                return (<div className="app" style={ { textAlign: 'center', margin: "20px" } }>
                    All Finished.
                    <div>Your answered { this.state.right_no.length / Citizenship.data.length * 100 }% right.</div>
                    { ( () => {
                        if( this.state.right_no.length !== Citizenship.data.length ){
                            return <Button
                                style={{margin: "20px"}}
                                variant="raised"
                                color="primary"
                                onClick={ this.handleCheckWrongAnswer }
                            >
                                Check Wrong Answer
                            </Button>
                        } else {
                            return <Button
                                variant="raised"
                                color="primary"
                                onClick={ this.handleReset }
                            >
                                Reset
                            </Button>
                        }
                    } )() }

                </div>)
            }

        } else if( this.state.index != null ){
            return this.renderQA();
        } else {
            return null
        }

    }
}


export default Citizenship;
