interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country?: Country;
}

export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    France = "France",
}

export const Person = (props: Props) => {

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age: {props.age}</h1>
            <h1>This person {props.isMarried ? "is" : "is not"} Married</h1>
            {props.friends.map((friend: string, val: number) => (
                <h1 key={val}>{friend}</h1>
            ))}
            <h2>Country: {props.country} </h2>
        </div>
    )
}