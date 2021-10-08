export default interface IServiceForm {
    service_name: string;
    username: string;
    email: string;
    discord_id: string | number;
    telegram_id: string | number;
    nft_name: string;
    nft_to_mint: string | number;
    release_date: any;
}