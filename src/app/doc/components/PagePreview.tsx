import styles from "../../../../styles/doc.module.css";

export default function PagePreview({index}: {index: number}) {
    return (
        <div key={index} className={styles.pagePreviewContainer}>
            <h3 className={styles.pagePreviewIndex}>{index+1}</h3>
            <div className={styles.pagePreview}>
                <svg className={styles.pagePreviewDeleteButton} width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.6062 5.17722C13.2091 5.17722 12.8873 5.49909 12.8873 5.89611V13.9404C12.8873 15.6341 11.5143 17.007 9.82061 17.007H4.65189C2.95823 17.007 1.58524 15.6341 1.58524 13.9404V5.89611C1.58524 5.49909 1.26339 5.17722 0.86635 5.17722C0.469323 5.17722 0.147461 5.49909 0.147461 5.89611V13.9404C0.172413 16.4355 2.2022 18.4449 4.69739 18.4448H9.86611C12.3435 18.4202 14.3459 16.4178 14.3705 13.9404V5.89611C14.3709 5.6973 14.289 5.5072 14.1441 5.371C13.9994 5.23479 13.8045 5.16464 13.6062 5.17722Z" fill="black"/>
                    <path d="M13.6062 3.88507H0.86635C0.469323 3.88507 0.147461 3.56322 0.147461 3.16618C0.147461 2.76914 0.469323 2.44729 0.86635 2.44729H3.27781L4.3516 1.28251C4.76206 0.865199 5.32232 0.629303 5.90767 0.627319H8.56483C9.14167 0.62731 9.69485 0.856445 10.1027 1.26431L11.1947 2.44729H13.6062C14.0032 2.44729 14.325 2.76914 14.325 3.16618C14.325 3.56322 14.0032 3.88507 13.6062 3.88507ZM8.56483 2.0651H5.90767C5.72577 2.06516 5.55045 2.13334 5.41628 2.25619L5.24338 2.43819H9.22912L9.05622 2.25619C8.923 2.13176 8.7471 2.06334 8.56483 2.0651Z" fill="black"/>
                    <path d="M5.60742 7.90723V12.4572" stroke="black" stroke-width="1.16478" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.24707 7.90723V12.4572" stroke="black" stroke-width="1.16478" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}
