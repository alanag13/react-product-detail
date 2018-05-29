export default interface IActionButtonProps {
    cssClass: string;
    buttonText: string;
    action?(): void;
    checkVisible?(): boolean;
}