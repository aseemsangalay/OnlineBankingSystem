import { render, screen, cleanup } from '@testing-library/react';
import Card from '../Card';
import LogoutButton from '../LogoutButton';

test('card render', () => {
    render(<Card cardIcon='fa fa-money-check' cardLabel={"Total Spendings"}
    cardInfo={`₹ 1000`} theme="dark" />)

    const cardElement = screen.getByTestId('card-1');
    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveTextContent('Total Spendings');
})

test('logout button render', () => {
    render(<LogoutButton theme="dark" />)

    const sidebarElement = screen.getByTestId('logout-1');
    expect(sidebarElement).toBeInTheDocument();
    expect(sidebarElement).toHaveTextContent('Logout');
})

// Api Integration test
test('admin all_accounts api', async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/accounts`)
    const data = await res.json();

    expect(data[0]["account_type"]).toEqual("savings");
})
