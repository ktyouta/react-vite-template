import { useSiginup } from "../hooks/use-signup";
import { Siginup } from "./signup";

export function SiginupContainer() {

    const props = useSiginup();

    return (
        <Siginup
            {...props}
        />
    );
}