import React, {useState} from 'react';
import {members} from "../data/members"
import {
    Card, 
    Image,
    Divider,
    Accordion
} from "semantic-ui-react"

const MembersComponent = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    
    const handleClick = (e, props) => {
        const {index} = props
        index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
    }


    return (
        <div className="members-container">
            {members.map((member, index) => {
                return (
                    <div key={index} className="band-member">
                        <Card key={index}>
                            <Accordion className="accordian">
                                <Accordion.Title 
                                    index={index} 
                                    onClick={handleClick}
                                >
                                    <Image src={member.img} className="member-image" />
                                    <h4 className="member-name">{member.name} ({member.instrument})</h4>
                                    <div className="click-for-more">{activeIndex !== index ? "Click for bio" : null}</div>
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === index ? true : false} className="accordian-content">
                                    <Divider />
                                    <Card.Content>
                                        <Card.Description>
                                            {member.bio}
                                        </Card.Description>
                                    </Card.Content>
                                </Accordion.Content>
                            </Accordion>
                        </Card>
                    </div>
                )
            })}
        </div>
    );
};

export default MembersComponent;