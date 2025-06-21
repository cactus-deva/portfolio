interface ButtonProps {
    children: string;
    bgColor?: string;
    text?: string;
    padding?: string;
    type?: "button" | "submit" | "reset"
}

export const Button = ({children, bgColor = 'bg-purple-600', text = 'text-white', padding = 'py-2 px-3', type}: ButtonProps) => {

    return (
        <button type={type} className={`${bgColor} ${text} ${padding} rounded-md font-semibold hover:opacity-80 cursor-pointer`}>{children}</button>
    )
}