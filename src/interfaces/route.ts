export default interface IRoutes{
    path: string;
    name: string;
    exact: boolean;
    strict?: boolean;
    component: any;
    props?: any;
}