export interface IData {
    number?: string | null;
    bill_at?: string | null;
    amount?: string | null;
    amount_to_pay?: string | null;
    discount_at?: string | null;
    discount_size?: string | null;
    payment_status?: string | null;
    quittance?: string | null;
    pay_status?: string | null;
    is_revoked?: string | null;
    name?: string | null;
    koap_code?: string | null;
    koap_text?: string | null;
    location?: string | null;
    doc_type?: string | null;
    doc_number?: string | null;
    reg_cert?: string | null;
    violation_at?: string | null;
    violator_name?: string | null;
    division_name?: string | null;
    division_code?: string | null;
    fssp_ip?: string | null;
    fssp_uin?: string | null;
    payee_username?: string | null;
    payee_inn?: string | null;
    payee_kpp?: string | null;
    payee_oktmo?: string | null;
    payee_bank_name?: string | null;
    payee_bank_bik?: string | null;
    payee_bank_account?: string | null;
    kbk?: string | null;
    docs?: IDocs[];
    pics?: any[];
    is_cached?: Boolean
}

interface IDocs {
    type?: string;
    number?: string;
    main?: boolean
}