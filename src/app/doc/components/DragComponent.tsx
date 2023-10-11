import styles from "../../../../styles/doc.module.css";

export default function DragComponent({type}: {type: string}) {
    return (
        <div className={styles.componentContainer}>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentIcon}
            >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82617 0.585022H14.1737C16.659 0.585022 18.6737 2.59974 18.6737 5.08502V15.21C18.6737 16.4035 18.1996 17.5481 17.3557 18.392C16.5117 19.2359 15.3671 19.71 14.1737 19.71H5.82617C3.34089 19.71 1.32617 17.6953 1.32617 15.21V5.08502C1.32617 2.59974 3.34089 0.585022 5.82617 0.585022ZM16.9412 5.08502C16.935 3.55913 15.6996 2.32369 14.1737 2.31752H5.82617C4.30028 2.32369 3.06484 3.55913 3.05867 5.08502V15.21C3.06484 16.7359 4.30028 17.9714 5.82617 17.9775H14.1737C15.6996 17.9714 16.935 16.7359 16.9412 15.21V5.08502Z" fill="black"/>
                <path d="M13.6112 9H6.38867C5.92268 9 5.54492 8.62224 5.54492 8.15625C5.54492 7.69026 5.92268 7.3125 6.38867 7.3125H13.6112C14.0772 7.3125 14.4549 7.69026 14.4549 8.15625C14.4549 8.62224 14.0772 9 13.6112 9Z" fill="black"/>
            </svg>

            <h2 className={styles.componentName}>{type}</h2>

            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentDragIcon}
            >
                <path d="M12.2094 15.9153L9.99973 18.125L7.79004 15.9153" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 12.5V18.125" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.79004 4.08469L9.99973 1.875L12.2094 4.08469" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 7.5V1.875" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.08469 12.2097L1.875 9.99997L4.08469 7.79028" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.5 10H1.875" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.915 7.79028L18.1247 9.99997L15.915 12.2097" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 10H18.125" stroke="#A7A7A7" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.componentThreeDots}
            >
                <path d="M10 10.9375C10.5178 10.9375 10.9375 10.5178 10.9375 10C10.9375 9.48223 10.5178 9.0625 10 9.0625C9.48223 9.0625 9.0625 9.48223 9.0625 10C9.0625 10.5178 9.48223 10.9375 10 10.9375Z" fill="black"/>
                <path d="M10 5.9375C10.5178 5.9375 10.9375 5.51777 10.9375 5C10.9375 4.48223 10.5178 4.0625 10 4.0625C9.48223 4.0625 9.0625 4.48223 9.0625 5C9.0625 5.51777 9.48223 5.9375 10 5.9375Z" fill="black"/>
                <path d="M10 15.9375C10.5178 15.9375 10.9375 15.5178 10.9375 15C10.9375 14.4822 10.5178 14.0625 10 14.0625C9.48223 14.0625 9.0625 14.4822 9.0625 15C9.0625 15.5178 9.48223 15.9375 10 15.9375Z" fill="black"/>
            </svg>
        </div>
    )
}