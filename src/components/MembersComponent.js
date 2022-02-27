import React, {useState} from 'react';
import Bio from "./BioComponent"
import {members} from "../data/members"
import {
    Card, 
    Image,
    Divider,
    Accordion
} from "semantic-ui-react"

const MembersComponent = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const [bioOpen, setBioOpen] = useState(false)
    
    const handleClick = (e, props) => {
        const {index} = props
        index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
        setBioOpen(true)
    }

    const activeMember = members[activeIndex]

    return (
        <div className="members-container">
            {members.map((member, index) => {
                return (
                    <div key={index} className="band-member">
                        <Card 
                            index={index} 
                            onClick={handleClick}
                            raised
                        >
                            <div className="member-image-container">
                                <Image src={member.img} className="member-image" />
                            </div>
                            <div style={{padding: "1rem 0"}}>
                                <h4 className="member-name">{member.name} ({member.instrument})</h4>
                                <div className="click-for-more">{activeIndex !== index ? "Click for bio" : null}</div>
                            </div>
                        </Card>

                        {activeMember ? 
                            <Bio activeMember={activeMember} bioOpen={bioOpen} setActiveIndex={setActiveIndex} setBioOpen={setBioOpen} />
                        :
                        null}

                    </div>
                )
            })}
        </div>
    );
};

export default MembersComponent;