export default interface SearchBoxProps {
    placeholder: string,
    classes?: string,
    value?: string
    changeHandler?: (event: any) => void;
}