import React from 'react'

interface Props {
    formObject: any;
    formErrors: any;
    isLoading: boolean;
    handleChange: Function;
    submit: Function;
}

const ServiceFormCmp = (props: Props) => {
    // const { username, email, discord_id, nft_name, nft_to_mint, release_date } = props.formObject;
    // if (username && email && discord_id && nft_name && nft_to_mint && release_date
    //     && !props.formErrors.username && !props.formErrors.email && !props.formErrors.discord_id
    //     && !props.formErrors.nft_name && !props.formErrors.nft_to_mint && !props.formErrors.release_date) {

    // }
    return (
        <>
            <form className="srv-frm-bx" onSubmit={(e) => props.submit(e)}>
                <div className="srv-frm-dsg1" />
                <div className="srv-frm-dsg2">
                    <div className="row m-0">
                        <div className="col-md-6">
                            <div className="frm-grp">
                                <label className="frm-grp-label">How shall we call you <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    name="username"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.username}
                                    className={`frm-grp-inp ${props.formErrors?.username ? ' error' : ''}`}
                                    placeholder="Name"
                                    required
                                />
                                {props.formErrors?.username ? <p className="inp-errors">Invalid Name</p> : null}
                            </div>
                            <div className="frm-grp">
                                <label className="frm-grp-label">Email <span className="text-danger">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.email}
                                    className={`frm-grp-inp ${props.formErrors?.email ? ' error' : ''}`}
                                    placeholder="Your Email Address"
                                    required
                                />
                                {props.formErrors?.email ? <p className="inp-errors">Invalid Email</p> : null}
                            </div>
                            <div className="frm-grp">
                                <label className="frm-grp-label">Discord ID <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    name="discord_id"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.discord_id}
                                    className={`frm-grp-inp ${props.formErrors?.discord_id ? ' error' : ''}`}
                                    placeholder="Your Discord ID"
                                    required
                                />
                                {props.formErrors?.discord_id ? <p className="inp-errors">Invalid Discord ID</p> : null}
                            </div>
                            <div className="frm-grp">
                                <label className="frm-grp-label">Telegram ID</label>
                                <input
                                    type="text"
                                    name="telegram_id"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.telegram_id}
                                    className={`frm-grp-inp`}
                                    placeholder="Your Telegram ID"
                                />
                                {/* {props.formErrors?.telegram_id ? <p className="inp-errors">Invalid Telegram ID</p> : null} */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="frm-grp">
                                <label className="frm-grp-label">NFT Name <span className="text-danger">*</span></label>
                                <input
                                    type="text"
                                    name="nft_name"
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.nft_name}
                                    className={`frm-grp-inp ${props.formErrors?.nft_name ? ' error' : ''}`}
                                    placeholder="Your NFT Name"
                                    required
                                />
                                {props.formErrors?.nft_name ? <p className="inp-errors">Invalid NFT Name</p> : null}
                            </div>
                            <div className="frm-grp">
                                <label className="frm-grp-label">How many NFTs you want to mint <span className="text-danger">*</span></label>
                                <input
                                    type="number"
                                    name="nft_to_mint"
                                    min={0}
                                    onChange={(e) => props.handleChange(e)}
                                    value={props.formObject?.nft_to_mint}
                                    className={`frm-grp-inp ${props.formErrors?.nft_to_mint ? ' error' : ''}`}
                                    placeholder="NFT Count"
                                    required
                                />
                                {props.formErrors?.nft_to_mint ? <p className="inp-errors">Invalid NFT Count</p> : null}
                            </div>
                            <div className="frm-grp">
                                <label className="frm-grp-label">Expected Date of Release <span className="text-danger">*</span></label>
                                <div className="position-relative">
                                    <input
                                        type="text"
                                        name="release_date"
                                        onChange={(e) => props.handleChange(e)}
                                        value={props.formObject?.release_date}
                                        className={`frm-grp-inp ${props.formErrors?.release_date ? ' error' : ''}`}
                                        placeholder="MM/DD/YYYY"
                                        required
                                    />
                                    <a tabIndex={0} className="info-icon" role="button">
                                        <i className="fas fa-info-circle" />
                                        <span className="tooltiptext">Not sure, write TBA(To be Announced)</span>
                                    </a>
                                    {props.formErrors?.release_date ? <p className="inp-errors">Invalid</p> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="frm-bx-btn" disabled={props.isLoading}>
                            {!props.isLoading ? 'Sign UP !' : <span className="loader"></span>}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ServiceFormCmp
