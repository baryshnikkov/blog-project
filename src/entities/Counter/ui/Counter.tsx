import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = memo(() => {
    // const dispatch = useDispatch();
    // const counterValue = useSelector(getCounterValue);
    const counterValue = useCounterValue();
    const { add, increment, decrement } = useCounterActions();

    // const handleIncrement = () => {
    //     dispatch(counterActions.increment());
    // };
    //
    // const handleDecrement = () => {
    //     dispatch(counterActions.decrement());
    // };

    const handleIncrement = () => {
        increment();
    };

    const handleDecrement = () => {
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={handleIncrement} data-testid="increment-btn">
                +
            </Button>
            <Button onClick={handleDecrement} data-testid="decrement-btn">
                -
            </Button>
            <Button onClick={handleAddFive} data-testid="decrement-on-five-btn">
                +5
            </Button>
        </div>
    );
});
