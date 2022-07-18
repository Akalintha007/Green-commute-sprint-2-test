
import React, { useState } from 'react';
import {render, screen} from '@testing-library/react';
import { ReactComponent as savedJobs } from '../../../../public/assets/sideMenuIcons/SavedJobs.svg';

import MenuItemComponent from '.';

function renderMenuItem(selected: boolean) {
    render(<MenuItemComponent component={savedJobs} selectedComponent={savedJobs} itemData={"Saved Jobs"} selected={selected} handleState={() => !selected}/>);
}

describe('Molecules', () => {
    test('renders filter button', () => {
        const selected = false;
        renderMenuItem(false);
        expect(screen.getByRole("menuitem")).toBeInTheDocument();
        expect(screen.getByTestId("SVGIcon")).toBeInTheDocument();
        expect(screen.getByText("Saved Jobs")).toBeInTheDocument();
    });

    test('renders selected filterbutton', () => {
        const selected = true;
        renderMenuItem(true);
        expect(screen.getByRole("menuitem")).toBeInTheDocument();
        expect(screen.getByTestId("SVGIcon")).toBeInTheDocument();
        expect(screen.getByText("Saved Jobs")).toBeInTheDocument();
    })
});