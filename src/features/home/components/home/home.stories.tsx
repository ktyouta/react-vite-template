import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import { BodyContainer } from '../body/body-ccontainer'
import { Home } from './home'

const meta: Meta<typeof Home> = {
    title: 'Pages/Home',
    component: Home,
}

export default meta
type Story = StoryObj<typeof Home>


export const Default: Story = {
    render: () => {
        return (
            <Home>
                <BodyContainer />
            </Home>
        )
    },
}

export const Custom: Story = {
    render: () => {
        return (
            <Home>
                <Box>
                    message
                </Box>
            </Home>
        )
    },
}