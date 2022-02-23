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
                    <Table.Cell>No Name Specified</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Jimmy</Table.Cell>
                    <Table.Cell>Requires Action</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>UNknown</Table.Cell>
                </Table.Row>

                <Table.Row>
                    <Table.Cell>Jill</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>Unknown</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

export default ShowTableComponent;