import React from 'react';
import {
    Table,
    Icon,
} from "semantic-ui-react"

const ShowTableComponent = () => {
    return (
        <Table 
            celled 
            className="show-table"
            size="small" 
            compact={true}
            unstackable
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Venue</Table.HeaderCell>
                    <Table.HeaderCell>Time</Table.HeaderCell>
                    <Table.HeaderCell>Cover</Table.HeaderCell>
                    <Table.HeaderCell>Event Link</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>March 3rd</Table.Cell>
                    <Table.Cell>Gallery Cabaret</Table.Cell>
                    <Table.Cell>TBD</Table.Cell>
                    <Table.Cell>$5 suggested donation</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>April 10th</Table.Cell>
                    <Table.Cell>The Chop Shop</Table.Cell>
                    <Table.Cell>Doors @ 5PM</Table.Cell>
                    <Table.Cell>$12</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>April 22nd</Table.Cell>
                    <Table.Cell>Gallery Cabaret</Table.Cell>
                    <Table.Cell>TBD</Table.Cell>
                    <Table.Cell>$5 suggested donation</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default ShowTableComponent;